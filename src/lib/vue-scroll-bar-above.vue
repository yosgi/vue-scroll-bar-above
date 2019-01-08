<template>
    <div id="progress-container-el" :style="{ backgroundColor: containerColor, height }">
        <div id="progress-el" :style="{ backgroundColor: progressColor, height, width: width + '%' }">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            width: 0
        }
    },
    props: {
        manual: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number,
            default: 4
        },
        containerColor: {
            type: String,
            default: '#f4f4f4'
        },
        progressColor: {
            type: String,
            default: '#cda568'
        },
        percent: {
            type: Number,
            default: 0
        },
        elName: {
            type: String,
            default: ''
        }
    },
    computed: {
    },
    watch: {
        percent(val) {
            // 手动设置进度条
            if (this.manual) {
                this.width = val
            }
        }
    },
    mounted() {
        // 根据滚动滚动元素设置进度百分比,适用于overflow-y scroll 的元素
        if (!this.manual && this.elName) {
            let scrollEl = document.querySelector(this.elName)
            scrollEl.addEventListener('scroll', () => {
                let {scrollTop, clientHeight, scrollHeight} = scrollEl
                let windowScrollPercents = (scrollTop / (scrollHeight - clientHeight)) * 100
                this.width = windowScrollPercents
            })
        } else if (!this.manual && !this.elName) {
        // 根据document.body.scrollTop 设置百分比，适用于普通的滚动
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            window.addEventListener('scroll', () => {
                let scrollTop = (document.body.scrollTop
            || document.documentElement.scrollTop)
                let windowScrollPercents = (scrollTop / height) * 100
                this.width = windowScrollPercents
            })

        }
    }
}
</script>

<style scoped>
    #progress-container-el{
        position: fixed;
        width: 100%;
        height: 4px;
        left: 0;
        right: 0; 
        top: 0;
        z-Index: 999;
    }
    #progress-el {
        height:4px;
        background-color:red;
    }
</style>