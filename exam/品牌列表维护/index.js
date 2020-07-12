// Vue.config.keyCodes.f2 = 113;
let app = new Vue({
    el: '#app',
    data: {
        id: '',
        name: '',
        keywords: '',
        users: [
            {id: 1, name: '张良', createtime: new Date()},
        ]
    },
    methods: {
        addUser() {
            this.users.push({
                id: this.id,
                name: this.name,
                createtime: new Date()
            });

            this.id = this.name = '';
        },
        deleteUser(id) {
            this.users.some((item, index) => {
                if (item.id === id) {
                    this.users.splice(index, 1);
                    return true;
                }
            } );
        },
        search(keywords) {
            return this.users.filter(item => item.name.includes(keywords));
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
    }
});
