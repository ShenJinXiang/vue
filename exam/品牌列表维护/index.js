// Vue.config.keyCodes.f2 = 113;
let app = new Vue({
    el: '#app',
    data: {
        id: '',
        name: '',
        keywords: '',
        list: [
            {id: 1, name: '张良', createtime: new Date()},
        ]
    },
    methods: {
        add() {
            this.list.push({
                id: this.id,
                name: this.name,
                createtime: new Date()
            });

            this.id = this.name = '';
        },
        deleteItem(id) {
            this.list.some((item, index) => {
                if (item.id === id) {
                    this.list.splice(index, 1);
                    return true;
                }
            } );
        },
        search(keywords) {
            return this.list.filter(item => item.name.includes(keywords));
        },
    },
    filters: {
        dateformat(d) {
            let year = d.getFullYear(),
                month = (d.getMonth() + 1).toString().padStart(2, '0'),
                date = d.getDate().toString().padStart(2, '0'),
                hour = d.getHours().toString().padStart(2, '0'),
                minute = d.getMinutes().toString().padStart(2, '0'),
                seconde = d.getSeconds().toString().padStart(2, '0');
            return [year, month, date].join('-') + ' ' + [hour, minute, seconde].join(':');
        }
    },
    directives: {
        'focus': {
            inserted(el) {
                el.focus();
            }
        },
        color(el, arg) {
            el.style.color = arg.value;
        }
    }
});
