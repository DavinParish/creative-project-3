/* global Vue*/
let app = new Vue({
    el: '#app',
    data: {
        values: {
            studentName: ' ',
            studentNumber: '',
            reviewedNumber: '', 
            creativityScore: '',
            wowScore: '',
            comments: ' '
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.get('https://xkcdapi.now.sh/' + this.number);
                this.current = response.data;
                this.loading = false;
                this.number = response.data.num;
            }
            catch (error) {
                console.log(error);
            }
        }

    },
    computed: {
       
    },
    watch: {
        
    },
});
