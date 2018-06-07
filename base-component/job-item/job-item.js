let app = getApp()
Component({
  attached(){
    if (!this.data.jobItem.companyLogo) { //没头像给默认头像
      let _logo = 'jobItem.companyLogo'
      this.setData({
        [_logo]:"/img/default-c.png"
      })
    };
  },
  properties: {
    hasBottom:{
      type:Boolean,
      value:true
    },
    jobItem:{
      type:Object,
      value:{}
    },
    stateType:{
      type:Number,
      value:0
    },
    exData:{
      type:Object,
      value:{}
    }
  },
  data: {

  },
  methods: {
    toDetail(){
      wx.navigateTo({
        url: "/pages/job/personal-jobdetail/personal-jobdetail?jid=" + this.data.jobItem.jid +"&cid="+ this.data.jobItem.cid + "&pos="+ this.data.jobItem.position
      })
    },
    toUploadContract(){
      wx.navigateTo({
        url: "/pages/account/personal-contract/personal-contract?jid=" + this.data.jobItem.jid +"&cid="+ this.data.jobItem.cid
      })
    },
    toInvitingJobDetail(){
      wx.navigateTo({
        url: "/pages/event/inviting/inviting-job-detail/inviting-job-detail?jid=" + this.data.jobItem.jid +"&cid="+ this.data.jobItem.cid
      })
    }
  }
})