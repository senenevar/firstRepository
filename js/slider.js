class Slider {
    constructor() {
        this.count = 0
    }


    slider(container) {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.transform = `translateX(-${this.count * 300}px)`
        }
    }


    render(leftBtn, rigthBtn, container) {
        rigthBtn.addEventListener('click', () => {
            if (this.count < container.children.length - 4) {
                this.count++;
            } else {
                this.count = 0;
            }
            this.slider(container)
        })

        leftBtn.addEventListener('click', () => {
            if (this.count > 0) {
                this.count--;
            } else {
                this.count = container.children.length - 4;
            }
            this.slider(container)
        })

    }
}

export default new Slider;