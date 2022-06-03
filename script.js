new Vue({
    el: '#app',
    data: {
        pass: "",
        track: {
            lowercase: "rgba(255,0,0,0.6)",
            uppercase: "rgba(255,0,0,0.6)",
            digit: "rgba(255,0,0,0.6)",
            special: "rgba(255,0,0,0.6)",
            len: "rgba(255,0,0,0.6)",
        },
        strength: 0,
    },
    methods: {

        calc_strength: function() {
            let c = 0;
            for (i in this.track) {
                if (this.track[i] == "rgba(0,255,0,0.6)") {
                    c += 1;
                }
            }
            this.strength = c / 5 * 100;
        }

    },
    computed: {

    },
    watch: {

        pass(new_value) {

            this.track.lowercase = "rgba(255,0,0,0.6)";
            this.track.uppercase = "rgba(255,0,0,0.6)";
            this.track.digit = "rgba(255,0,0,0.6)";
            this.track.special = "rgba(255,0,0,0.6)";
            this.track.len = "rgba(255,0,0,0.6)";

            if (new_value.length > 7) {
                this.track.len = "rgba(0,255,0,0.6)";
            }

            for (let i = 0; i < new_value.length; i++) {
                let a = new_value[i];
                let b = new_value.charCodeAt(i);

                if (a >= "a" && a <= "z") {
                    this.track.lowercase = "rgba(0,255,0,0.6)";
                }
                else if (a >= "A" && a <= "Z") {
                    this.track.uppercase = "rgba(0,255,0,0.6)";
                }
                else if (a >= "0" && a <= "9") {
                    this.track.digit = "rgba(0,255,0,0.6)";
                }
                else if ((b >= 32 && b <= 47) || (b >= 58 && b <= 64)) {
                    this.track.special = "rgba(0,255,0,0.6)";
                }
            }
            this.calc_strength();
        }
    }
})