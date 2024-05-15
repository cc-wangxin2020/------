<template>
    <ul class="contact-container">
        <li class="phone">
            <a>
                <Icon class="icon" type="phone"></Icon>
                <span>13454896759</span>
            </a>
        </li>
        <li class="mail">
            <a href="mailto:cc_wangxin2020@163.com">

                <Icon class="icon" type="mail"></Icon>
                <span>cc_wangxin2020@163.com</span>
            </a>
        </li>
        <li class="wechat">
            <a>

                <Icon class="icon" type="wechat"></Icon>

                <span>13454896759</span>
                <div class="pop">
                    <img src="https://bpic.588ku.com/element_origin_min_pic/19/04/09/5964d9f6a2c5d844c5a4070e31216fed.jpg"
                        alt="">
                </div>
            </a>
        </li>
        <li class="qq">
            <a>
                <Icon class="icon" type="qq"></Icon>
                <span>cc_wangxin2020@163.com</span>
                <div class="pop">
                    <img src="https://bpic.588ku.com/element_origin_min_pic/19/04/09/5964d9f6a2c5d844c5a4070e31216fed.jpg"
                        alt="">
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
@import '~@/style/var.less';
.contact-container {
    color: @font-color;
    width: 100%;
    padding: 10px 20px;

    li {
        position: relative;
        height: 40px;
        line-height: 40px;

        // &.qq,
        // &.wechat {
        //     // a {
        //     //     margin: 0 -3px;
        //     // }
        // }
        &.qq,
        &.wechat {
            a {
                margin: 0 -1px;
            }

            .icon {
                font-size: 1.5rem;
            }
        }

        a {
            display: block;
            width: 100%;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                color: @hover-color;

                .pop {
                    transform: scaleY(1);
                }
            }

            .icon {
                font-size: 1.3rem;
                margin-right: 10px;
            }

            .pop {
                position: absolute;
                width: 120px;
                height: 120px;
                bottom: 40px;
                background: @pop;
                padding: 5px;
                transform: scaleY(0);
                transform-origin: center bottom;
                transition: 0.2s;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: #fff;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                }
            }
        }
    }

}
</style>