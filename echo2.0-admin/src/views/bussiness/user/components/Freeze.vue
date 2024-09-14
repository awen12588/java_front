<!-- 冻结 -->
<template>
  <el-dialog
    title="冻结&解冻"
    :visible.sync="visible"
    width="500px"
    append-to-body
    @close="cancel"

  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户ID">
        <el-input disabled :value="user.userId" />
      </el-form-item>
      <!-- <el-form-item label="账号">
        <el-input disabled :value="user.loginName" />
      </el-form-item> -->
      <el-form-item label="操作类型" prop="giveType">
        <el-select
          v-model="form.giveType"
          placeholder="请选择操作类型"
          style="width: 100%"
        >
          <el-option label="冻结" value="0"></el-option>
          <el-option label="解冻" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资产类型" prop="type">
        <el-input disabled :value="user.type == 1 ? '平台资产' : '合约资产'" />
      </el-form-item>
      <el-form-item label="币种" prop="symbol">
        <el-input disabled :value="user.symbol" />
      </el-form-item>
      <el-form-item label="现有金额">
        <el-input disabled :value="user.availableAmount" />
      </el-form-item>
      <el-form-item label="金额" prop="amount">
        <el-input
          v-model="form.amount"
          type="number"
          placeholder="请输入金额"
        />
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="form.remark"
          type="textarea"
          placeholder="请输入备注"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { getAssetList, freezeMoneyApi } from "@/api/bussiness/user.js";
export default {
  // dicts: ["t_asset_type"],
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    user: {
      handler() {
        this.getAssetList();
      },
      deep: true,
      immediate: true,
    },
  },

  data() {
    return {
      // 资产列表
      assetList: [],
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        amount: [{ required: true, message: "金额不能为空", trigger: "blur" }],
        giveType: [
          { required: true, message: "操作类型不能为空", trigger: "change" },
        ]
      },
    };
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(val) {},
    },
    // hasAmount() {
    //   let tempObj = this.showAssetList.find(
    //     (elem) => elem.symbol == this.form.symbol
    //   );
    //   return tempObj?.amount || 0;
    // },
    // /**
    //  * 资产列表
    //  */
    // showAssetList() {
    //   // return this.assetList.filter((elem) => elem.type == this.form.type);
    //   let list = this.assetList.filter((elem) => elem.type == this.form.type);
    //   let reversedNumbers = [];
    //   for (let i = list.length - 1; i >= 0; i--) {
    //     reversedNumbers.push(list[i]);
    //   }
    //   return reversedNumbers;
    // },
  },
  methods: {
    async getAssetList() {
      if (this.user?.userId) {
        this.reset();
        // this.form.type = this.dict.type.t_asset_type[0]?.value;
        this.form.type = this.user.type;
        this.form.symbol = this.user.symbol;
        this.form.userId = this.user.userId;

        const res = await getAssetList({
          userId: this.user.userId,
          pageNum: 1,
          pageSize: 1000,
        });
        if (res.code == 200) {
          this.assetList = res.rows;
          // this.form.symbol = this.showAssetList[0]?.symbol || "";
        }
      }
    },
    // 表单重置
    reset() {
      this.form = {
        userId: null,
        type: null,
        giveType: null,
        amount: null,
        symbol: null,
        remark: null,
      };
      this.resetForm("form");
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.form.userId = this.user.userId;
          this.form.type = this.user.type;
          this.form.symbol = this.user.symbol;
          freezeMoneyApi(this.form)
            .then((res) => {
              if (res.code == 200) {
                this.$modal.msgSuccess(res.msg);
              } else {
                this.$modal.msgError(res.msg);
              }
              this.getAssetList();
            })
            .finally(() => {
              this.getAssetList();
              this.cancel();
            });
        }
      });
    },
    // 取消按钮
    cancel() {
      this.$emit("input", false);
      this.reset();
    },
  },
};
</script>
