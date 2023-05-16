<template>
    <div class="app-container">
        <div class="box-container">
            <i class="fas fa-quote-left fa-quote"></i>
            <i class="fas fa-quote-right fa-quote"></i>
            <p class="info">{{ text }}</p>
            <div class="user">
                <div class="avator">
                    <img :src="photo" width="100%" alt="">
                </div>
                <div class="introduce">
                    <div class="name">{{ name }}</div>
                    <div class="work">{{ position }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonial',
    data() {
        return {
            idx:0,
            text:'',
            photo:'',
            name:'',
            position:''
        }
    },
    methods: {
        updateTestimonial() {
            const testimonials = [
                {
                    name: 'Miyah Myles',
                    position: 'Marketing',
                    photo:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
                    text:
                        "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
                },
                {
                    name: 'June Cha',
                    position: 'Software Engineer',
                    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
                    text:
                        'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
                },
                {
                    name: 'Iida Niskanen',
                    position: 'Data Entry',
                    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
                    text:
                        "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
                },
                {
                    name: 'Renee Sims',
                    position: 'Receptionist',
                    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
                    text:
                        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
                },
                {
                    name: 'Jonathan Nunfiez',
                    position: 'Graphic Designer',
                    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
                    text:
                        "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
                },
                {
                    name: 'Sasha Ho',
                    position: 'Accountant',
                    photo:
                        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
                    text:
                        'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
                },
                {
                    name: 'Veeti Seppanen',
                    position: 'Director',
                    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
                    text:
                        'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
                },
            ]
            const { name, position, photo, text } = testimonials[this.idx]

            this.text = text;
            this.photo = photo;
            this.position = position;
            this.name = name;
            this.idx++

            if (this.idx > testimonials.length - 1) {
                this.idx = 0
            }
        }
    },
    mounted() {
        this.updateTestimonial()
        setInterval(() => {
            this.updateTestimonial()
        }, 10000);
    },
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.app-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}

.box-container {
    max-width: 768px;
    background-color: #476ce4;
    color: #fff;
    border-radius: 20px;
    padding: 50px 80px;
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 4px;
        width: 110px;
        background-color: #fff;
        margin-bottom: 20px;
        animation: grow 10s linear infinite;
    }

    .fas {
        font-size: 30px;
        opacity: 0.5;

        &.fa-quote-left {
            position: absolute;
            top: 70px;
            left: 40px;
        }

        &.fa-quote-right {
            position: absolute;
            top: 70px;
            right: 40px;
        }
    }

    .info {
        text-align: justify;
        line-height: 28px;
    }

    .user {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        .avator {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
        }

        .introduce {
            padding: 0 10px;
        }

        .introduce .name {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
}

@keyframes grow {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .box-container {
        padding: 20px 30px;
    }

    .fas.fa-quote {
        display: none;
    }
}
</style>