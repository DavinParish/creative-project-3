/* global Vue*/
let app = new Vue({
    el: '#app',
    data: {
        currRange : '2',
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
                /* global axios*/
                const spreadsheetId = "1XS4E90X96Xha5E-8EypzasCaZFgrYlB7k5BETygKgZw";
                const range = this.currRange + "1:" + this.currRange + "" ;
                const url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + range;
                const response = await axios.post(url);
                console.log(response)
                this.currRange = this.currRange + 1
            }
            catch (error) {
                console.log(error);
                console.log("WE had a problem");
            }
        },

    }
});
