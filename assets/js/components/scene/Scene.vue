<template>
  <div class="lyt-Content">
    <div class="lyt-Header">
      <div class="lyt-Columns">
        <div class="lyt-Column">
          <div class="lyt-Items">
            <div class="lyt-Item lyt-Item-buttonContainer">
              <h1>Your current social class: {{ $store.getters.socialClass.label }}</h1>
              <p>{{ $store.getters.socialClass.description }}</p>
              <progress class="scn-Progress" :value="$store.getters.netWorth" :max="$store.getters.nextSocialClass"></progress>
              <p>Next social class in {{ ($store.getters.nextSocialClass - $store.getters.money) | currency }}</p>
            </div>

            <div class="lyt-Item">
              <a class="scn-PrimaryAction" @click.prevent="getMoney" href="#">Get paid</a>
            </div>
          </div>
        </div>

        <div class="lyt-Column">
          <div class="lyt-Items">
            <div class="lyt-Item">
              <div class="scn-DataTitle">Money:</div>
              <div class="scn-DataValue">{{ $store.getters.money | currency }}</div>
            </div>
            <div class="lyt-Item">
              <div class="scn-DataTitle">Net worth:</div>
              <div class="scn-DataValue">{{ $store.getters.netWorth | currency }}</div>
            </div>
            <div class="lyt-Item">
              <div class="scn-DataTitle">Money per second:</div>
              <div class="scn-DataValue">{{ $store.getters.moneyPerSecond | currency }}</div>
            </div>
            <div class="lyt-Item">
              <div class="scn-DataTitle">Money per click:</div>
              <div class="scn-DataValue">{{ $store.getters.moneyPerClick | currency }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lyt-Columns">
      <div class="lyt-Column">
        <div class="lyt-Items">
          <div class="lyt-Item">
            <h1 class="scn-ColumnTitle">Jobs</h1>
          </div>

          <div class="lyt-Item" v-for="(id, job) in $store.getters.jobs">
            <div class="lyt-ItemColumns">
              <div class="lyt-ItemColumn lyt-ItemColumn-image">
                <img :src="$store.getters.jobImage(id)" alt="">
              </div>

              <div class="lyt-ItemColumn lyt-ItemColumn-description">
                <h4>{{ job.label }} ({{ $store.getters.jobsPurchased[id] | default 0 }})</h4>
                <p>Cost to apply: {{ $store.getters.jobCost(id) | currency }}</p>
                <p>Income: {{ job.moneyPerClick | currency }} / click</p>
              </div>

              <div class="lyt-ItemColumn lyt-ItemColumn-action">
                <a href="#" class="scn-Action" @click.prevent="getJob(id)" :class="{
                  'scn-Action-disabled': $store.getters.money < $store.getters.jobCost(id)
                }">Get hired</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lyt-Column">
        <div class="lyt-Items">
          <div class="lyt-Item">
            <h1 class="scn-ColumnTitle">Businesses</h1>
          </div>

          <div class="lyt-Item" v-for="(id, business) in $store.getters.businesses">
            <div class="lyt-ItemColumns">
              <div class="lyt-ItemColumn lyt-ItemColumn-image">
                <img :src="$store.getters.businessImage(id)" alt="">
              </div>

              <div class="lyt-ItemColumn lyt-ItemColumn-description">
                <h4>{{ business.label }} ({{ $store.getters.businessesOwned[id] | default 0 }})</h4>
                <p>Cost to start: {{ $store.getters.businessCost(id) | currency }}</p>
                <p>Income: {{ business.moneyPerSecond | currency }} / second</p>
              </div>

              <div class="lyt-ItemColumn lyt-ItemColumn-action">
                <a href="#" class="scn-Action" @click.prevent="getBusiness(id)" :class="{
                  'scn-Action-disabled': $store.getters.money < $store.getters.businessCost(id)
                }">Get Businessed</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="lyt-Footer">
    <div class="lyt-Item">
      <a href="#" class="scn-Action" @click.prevent="reset">Reset game</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../../store';


  export default {
    store,

    ready () {
      window.requestAnimationFrame(this.nextGameTick)
    },

    computed: {
      socialClass () {
        let level = 0
        this.socialClassLevels.forEach((level, index) => {
          if (store.getters.money > level) {
            level = index
          } else {
            return true
          }
        })

        return this.socialClasses[level]
      }
    },

    methods: {
      nextGameTick () {
        let delta = 0

        if (!this.lastUpdate) {
          this.lastUpdate = new Date()
        } else {
          const newUpdateTime = new Date()
          delta = newUpdateTime - this.lastUpdate

          this.lastUpdate = newUpdateTime
        }

        store.commit('ADD_MONEY', store.getters.moneyPerSecond / (1000 / delta))

        window.requestAnimationFrame(this.nextGameTick)
      },

      getMoney () {
        store.commit('ADD_MONEY', store.getters.moneyPerClick)
      },

      getJob (jobID) {
        // Can the user afford to get this job?
        if (store.getters.money < store.getters.jobCost(jobID)) {
          // No.
          return false
        }

        // Yes.
        store.dispatch('addJob', jobID)
      },

      getBusiness (businessID) {
        // Can the user afford to get this job?
        if (store.getters.money < store.getters.businessCost(businessID)) {
          // No.
          return false
        }

        // Yes.
        store.dispatch('addBusiness', businessID)
      },

      reset () {
        store.commit('RESET')
      }
    }
  }
</script>
