/**
 * 404 页面布局组件
 * 用于显示 404 错误页面，并提供多语言食谱展示功能
 */
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useBack } from 'valaxy'

const { t } = useI18n()
const { back } = useBack()

// 控制显示哪个语言的食谱，默认不显示
const visibleRecipeLang = ref<keyof typeof recipes | null>(null)

// 点击按钮显示或隐藏对应语言的食谱
function toggleRecipe(lang: keyof typeof recipes) {
  if (visibleRecipeLang.value === lang) {
    // 如果当前显示的就是这个语言，则隐藏
    visibleRecipeLang.value = null
  } else {
    // 否则显示这个语言
    visibleRecipeLang.value = lang
  }
}


// 食谱内容，按语言分类
const recipes = {
  'zh-CN': {
    title: '为了防止你一无所获，这里教你怎么做<i>我爱吃的</i>西红柿炒鸡蛋 🍳',
    steps: [
      { step: '1/9', text: '🍅 准备两个西红柿，选择红透的，熟透的，洗干净，再准备两个鸡蛋 🥚。' },
      { step: '2/9', text: '🔪 把准备好的两个西红柿切成丁，（倒入开水浸泡2分钟，让番茄在热水里翻滚一会 ♨️；这样可以轻松去掉番茄的外皮，去皮吃的时候很方便，不去皮不但外观好看，而且会更加有营养）' },
      { step: '3/9', text: '🥣 把鸡蛋打到碗里，加适量的盐🧂打散（可以少量加水，加水后的鸡蛋会发白，更加吃油）' },
      { step: '4/9', text: '🔥 热锅冷油，把油烧热后，油温尽量的高，改小火，然后把鸡蛋倒进油锅。' },
      { step: '5/9', text: '🍳 搅动锅里的蛋液，尽量炒到金黄，（尽量不要太碎，炒到金黄色口感会更好，但是营养确有点流失）' },
      { step: '6/9', text: '🌶️ 热锅冷油，把切好的西红柿细丁倒进油锅，为防止溅油先小火炒，有汁流出时改为大火翻炒' },
      { step: '7/9', text: '✨ 当炒到西红柿的块状变软了的时候，加盐🧂，加醋，也可以少放点白糖🍬' },
      { step: '8/9', text: '🔄 把炒好鸡蛋倒进锅里面，来回翻炒几下，让鸡蛋能够充分的吸收西红柿的汁液' },
      { step: '9/9', text: '🧅 鸡蛋吸收西红柿汁液饱和时，加少量的葱花，然后就可以出锅了！😋' },
    ]
  },
  'zh-TW': {
    title: '為了防止你一無所獲，這裡教你怎麼做<i>我愛吃的</i>番茄炒蛋 🍳',
    steps: [
      { step: '1/9', text: '🍅 準備兩個番茄，選擇紅透的，熟透的，洗乾淨，再準備兩個雞蛋 🥚。' },
      { step: '2/9', text: '🔪 把準備好的兩個番茄切成丁，（倒入開水浸泡2分鐘，讓番茄在熱水裡翻滾一會 ♨️；這樣可以輕鬆去掉番茄的外皮，去皮吃的時候很方便，不去皮不但外觀好看，而且會更加有營養）' },
      { step: '3/9', text: '🥣 把雞蛋打到碗裡，加適量的鹽🧂打散（可以少量加水，加水後的雞蛋會發白，更加吃油）' },
      { step: '4/9', text: '🔥 熱鍋冷油，把油燒熱後，油溫盡量的高，改小火，然後把雞蛋倒進油鍋。' },
      { step: '5/9', text: '🍳 攪動鍋裡的蛋液，盡量炒到金黃，（盡量不要太碎，炒到金黃色口感會更好，但是營養確有點流失）' },
      { step: '6/9', text: '🌶️ 熱鍋冷油，把切好的番茄細丁倒進油鍋，為防止濺油先小火炒，有汁流出時改為大火翻炒' },
      { step: '7/9', text: '✨ 當炒到番茄的塊狀變軟了的時候，加鹽🧂，加醋，也可以少放點白糖🍬' },
      { step: '8/9', text: '🔄 把炒好雞蛋倒進鍋裡面，來回翻炒幾下，讓雞蛋能夠充分的吸收番茄的汁液' },
      { step: '9/9', text: '🧅 雞蛋吸收番茄汁液飽和時，加少量的蔥花，然後就可以出鍋了！😋' },
    ]
  },
  'en': {
    title: 'To make sure you don\'t leave empty-handed, here\'s how to make the tomato scramble <i>I love</i> 🍳',
    steps: [
      { step: '1/9', text: '🍅 Prepare two ripe tomatoes, wash them clean, and two eggs 🥚.' },
      { step: '2/9', text: '🔪 Cut the tomatoes into small cubes. (Pour in boiling water and soak for 2 minutes to easily remove the skins ♨️. Removing the skin is convenient for eating, while keeping it is more nutritious and looks better.)' },
      { step: '3/9', text: '🥣 Beat the eggs in a bowl with a pinch of salt🧂. (Adding a small amount of water will make the scrambled eggs lighter and absorb more oil.)' },
      { step: '4/9', text: '🔥 Heat oil in a pan. Once the oil is hot (use high heat, then switch to low heat), pour in the beaten eggs.' },
      { step: '5/9', text: '🍳 Stir the egg liquid in the pan. Try to scramble until golden. (Try not to break it too finely. Scrambled until golden has better texture, but loses some nutrients.)' },
      { step: '6/9', text: '🌶️ Heat oil in a pan, add the diced tomatoes. Stir-fry on low heat first to prevent splashing, then switch to high heat once juice comes out.' },
      { step: '7/9', text: '✨ When the tomato pieces soften, add salt🧂, vinegar, and a little sugar🍬.' },
      { step: '8/9', text: '🔄 Pour the scrambled eggs into the pan and stir-fry a few times so the eggs absorb the tomato juice.' },
      { step: '9/9', text: '🧅 When the eggs have absorbed enough tomato juice, add a little chopped green onion, and it\'s ready to serve! 😋' },
    ]
  },
  'ja': {
    title: '手ぶらで帰さないために、<i>私の好きな</i>卵炒めトマトの作り方を教えます 🍳',
    steps: [
      { step: '1/9', text: '🍅 完熟したトマトを2つ用意し、きれいに洗ってから、卵を2つ準備します 🥚。' },
      { step: '2/9', text: '🔪 用意したトマトを小さく切ります。（お湯に2分間浸すと、トマトの皮が簡単に剥けます ♨️。皮を剥くと食べやすいですが、剥かない方が見た目も良く、栄養価も高くなります。）' },
      { step: '3/9', text: '🥣 ボウルに卵を割り入れ、適量の塩🧂を加えて混ぜます（少量の水を加えると、卵が白っぽくなり、油をより吸います）。' },
      { step: '4/9', text: '🔥 フライパンを熱し、冷たい油を入れます。油が熱くなったら（強火で、その後弱火に）、卵液を流し入れます。' },
      { step: '5/9', text: '🍳 フライパンの中で卵液をかき混ぜ、きつね色になるまで炒めます（細かくしすぎないように。きつね色に炒めると食感は良くなりますが、栄養は少し失われます）。' },
      { step: '6/9', text: '🌶️ フライパンを熱し、冷たい油を入れ、切ったトマトを炒めます。油はねを防ぐために弱火で炒め、汁が出てきたら強火に切り替えます。' },
      { step: '7/9', text: '✨ トマトが柔らかくなったら，塩🧂，酢，そして砂糖🍬を少し加えます。' },
      { step: '8/9', text: '🔄 炒めた卵を鍋に戻し，数回かき混ぜて，卵がトマトの汁を十分に吸うようにします。' },
      { step: '9/9', text: '🧅 卵がトマトの汁を十分に吸ったら、ネギを少し加えて完成です！😋' },
    ]
  },
}

</script>

<template>
  <main class="va-main w-full h-screen" text="center" flex="~ col" justify="center" items="center">
    <div class="not-found" title="404" font="mono">
      404
    </div>

    <div style="margin-top: 2rem; max-width: 600px; text-align: left; margin: 0 auto;">
      <!-- 标题根据选择的语言显示 -->
      <h2 v-if="visibleRecipeLang && recipes[visibleRecipeLang]" style="text-align: center; margin-bottom: 1rem;" v-html="recipes[visibleRecipeLang]?.title"></h2>
      
      <section 
        v-if="visibleRecipeLang && recipes[visibleRecipeLang]"
      >
        <p v-for="item in recipes[visibleRecipeLang].steps" :key="item.step" style="margin-bottom: 0.5rem;" v-html="`<b>${item.step}</b> ${item.text}`"></p>
      </section>

      <!-- 语言切换按钮放在食谱内容下方 -->
      <div style="display: flex; justify-content: center; gap: 10px; margin-top: 1.5rem;">
        <button class="btn rounded" @click="toggleRecipe('zh-CN')">简体中文</button>
        <button class="btn rounded" @click="toggleRecipe('zh-TW')">繁體中文</button>
        <button class="btn rounded" @click="toggleRecipe('ja')">日本语</button>
        <button class="btn rounded" @click="toggleRecipe('en')">English</button>
      </div>
    </div>

    <div>
      <button class="btn rounded-full" p="x-6 y-2" text="sm" m="3 t8" :title="t('button.back')" @click="back">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.not-found {
  font-size: 10rem;
  text-shadow: 0 5px 10px rgb(0 0 0 / .25), 0 20px 20px rgb(0 0 0 / .15);
}

/* 简化按钮样式 */
.btn.rounded {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: var(--va-c-bg-soft, #f5f5f5);
  color: var(--va-c-text, #333);
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn.rounded:hover {
  background: var(--va-c-primary, #409eff);
  color: #fff;
}
</style> 