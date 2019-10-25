/* global Vue*/
let app = new Vue({
    el: '#app',
    data: {
        currRange: '2',
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
                const range = "Sheet1!A" + this.currRange + ":F" + this.currRange;
                const api = "?key=AIzaSyDzYEixKRQ4pmCtTm_i6yLdVtBRhwZ6Wcs";
                const inputOption = "?valueInputOption=RAW"
                
                const res = await axios.get();
                const scope = "https://www.googleapis.com/auth/spreadsheets"
                const redirect = "url of website"


                //var url = "https://cors-anywhere.herokuapp.com";
                var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + range + inputOption;

                const response = await axios.put(url, this.values);

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
