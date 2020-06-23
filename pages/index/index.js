Page({
  data: {
    active: 0,
     

  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },
  onLoad: function() {
     
  },

  onChange(event) {
    
  },

  onSubmit() {
    wx.showToast({
      title: '点击结算',
      icon: 'none'
    });
  },
});