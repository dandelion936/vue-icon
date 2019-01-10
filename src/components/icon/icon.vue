<template>
    <i :class="classes" :style="styles" v-html="Unicode" @click="handleClick"></i>
</template>
<script>
    const prefixCls = 'iconfont';
    export default {
        name: 'Icon',
        props: {
            size: [Number, String],
            color: String,
            custom: {
                type: String,
                default: ''
            },
            Unicode: {
                type: String,
                default: ''
            }
        },
        computed: {
            classes () {
                return [
                    `${this.ICONCLASS ? this.ICONCLASS : prefixCls}`,
                    {
                        [`${this.custom}`]: this.custom !== '',
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }
                return style;
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    };
</script>
