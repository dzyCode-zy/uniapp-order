"use strict";
const common_vendor = require("../../common/vendor.js");
const useMemberStore = common_vendor.defineStore(
  "member",
  () => {
    const profile = common_vendor.ref();
    const setProfile = (val) => {
      profile.value = val;
    };
    const clearProfile = () => {
      profile.value = void 0;
    };
    return {
      profile,
      setProfile,
      clearProfile
    };
  },
  // TODO: 持久化
  {
    persist: true
  }
);
exports.useMemberStore = useMemberStore;
//# sourceMappingURL=member.js.map
