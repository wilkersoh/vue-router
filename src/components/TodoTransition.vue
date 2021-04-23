<template>
  <div>
    <input type="text" v-model="newTodo" @keypress.enter="addTodo" placeholder="Add some todo" class="field w-full" />
    <button class="btn-blue my-2" @click="addTodo">Submit todo</button>
    <button class="btn-blue ml-2" @click="sortTodo">Sort</button>
    <transition name="switch" mode="out-in">
      <div v-if="todos.length">
        <transition-group tag="ul" name="list" appear>
          <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">{{ todo.name }}</li>
          </transition-group>
      </div>
      <div v-else>No todo list!</div>
    </transition>
    <div>
      <button @click="startPlay" class="btn-blue">Run gsap</button>
      <div class="first w-20 h-20 bg-red-300"></div>
      <div class="second w-20 h-20 bg-blue-300"></div>
      <div class="third w-20 h-20 bg-yellow-300"></div>
      <div class="fourth w-20 h-20 bg-green-300"></div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import gsap from "gsap";

const masterTlGroup = gsap.timeline();

export default {
  setup(props, {emit}) {
    const todos = ref([
      {name: 'must be bold', id: 1},
      {name: 'react is great', id: 4},
      {name: 'vscode is cool', id: 3},
      {name: 'learn vuejs', id: 2},
    ]);

    const newTodo = ref('');

    const addTodo = () => {
      if(newTodo.value) {
        const id = Math.random();
        todos.value = [...todos.value, {name: newTodo.value, id}]
        newTodo.value = '';
      } else {
        emit('badValue');
      }
    }

    const deleteTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id); // 因為 .list-move (v-move) 所以才會有 變動 不然會直接條的
    }

    const sortTodo = () => {
      todos.value.sort((a, b) => {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }) // 因為 .list-move (v-move) 所以才會有 變動 不然會直接條的
    }

    const pawsTL = () => {
        let tl = gsap.timeline();
        // let tl = gsap.timeline({repeat: -1, repeatDelay: 1});
        /**
         * 這個 default 是 一行一行 執行的 除非 你在(name, {}, 這裡) 加了時間 去控制
         */
        tl.to(".first", {x: 700, duration: 2, scale: 1, opacity: 1, ease: 'bounce.out'});
        tl.to(".second", {x: 700, duration: 2, filter: 'blur(0)', ease: 'expo.out'}, 0.5); // (name, time, time run in .first) first duration is 2, second will trigger in 0.5s after .first start.
        /**
         * we also can use -=2 那樣是 和.first relative
         * 也可以 用  < , to.(name, {}, <) 這個意思是說 跟著上一個 一起run
         * <.5 就是說 上一個 的0.5 就 run
         */
        tl.to(".third", {x: 700, duration: 2, ease: 'show'}, '<');
        // tl.to(".fourth", {x: 700, duration: 2, ease: 'expo.out'}, '<.75');

        return tl;
    }

    const otherGsapAnimate = () => {
      let tl = gsap.timeline();
      tl.to(".fourth", {x: 700, duration: 2, ease: 'expo.out'});

      return tl; // 需要放進去 masterTlGroup 裡 就需要 return tl
    }

    const startPlay = () => {
      masterTlGroup.add(pawsTL())
      masterTlGroup.add(otherGsapAnimate())
      masterTlGroup.play(); // masterTlGroup 的功能 是 把 gsap 做的 time line 放在 一個 fn 裡 那樣 就能 做 一整塊的 animation 了
    }

  // onMounted(() => {
  //   let tl = gsap.timeline();
  //   // let tl = gsap.timeline({repeat: -1, repeatDelay: 1});
  //   /**
  //    * 這個 default 是 一行一行 執行的 除非 你在(name, {}, 這裡) 加了時間 去控制
  //    */
  //   tl.to(".first", {x: 700, duration: 2, scale: 1, opacity: 1, ease: 'bounce.out'});
  //   tl.to(".second", {x: 700, duration: 2, filter: 'blur(0)', ease: 'expo.out'}, 0.5); // (name, time, time run in .first) first duration is 2, second will trigger in 0.5s after .first start.
  //   /**
  //    * we also can use -=2 那樣是 和.first relative
  //    * 也可以 用  < , to.(name, {}, <) 這個意思是說 跟著上一個 一起run
  //    * <.5 就是說 上一個 的0.5 就 run
  //    */
  //   tl.to(".third", {x: 700, duration: 2, ease: 'show'}, '<');
  //   tl.to(".fourth", {x: 700, duration: 2, ease: 'expo.out'}, '<.75');
  // })

    return {
      todos,
      newTodo,
      addTodo,
      deleteTodo,
      sortTodo,
      startPlay
    }
  }
}
</script>

<style lang="scss" scoped>
  .first {
    opacity: 0.2;
  }
  .second {
    filter: blur(4px);
  }

  ul {
    position: relative;
    padding: 0;
    li {
      list-style-type: none;
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      background: white;
      box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
      border-radius: 10px;
      width: 100%;
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
      }
    }
  }
  /* List transition */
  .list-enter-from{
    opacity: 0;
    transform: translateY(10px);
    /* transform: scale(0.6); */
  }
  .list-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .list-enter-active{
    transition: all 0.8s ease;
  }
  .list-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateY(10px);
    /* transform: scale(0.6); */
  }
  .list-leave-active {
    transition: all 0.8s ease;
    position: absolute; /* remove part it make below take transiton to top before this disappear */
  }

  .list-move {
    transition: all 0.3s ease;
  }

  /* Switch transition */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0)
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.5s ease;
  }

</style>