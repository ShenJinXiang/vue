var app = new Vue({
	el: '#app',
	data: {
		msg: '中华人民共和国，中央人民政府！'
	},
	methods: {
		start: function() {
			this.timer = setInterval(() => {
				this.msg = this.msg.substring(1) + this.msg.substring(0, 1);
			}, 200);
		},
		stop: function() {
			clearInterval(this.timer);
		}
	}
});
