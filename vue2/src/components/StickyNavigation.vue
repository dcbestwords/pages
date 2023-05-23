<template>
    <div class="app-wrapper">
        <nav class="main-nav" ref="nav">
            <div class="container">
                <h2 class="title">My Website</h2>
                <ul>
                    <li class="nav-item"><a href="#" class="current">Home</a></li>
                    <li class="nav-item"><a href="#">About</a></li>
                    <li class="nav-item"><a href="#">Services</a></li>
                    <li class="nav-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="bc">
            <div class="container">
                <h1 class="bc-title">Welcome To My Website</h1>
                <p class="bc-info">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <section class="content-container">
            <div class="container">
                <h2>Content One</h2>
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa esse, dolorum,
                    minima placeat voluptatibus, animi ex vitae quod hic porro consequuntur? Eveniet quasi, voluptatum
                    aspernatur fugiat eaque vel repudiandae.</p>
                <h2>Content Two</h2>
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa esse, dolorum,
                    minima placeat voluptatibus, animi ex vitae quod hic porro consequuntur? Eveniet quasi, voluptatum
                    aspernatur fugiat eaque vel repudiandae.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'StickyNavigation',
    methods: {
        fixNav() {
            const nav = this.$refs.nav;
            if (window.scrollY > nav.offsetHeight + 150) {
                nav.classList.add('active')
            } else {
                nav.classList.remove('active')
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.fixNav)
    },
}
</script>

<style scoped lang="less">
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.main-nav {
    background-color: #222;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
        }

        a {
            text-decoration: none;
            color: #fff;
            padding: 7px 15px;
            transition: all 0.3s ease-in-out;

            &.current,
            &:hover {
                color: #c0392b;
            }
        }
    }

    &.active {
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

        .container {
            padding: 10px 0;
        }

        a,
        .title {
            color: black;
        }
    }
}

.bc {
    height: 100vh;
    background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    color: #fff;
    /* 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: -2;

    .bc-title {
        font-size: 48px;
        padding-bottom: 20px;
    }

    .bc-info {
        font-size: 20px;
    }
}

.content-container {
    padding-bottom: 30px;

    .content {
        color: #555;
        line-height: 30px;
        letter-spacing: 1.2px;
    }

    h2 {
        font-size: 150%;
        margin: 20px 0;
    }
}</style>