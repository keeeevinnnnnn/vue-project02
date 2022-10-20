<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分類</h2>
        <!-- 三级联动结构||过渡动画效果-->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 事件的委派更加合理一些 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="changeIndex(index)"
              >
                <h3 :class="{ show: currentIndex === index }">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二級與三級分類 -->
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a>服装城</a>
        <a href="###">美妝館</a>
        <a href="###">尚品匯超市</a>
        <a href="###">全球購</a>
        <a href="###">閃購</a>
        <a href="###">團購</a>
        <a href="###">有趣</a>
        <a href="###">秒殺</a>
      </nav>
    </div>
  </div>
</template>

<script>
//按需引入：只是把需要的功能引入进来  ||  import _ from "lodash" 全部引入
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存儲用戶鼠標位置
      currentIndex: -1,
      // 控制菜單顯示與隱藏
      show: true,
    };
  },
  mounted() {
    // 當組件掛載完畢，讓SHOW屬性變為false
    // 如果不是home路由組件，將typeNav進行隱藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    // 右側需要的是一個函數，當使用這個計算屬性的時候，右側函數會立即執行一次
    // 注入一個參數state，就是大倉庫的數據
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 鼠標進入修改響應式數據currentIndex數據
    // throttle 節流功能
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),
    goSearch(event) {
      // 第一個問題: 把子節點當中a標籤，加上自訂義屬性 data-categoryName，其餘的子節點是沒有的
      let element = event.target;
      // 獲取到當前發這個事件的節點【h3、a、dt、d1】，需要帶有 data-categoryName這樣節點【一定是a標籤】
      // 節點有一個屬性dataset屬性，可以獲取節點的自訂義屬性與屬性值
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      // 如果標籤身上擁有 categorynameu一定是a標籤
      if (categoryname) {
        // 整理路由跳轉的參數
        let location = { name: "search" };
        let query = { categoryName: categoryname };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // 路由跳轉之前: 看一下有沒有params參數，如果有params參數需要攜帶給search組件。
        if (this.$route.params) {
          //query参数
          location.query = query;
          //params
          location.params = this.$route.params;
          //如有有params參數也需要携带给search組件
          //home->search確實需要紀錄歷史
          //search->search不需要存儲歷史紀錄
          if (this.$route.path != "/home") {
            this.$router.replace(location);
          } else {
            this.$router.push(location);
          }
        }
      }
    },
    // 鼠標移入的時候，顯示商品列表
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    // 鼠標離開的時候，隱藏商品列表
    leaveShow() {
      this.currentIndex = -1;
      // 判斷如果是 searh路由組件的時候才執行
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            &.show {
              background: linear-gradient(
                to right,
                pink,
                yellow,
                cyan,
                blue,
                red
              );
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    //过渡动画的样式
    //如果transiton没有name属性 ： v-enter   v-enter-to v-enter-active
    //如果transition有name属性  ： name的属性值-enter  name的属性值-enter-to
    //进入状态：开始阶段
    .sort-enter {
      height: 0px;
      transform: rotate(0deg);
    }
    //进入状态：结束阶段
    .sort-enter-to {
      height: 461px;
      transform: rotate(360deg);
    }
    //定义过渡动画的时间等等
    .sort-enter-active {
      transition: all 0.2s;
    }
  }
}
</style>
