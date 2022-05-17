
        let switches = document.querySelector('.switch')
        let lampBuzz = document.getElementById("lampBuzz")
        let lightOn = document.getElementById("lightOn")


        let lamps
        lamps = document.querySelectorAll(".lamps")


        for (let i = 0; i < 70; i++) {
            lamps.forEach((l) => {
                l.innerHTML += `<div class="lamp"></div>`
            })


        }
        let lamp = document.querySelectorAll('.lamp')
        console.log(lampBuzz)
        window.addEventListener("load", () => {

        })
        switches.addEventListener("click", (e) => {

            if (e.target.textContent == "off") {
                e.target.innerHTML = "on"
                switches.classList.add("switchMode")
                lightsOn()
            } else if (e.target.textContent == "on") {
                e.target.innerHTML = "off"
                switches.classList.remove("switchMode")
                lightsOff()
            }

        })
        let c
        lampBuzz.currentTime = 0
        lightOn.currentTime = 0
        function lightsOn() {
            lamp.forEach((l, i) => {
                l.classList.add("lampAnimation")
                l.style.animationDelay = `${i * 0.004761904761904762}s`

            })
            lampBuzz.play()

            lightOn.play()
            
                lightOn.play()
           


        }

        function lightsOff() {
            lamp.forEach((l, i) => {
                l.classList.remove("lampAnimation")

                l.style.animationDelay = `${i * 0.004761904761904762}s`
            })
            lampBuzz.pause()
            lightOn.pause()

        }