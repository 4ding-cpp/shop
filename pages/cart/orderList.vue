<template>
  <div id="page" v-if="data.other && data.other.hasOwnProperty('receiver')">
    <section class="content">
      <div class="container">
        <h1 class="text-center font-weight-bolder nav-tabs pb-3">訂購資訊</h1>
        <h5 class="text-center font-weight-bolder pb-5">
          訂單編號:{{order_id}} 已寄到信箱
          <br />訂單送出成功,感謝你的訂購
          <br />廠商將於確認交易成立後,盡速將你商品送達。
        </h5>
        <div id="productForm" class="table-responsive">
          <h5 class="font-weight-bolder">
            <i class="fa-xs fas fa-edit"></i>&nbsp;訂購商品
          </h5>
          <table class="table">
            <thead>
              <th>商品名稱</th>
              <th>規格</th>
              <th>單價</th>
              <th width="18%">數量</th>
              <th>小計</th>
            </thead>
            <tbody>
              <tr v-for="(item,i) in data.commodity">
                <td>{{item.name}}</td>
                <td>{{item.sku}}</td>
                <td>{{item.price}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.price*item.amount}}</td>
              </tr>
              <tr>
                <td class="text-right" colspan="4">總計</td>
                <td>{{data.amount}}</td>
              </tr>
              <tr>
                <td class="text-right" colspan="4">運費</td>
                <td>{{data.freight}}</td>
              </tr>
            </tbody>
            <!-- <thead>
              <th class="text-center text-danger" colspan="5">無資料</th>
            </thead>-->
          </table>
        </div>

        <div id="receiverForm" class="table-responsive">
          <h5 class="font-weight-bolder">
            <i class="fa-xs fas fa-edit"></i>&nbsp;訂單資料
          </h5>
          <table class="table">
            <tbody>
              <tr>
                <th style="width:160px">訂單編號</th>
                <td>{{data.order_id}}</td>
                <th style="width:160px">訂單日期</th>
                <td>{{data.create_at}}</td>
              </tr>
              <tr>
                <th style="width:160px">付款方式</th>
                <td>{{data.payment_type}}</td>
                <th style="width:160px">付款狀態</th>
                <td>{{data.payment_state}}</td>
              </tr>
              <tr>
                <th style="width:160px">付款金額</th>
                <td>{{data.freight + data.amount}}</td>
                <th style="width:160px">訂單狀態</th>
                <td>{{data.state}}</td>
              </tr>
            </tbody>
          </table>

          <h5 class="font-weight-bolder">
            <i class="fa-xs fas fa-edit"></i>&nbsp;收件人資料
          </h5>
          <table class="table">
            <tbody>
              <tr>
                <th style="width:160px">收件人姓名</th>
                <td>{{data.other.receiver.name}}</td>
              </tr>
              <tr>
                <th style="width:160px">收件人地址</th>
                <td>{{data.other.receiver.cvs_address}}</td>
              </tr>
              <tr>
                <th style="width:160px">取貨方式</th>
                <td>{{data.other.receiver.cvs_type}}</td>
              </tr>
              <tr>
                <th style="width:160px">發票種類</th>
                <td></td>
              </tr>
              <tr>
                <th style="width:160px">備註</th>
                <td>{{data.remark}}</td>
              </tr>
            </tbody>
          </table>
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
      order_id: "",
      data: {},
    };
  },

  methods: {
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    /**
     * 找訂單
     */
    complete_Order: async function () {
      let o = { order_id: this.$route.query.id };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("order/complete_Order", {
        condition: cond,
      });

      if (result.code === 0) {
        alert(result.data);
        return false;
      } else {
        console.log(result.data);
        this.data = result.data;
      }
      return true;
    },
  },
  created: function () {},
  mounted: async function () {
    this.loading(true);
    this.data = new this.orderpb.Order().toObject();
    console.log("data", this.data);
    let query = this.$route.query;
    this.order_id = query.hasOwnProperty("id") ? query.id : "";
    if (this.order_id == "") {
      alert("無訂單id");
      this.$router.push("/");
      return;
    }
    await this.complete_Order();
    this.loading(false);
  },
};
</script>
<style lang="scss" scoped>
#page {
  background-color: #e6e5e5;
  & div.table-responsive {
    background-color: white;
    padding: 35px;
    border-radius: 10px;
  }
  & div#receiverForm > table {
    margin-bottom: 5rem;
  }
}
</style>