<template>
  <div id="page">
    <section class="content">
      <Step />
      <!-- 會員登入彈窗 -->
      <div class="modal fade" id="MemberLogin">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id>會員登入</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-center">歡迎回來</p>
              <button type="button" class="l-btn btn-facebook mr-2 w-100">
                FACEBOOK
                快速登入
              </button>
              <hr class="divider" />
              <button type="button" class="l-btn btn-line mr-2 w-100">LINE 快速登入</button>
              <hr class="divider" />
              <input class="form-control mb-3" type="text" placeholder="E-MAIL" />
              <input class="form-control mb-3" type="text" placeholder="密碼" />
              <button type="button" class="l-btn btn-user mr-2 w-100">會員登入</button>
              <div class="form-check w-100 mt-2">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                <label class="form-check-label check-label" for="defaultCheck1">保持登入</label>
              </div>
              <div class="login-footer row mt-3">
                <div class="col-xs-6 text-center">
                  <a href>
                    <i class="fa fa-key" aria-hidden="true"></i> 忘記密碼嗎？
                  </a>
                </div>
                <div class="col-xs-6 text-center">
                  <a href="#" class="nav-link" @click="goto('/login/registered')">
                    <i class="fa fa-user" aria-hidden="true"></i> 註冊新會員
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="min-height: 600px">
        <div class="row">
          <div class="col-md-5">
            <!-- 會員專區 -->
            <div class="border p-3">
              <h5>會員專區</h5>
              <p>
                會員登入
                <span class="hint-label">*登入會員管理訂單更方便！</span>
              </p>
              <div class="user-login-buttons">
                <button type="button" class="l-btn fb-login-btn mr-2">快速登入</button>
                <button type="button" class="l-btn line-login-btn mr-2">快速登入</button>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="l-btn user-login-btn"
                  data-toggle="modal"
                  data-target="#MemberLogin"
                >會員登入</button>
              </div>
              <div class="mt-2 mb-2">非會員購買</div>
              <input class="form-control" type="text" v-model="customer.email" placeholder="連絡信箱" />
              <div class="hint-label mt-2">訂單通知會寄到此信箱，請您務必填入正確的 E-mail</div>
            </div>
            <!-- 訂單備註 -->
            <div class="border p-3 mt-3">
              <h5>訂單備註</h5>
              <div class="form-group">
                <textarea class="form-control rounded-0" rows="3" placeholder="有什麼想告訴賣家嗎?"></textarea>
              </div>
            </div>
            <!-- 索取發票 -->
            <div class="border p-3 mt-3">
              <h5>索取發票</h5>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-2 float-left control-label">電子發票</div>
                  <div class="col-md-10 float-left mb-3">
                    <div class="form-check form-check-inline" v-for="(item,i) in invoice_option">
                      <input
                        class="form-check-input"
                        type="radio"
                        :value="item.id"
                        v-model="invoice"
                      />
                      <label class="form-check-label" :for="item.id">{{item.title}}</label>
                    </div>
                  </div>
                </div>
                <!-- type:1 -->
                <div class="row p-2" v-if="invoice===1">
                  <div class="col-md-12 float-left mb-3 rule">
                    依統一發票使用辦法規定
                  </div>
                </div>
                <!-- type:2 -->
                <div class="row" v-if="invoice===2">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入統一編號" />
                  </div>
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入發票抬頭" />
                  </div>
                </div>
                <!-- type:3 -->
                <div class="row" v-if="invoice===3">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入手機條碼" />
                  </div>
                  
                </div>
                <!-- type:4 -->
                <div class="row" v-if="invoice===4">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入自然人憑證" />
                  </div>
                </div>
                <!-- type:5 -->
                <div class="row" v-if="invoice===5">
                  <!-- <div class="col-md-2 float-left control-label"></div> -->
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入捐贈機構捐贈碼" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <!-- 購買人 -->
            <div class="row border p-3">
              <h5>購買人資訊</h5>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-2 float-left control-label">姓名</div>
                  <div class="col-md-10 float-left mb-3">
                    <input class="form-control" v-model="customer.name" type="text" placeholder="購買人姓名" />
                  </div>
                  <div class="col-md-2 float-left control-label">聯絡電話</div>
                  <div class="col-md-10 float-left mb-3">
                    <input class="form-control" v-model="customer.phone" type="text" placeholder="購買人聯絡電話，例：0987654321" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 收件人 -->
            <div class="row border p-3 mt-3">
              <h5>收件人資訊</h5>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-2 float-left control-label">姓名</div>
                  <div class="col-md-10 float-left mb-3">
                    <input class="form-control" v-model="receiver.name" type="text" placeholder="收件人姓名" />
                    <div class="hint-label mt-2">*超商取貨請使用本名，並記得攜帶身分證前往取貨</div>
                  </div>
                  <div class="col-md-2 float-left control-label">聯絡電話</div>
                  <div class="col-md-10 float-left mb-3">
                    <input class="form-control" v-model="receiver.phone" type="text" placeholder="收件人聯絡電話，例：0987654321" />
                    <div
                      class="hint-label mt-2"
                    >*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</div>
                  </div>
                  <div class="col-md-2 float-left control-label">地址</div>
                  <div class="col-md-10 float-left mb-3">
                    <input class="form-control" v-model="receiver.address" type="text" placeholder="地址" />
                  </div>
                  <div class="form-check w-100 ml-3">
                    <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                      <label class="form-check-label check-label" for="defaultCheck1">取件人與購買人相同</label>
                    </a>
                    <div class="collapse list-unstyled" id="homeSubmenu">
                      <div class="col-md-2 float-left control-label">姓名</div>
                      <div class="col-md-10 float-left mb-3">
                        <input class="form-control" type="text" placeholder="購買人姓名" />
                        <div class="hint-label mt-2">*超商取貨請使用本名，並記得攜帶身分證前往取貨</div>
                      </div>
                      <div class="col-md-2 float-left control-label">聯絡電話</div>
                      <div class="col-md-10 float-left mb-3">
                        <input class="form-control" type="text" placeholder="購買人聯絡電話，例：0987654321" />
                        <div
                          class="hint-label mt-2"
                        >*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-check w-100 ml-3">
                    <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                    <label class="form-check-label check-label" for="defaultCheck1">用上述資料直接註冊會員</label>
                  </div>
                  <div class="form-check w-100 ml-3">
                    <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                    <label class="form-check-label check-label" for="defaultCheck1">同意會員責任規範及個資聲明</label>
                  </div>
                  <div class="form-check w-100 ml-3">
                    <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                    <label
                      class="form-check-label check-label"
                      for="defaultCheck1"
                    >為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利</label>
                  </div>
                  <div class="form-check w-100 m-3">
                    <button type="button" @click="create_Order()" class="col-md-5 l-btn checkout-btn">立即結帳</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  data() {
    return {
      invoice: 1,
      invoice_option: [
        { id: 1, title: "會員載具(個人)" },
        { id: 2, title: "公司用(統編)" },
        { id: 3, title: "手機載具" },
        { id: 4, title: "自然人憑證" },
        { id: 5, title: "捐贈碼" }
      ],
      rule_option: [
        { id: 1, title: "取件人與購買人相同" },
        { id: 2, title: "用上述資料直接註冊會員" },
        { id: 3, title: "同意會員責任規範及個資聲明" },
        {
          id: 4,
          title:
            "為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利"
        }
      ],
      // 購買人
      customer:{
        email:"",
        phone:"",
        name :""
      },
      // 收件人
      receiver:{
        address:"",
        phone:"",
        name :""
      }
    };
  },
  methods: {
    ...mapActions({
      loading: "loading",
      _store: "_store"
    }),
    goto: function(url) {
      window.open(url, "註冊", "width=300,height=300");
    },
    create_Order: async function() {
      let store = this.$store.state.order.content
      let b = this.receiver
      let logistics = {
        ...store.logistics,
        ReceiverName :this.receiver.name,
        ReceiverCellPhone :this.receiver.phone,
        ReceiverAddress  :this.receiver.address,
      }
      let o = {
        ...store,
        logistics,
        car_id:  this.$store.state.cart.info.id,
        // customer:{...this.customer}  
      } 
      console.log(o)
      // return ;
      let cond = Struct.fromJavaScript(o);
console.log("cond>>>>",cond)
      let result = await this.$store.dispatch("order/create_Order", {
        condition: cond
      });
console.log("ssss",result)
      if (result.code === 0) {
        alert(result.data);
        return false;
      }

      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: `${d.service}${d.service_type}${d.service_item}`,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`
        };
        // 物流
        if (d.service_type == 2) this.home_list.push(o);
        else this.store_list.push(o);
      }
      return true;
    },
  },
  mounted: async function() {
    this.loading(true);

    this.loading(false);
  }
};
</script>
<style lang="scss" scoped>
.rule {
  background-color: #86919b;
  color:white;
  padding: 10px;
  font-size: 14px;
}
</style>