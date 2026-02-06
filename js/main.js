/* ============================================
   Chili Memorial — JavaScript
   i18n, inline editing, auto-translate,
   thoughts (localStorage), scroll animations
   ============================================ */

(function () {
  'use strict';

  // ─── Translations (defaults) ───────────────
  var defaultTranslations = {
    en: {
      'nav.about': 'About',
      'nav.memories': 'Memories',
      'nav.thoughts': 'Thoughts',
      'hero.subtitle': 'Forever our sunshine, forever our good girl',
      'about.title': 'Our Beloved Chili',
      'about.intro1':
        'Chili was a beautiful German Shepherd who came into our lives in 2019 as a tiny, curious puppy with oversized paws and the most soulful brown eyes. Over seven wonderful years, she grew into the most loyal, gentle, and loving companion our family could ever wish for.',
      'about.intro2':
        "She wasn't just a dog \u2014 she was the one who greeted us at the door with her whole body wiggling with joy. She was the warm presence beside us on cold nights. She was the patient playmate who let the kids climb all over her. She was the guardian who kept watch over our home. She was, in every way, family.",
      'about.specialTitle': 'What Made Chili Special',
      'about.special1':
        'She had the gentlest soul \u2014 always so careful and patient around the children',
      'about.special2':
        'Her tail never stopped wagging, even when she was sleepy',
      'about.special3':
        'She could hear a treat bag crinkle from anywhere in the house',
      'about.special4':
        'She loved to \u201ctalk\u201d with her adorable little whines and woofs',
      'about.special5':
        'Her favorite spot was right next to whoever was home',
      'about.special6':
        'She believed she was a lap dog, despite weighing 30 kilograms',
      'about.favoritesTitle': "Chili\u2019s Favorite Things",
      'about.fav1': 'Morning walks when the dew was still on the grass',
      'about.fav2': 'Playing fetch until everyone else was tired',
      'about.fav3': "Belly rubs \u2014 she\u2019d roll over for anyone",
      'about.fav4': 'Guarding the family from suspicious squirrels',
      'about.fav5': 'Napping in sunbeams by the window',
      'about.fav6': 'Being wherever her people were',
      'memories.title': 'Precious Memories',
      'memories.subtitle': 'Seven years of love, joy, and wagging tails',
      'memories.m1Title': 'The Day We Met',
      'memories.m1Text':
        'We remember the day we brought Chili home \u2014 a tiny bundle of fur with ears too big for her head. She explored every corner of the house, then fell asleep right in the middle of the living room floor. That was the moment she claimed our home as hers.',
      'memories.m2Title': 'The Great Squirrel Chase',
      'memories.m2Text':
        'Chili took her job as family protector very seriously, especially when it came to squirrels. She once spent an entire afternoon staring up a tree, convinced that if she waited long enough, the squirrel would come down to play.',
      'memories.m3Title': 'Bedtime Routine',
      'memories.m3Text':
        "Every night, Chili would make her rounds \u2014 checking on each family member, giving a gentle nudge with her nose, before settling down to sleep. It was her way of saying goodnight, and it made everyone feel so safe and loved.",
      'memories.m4Title': 'Snow Day',
      'memories.m4Text':
        "The first time Chili saw snow, she didn\u2019t know what to make of it. Then she started bounding through the white fluff, catching snowflakes on her tongue, rolling on her back. Pure, unbridled joy \u2014 that was Chili\u2019s way.",
      'memories.m5Title': 'The Best Listener',
      'memories.m5Text':
        'Whenever anyone in the family was having a tough day, Chili always knew. She\u2019d come over quietly, rest her head on your lap, and just be there. No judgment, no questions \u2014 just love. She had a gift for making everything feel a little bit better.',
      'thoughts.title': 'Words for Chili',
      'thoughts.subtitle':
        "Share your favorite memory, a message, or just say goodbye. Chili would love to know she\u2019s remembered.",
      'thoughts.nameLabel': 'Your Name',
      'thoughts.namePlaceholder': 'Your name',
      'thoughts.messageLabel': 'Your Message for Chili',
      'thoughts.messagePlaceholder': 'Write something for Chili\u2026',
      'thoughts.submit': 'Leave a Message',
      'thoughts.note':
        'Messages are saved in your browser so your family can read them on this device.',
      'thoughts.empty':
        'No messages yet. Be the first to write something for Chili.',
      'thoughts.toast': 'Your message for Chili has been saved \u2764\uFE0F',
      'thoughts.deleteConfirm': 'Remove this message?',
      'footer.madeWith': 'Made with love, in memory of Chili',
      'footer.quote':
        '\u201CThe world was a better place with you in it.\u201D',
      // Editor UI strings
      'editor.cancel': 'Cancel',
      'editor.save': 'Save & Translate',
      'editor.translating': 'Translating\u2026',
      'editor.saved': 'Saved & translated',
      'editor.savedOnly': 'Saved',
      'editor.error': 'Translation failed \u2014 saved current language only',
      'editor.banner': 'Edit Mode',
      // GitHub save UI strings
      'gh.title': 'Save to GitHub',
      'gh.desc':
        'Connect to GitHub to save your edits directly to the repository. Changes will go live on your site automatically.',
      'gh.ownerLabel': 'Repository Owner',
      'gh.repoLabel': 'Repository Name',
      'gh.branchLabel': 'Branch',
      'gh.tokenLabel': 'Personal Access Token',
      'gh.tokenHint':
        'Create one at GitHub \u2192 Settings \u2192 Developer settings \u2192 Personal access tokens. Needs \u201CContents\u201D write permission. Stored only in your browser.',
      'gh.saveBtn': 'Save to GitHub',
      'gh.saving': 'Saving to GitHub\u2026',
      'gh.success': 'Saved! Changes will be live shortly.',
      'gh.error': 'Failed to save. Check your token and try again.',
      'gh.noEdits': 'No edits to save.',
      'gh.bannerSave': 'Push to GitHub',
    },
    zh: {
      'nav.about': '\u5173\u4E8EChili',
      'nav.memories': '\u7F8E\u597D\u56DE\u5FC6',
      'nav.thoughts': '\u7559\u8A00',
      'hero.subtitle':
        '\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u9633\u5149\uFF0C\u6C38\u8FDC\u662F\u6211\u4EEC\u7684\u597D\u5973\u5B69',
      'about.title': '\u6211\u4EEC\u6700\u7231\u7684Chili',
      'about.intro1':
        'Chili\u662F\u4E00\u53EA\u7F8E\u4E3D\u7684\u5FB7\u56FD\u7267\u7F8A\u72AC\uFF0C2019\u5E74\u6765\u5230\u6211\u4EEC\u7684\u751F\u6D3B\u4E2D\uFF0C\u90A3\u65F6\u5979\u8FD8\u662F\u4E00\u53EA\u5C0F\u5C0F\u7684\u3001\u597D\u5947\u7684\u5E7C\u72AC\uFF0C\u6709\u7740\u5927\u5927\u7684\u722A\u5B50\u548C\u6700\u6DF1\u60C5\u7684\u68D5\u8272\u773C\u775B\u3002\u5728\u7F8E\u597D\u7684\u4E03\u5E74\u91CC\uFF0C\u5979\u6210\u957F\u4E3A\u6211\u4EEC\u5BB6\u5EAD\u6240\u80FD\u62E5\u6709\u7684\u6700\u5FE0\u8BDA\u3001\u6700\u6E29\u67D4\u3001\u6700\u6709\u7231\u7684\u4F19\u4F34\u3002',
      'about.intro2':
        '\u5979\u4E0D\u4EC5\u4EC5\u662F\u4E00\u53EA\u72D7\u2014\u2014\u5979\u662F\u90A3\u4E2A\u5728\u95E8\u53E3\u7528\u6574\u4E2A\u8EAB\u4F53\u6447\u6446\u7740\u6B22\u8FCE\u6211\u4EEC\u56DE\u5BB6\u7684\u5BB6\u4EBA\u3002\u5979\u662F\u5BD2\u51B7\u591C\u665A\u8EAB\u8FB9\u6E29\u6696\u7684\u5B58\u5728\u3002\u5979\u662F\u8BA9\u5B69\u5B50\u4EEC\u722C\u6765\u722C\u53BB\u7684\u8010\u5FC3\u73A9\u4F34\u3002\u5979\u662F\u5B88\u62A4\u6211\u4EEC\u5BB6\u56ED\u7684\u536B\u58EB\u3002\u5979\u662F\u6211\u4EEC\u771F\u6B63\u7684\u5BB6\u4EBA\u3002',
      'about.specialTitle': 'Chili\u7684\u7279\u522B\u4E4B\u5904',
      'about.special1':
        '\u5979\u6709\u6700\u6E29\u67D4\u7684\u7075\u9B42\u2014\u2014\u5BF9\u5B69\u5B50\u4EEC\u603B\u662F\u90A3\u4E48\u5C0F\u5FC3\u548C\u8010\u5FC3',
      'about.special2':
        '\u5979\u7684\u5C3E\u5DF4\u6C38\u8FDC\u4E0D\u505C\u5730\u6447\u6446\uFF0C\u5373\u4F7F\u5728\u5979\u56F0\u7684\u65F6\u5019',
      'about.special3':
        '\u5979\u80FD\u4ECE\u623F\u5B50\u7684\u4EFB\u4F55\u89D2\u843D\u542C\u5230\u96F6\u98DF\u888B\u7684\u58F0\u97F3',
      'about.special4':
        '\u5979\u559C\u6B22\u7528\u53EF\u7231\u7684\u54FC\u54FC\u548C\u6C6A\u6C6A\u58F0\u6765\u201C\u8BF4\u8BDD\u201D',
      'about.special5':
        '\u5979\u6700\u559C\u6B22\u7684\u4F4D\u7F6E\u662F\u7D27\u6328\u7740\u5BB6\u91CC\u7684\u4EFB\u4F55\u4EBA',
      'about.special6':
        '\u5979\u575A\u4FE1\u81EA\u5DF1\u662F\u4E00\u53EA\u5C0F\u578B\u72AC\uFF0C\u5C3D\u7BA1\u5979\u6709\u4E09\u5341\u516C\u65A4\u91CD',
      'about.favoritesTitle': 'Chili\u6700\u559C\u6B22\u7684\u4E8B\u60C5',
      'about.fav1':
        '\u8349\u5730\u4E0A\u8FD8\u6709\u9732\u6C34\u65F6\u7684\u65E9\u6668\u6563\u6B65',
      'about.fav2':
        '\u73A9\u6361\u7403\u6E38\u620F\u76F4\u5230\u6240\u6709\u4EBA\u90FD\u7D2F\u4E86',
      'about.fav3':
        '\u809A\u76AE\u6309\u6469\u2014\u2014\u5979\u4F1A\u4E3A\u4EFB\u4F55\u4EBA\u7FFB\u8EAB',
      'about.fav4':
        '\u4FDD\u62A4\u5BB6\u4EBA\u4E0D\u53D7\u53EF\u7591\u677E\u9F20\u7684\u4FB5\u6270',
      'about.fav5': '\u5728\u7A97\u8FB9\u7684\u9633\u5149\u4E2D\u6253\u76F9',
      'about.fav6':
        '\u5F85\u5728\u5BB6\u4EBA\u8EAB\u8FB9\u7684\u4EFB\u4F55\u5730\u65B9',
      'memories.title': '\u7F8E\u597D\u56DE\u5FC6',
      'memories.subtitle':
        '\u4E03\u5E74\u7684\u7231\u3001\u5FEB\u4E50\u548C\u6447\u6446\u7684\u5C3E\u5DF4',
      'memories.m1Title': '\u6211\u4EEC\u76F8\u9047\u7684\u90A3\u5929',
      'memories.m1Text':
        '\u6211\u4EEC\u8BB0\u5F97\u628AChili\u5E26\u56DE\u5BB6\u7684\u90A3\u5929\u2014\u2014\u4E00\u4E2A\u5C0F\u5C0F\u7684\u6BDB\u7403\uFF0C\u8033\u6735\u5927\u5F97\u548C\u5934\u4E0D\u6210\u6BD4\u4F8B\u3002\u5979\u63A2\u7D22\u4E86\u623F\u5B50\u7684\u6BCF\u4E2A\u89D2\u843D\uFF0C\u7136\u540E\u5C31\u5728\u5BA2\u5385\u5730\u677F\u6B63\u4E2D\u592E\u7761\u7740\u4E86\u3002\u90A3\u4E00\u523B\uFF0C\u5979\u5C31\u628A\u6211\u4EEC\u7684\u5BB6\u53D8\u6210\u4E86\u5979\u7684\u5BB6\u3002',
      'memories.m2Title': '\u8FFD\u677E\u9F20\u5927\u4F5C\u6218',
      'memories.m2Text':
        'Chili\u975E\u5E38\u8BA4\u771F\u5730\u5BF9\u5F85\u5979\u4F5C\u4E3A\u5BB6\u5EAD\u5B88\u62A4\u8005\u7684\u804C\u8D23\uFF0C\u5C24\u5176\u662F\u9762\u5BF9\u677E\u9F20\u7684\u65F6\u5019\u3002\u5979\u66FE\u7ECF\u82B1\u4E86\u6574\u4E2A\u4E0B\u5348\u76EF\u7740\u4E00\u68F5\u6811\u770B\uFF0C\u575A\u4FE1\u53EA\u8981\u5979\u7B49\u5F97\u591F\u4E45\uFF0C\u677E\u9F20\u5C31\u4F1A\u4E0B\u6765\u548C\u5979\u4E00\u8D77\u73A9\u3002',
      'memories.m3Title': '\u7761\u524D\u4EEA\u5F0F',
      'memories.m3Text':
        '\u6BCF\u5929\u665A\u4E0A\uFF0CChili\u90FD\u4F1A\u5DE1\u89C6\u4E00\u5708\u2014\u2014\u67E5\u770B\u6BCF\u4E2A\u5BB6\u5EAD\u6210\u5458\uFF0C\u7528\u9F3B\u5B50\u8F7B\u8F7B\u78B0\u78B0\u4F60\uFF0C\u7136\u540E\u624D\u5B89\u5FC3\u7761\u4E0B\u3002\u90A3\u662F\u5979\u8BF4\u665A\u5B89\u7684\u65B9\u5F0F\uFF0C\u8BA9\u6BCF\u4E2A\u4EBA\u90FD\u611F\u5230\u5B89\u5168\u548C\u88AB\u7231\u3002',
      'memories.m4Title': '\u4E0B\u96EA\u5929',
      'memories.m4Text':
        'Chili\u7B2C\u4E00\u6B21\u770B\u5230\u96EA\u7684\u65F6\u5019\uFF0C\u4E0D\u77E5\u9053\u8BE5\u600E\u4E48\u529E\u3002\u7136\u540E\u5979\u5F00\u59CB\u5728\u96EA\u5730\u91CC\u8E66\u8DF3\uFF0C\u7528\u820C\u5934\u63A5\u96EA\u82B1\uFF0C\u5728\u96EA\u5730\u4E0A\u6253\u6EDA\u3002\u7EAF\u7CB9\u7684\u5FEB\u4E50\u2014\u2014\u90A3\u5C31\u662FChili\u7684\u65B9\u5F0F\u3002',
      'memories.m5Title': '\u6700\u597D\u7684\u503E\u542C\u8005',
      'memories.m5Text':
        '\u6BCF\u5F53\u5BB6\u91CC\u6709\u4EBA\u5FC3\u60C5\u4E0D\u597D\u7684\u65F6\u5019\uFF0CChili\u603B\u662F\u77E5\u9053\u3002\u5979\u4F1A\u6084\u6084\u8D70\u8FC7\u6765\uFF0C\u628A\u5934\u6401\u5728\u4F60\u7684\u817F\u4E0A\uFF0C\u5C31\u90A3\u6837\u9759\u9759\u5730\u966A\u7740\u4F60\u3002\u4E0D\u8BC4\u5224\uFF0C\u4E0D\u8FFD\u95EE\u2014\u2014\u53EA\u6709\u7231\u3002\u5979\u6709\u4E00\u79CD\u8BA9\u4E00\u5207\u90FD\u53D8\u5F97\u597D\u4E00\u70B9\u7684\u5929\u8D4B\u3002',
      'thoughts.title': '\u7ED9Chili\u7684\u8BDD',
      'thoughts.subtitle':
        '\u5206\u4EAB\u4F60\u6700\u559C\u6B22\u7684\u56DE\u5FC6\uFF0C\u4E00\u6761\u6D88\u606F\uFF0C\u6216\u8005\u53EA\u662F\u8BF4\u58F0\u518D\u89C1\u3002Chili\u4E00\u5B9A\u4F1A\u5F88\u5F00\u5FC3\u77E5\u9053\u5979\u88AB\u8BB0\u4F4F\u3002',
      'thoughts.nameLabel': '\u4F60\u7684\u540D\u5B57',
      'thoughts.namePlaceholder': '\u4F60\u7684\u540D\u5B57',
      'thoughts.messageLabel': '\u4F60\u60F3\u5BF9Chili\u8BF4\u7684\u8BDD',
      'thoughts.messagePlaceholder': '\u5199\u70B9\u4EC0\u4E48\u7ED9Chili\u2026',
      'thoughts.submit': '\u7559\u4E0B\u6D88\u606F',
      'thoughts.note':
        '\u6D88\u606F\u4FDD\u5B58\u5728\u4F60\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5BB6\u4EBA\u53EF\u4EE5\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u9605\u8BFB\u3002',
      'thoughts.empty':
        '\u8FD8\u6CA1\u6709\u6D88\u606F\u3002\u6210\u4E3A\u7B2C\u4E00\u4E2A\u7ED9Chili\u5199\u70B9\u4EC0\u4E48\u7684\u4EBA\u5427\u3002',
      'thoughts.toast':
        '\u4F60\u7ED9Chili\u7684\u6D88\u606F\u5DF2\u4FDD\u5B58 \u2764\uFE0F',
      'thoughts.deleteConfirm': '\u5220\u9664\u8FD9\u6761\u6D88\u606F\uFF1F',
      'footer.madeWith': '\u7528\u7231\u5236\u4F5C\uFF0C\u7EAA\u5FF5Chili',
      'footer.quote':
        '\u201C\u6709\u4F60\u5728\u7684\u4E16\u754C\uFF0C\u53D8\u5F97\u66F4\u52A0\u7F8E\u597D\u3002\u201D',
      // Editor UI strings
      'editor.cancel': '\u53D6\u6D88',
      'editor.save': '\u4FDD\u5B58\u5E76\u7FFB\u8BD1',
      'editor.translating': '\u6B63\u5728\u7FFB\u8BD1\u2026',
      'editor.saved': '\u5DF2\u4FDD\u5B58\u5E76\u7FFB\u8BD1',
      'editor.savedOnly': '\u5DF2\u4FDD\u5B58',
      'editor.error':
        '\u7FFB\u8BD1\u5931\u8D25\u2014\u2014\u4EC5\u4FDD\u5B58\u5F53\u524D\u8BED\u8A00',
      'editor.banner': '\u7F16\u8F91\u6A21\u5F0F',
      // GitHub save UI strings
      'gh.title': '\u4FDD\u5B58\u5230GitHub',
      'gh.desc':
        '\u8FDE\u63A5GitHub\uFF0C\u5C06\u7F16\u8F91\u5185\u5BB9\u76F4\u63A5\u4FDD\u5B58\u5230\u4ED3\u5E93\u3002\u66F4\u6539\u4F1A\u81EA\u52A8\u53D1\u5E03\u5230\u7F51\u7AD9\u3002',
      'gh.ownerLabel': '\u4ED3\u5E93\u6240\u6709\u8005',
      'gh.repoLabel': '\u4ED3\u5E93\u540D\u79F0',
      'gh.branchLabel': '\u5206\u652F',
      'gh.tokenLabel': '\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C',
      'gh.tokenHint':
        '\u5728GitHub \u2192 Settings \u2192 Developer settings \u2192 Personal access tokens\u521B\u5EFA\u3002\u9700\u8981\u201CContents\u201D\u5199\u5165\u6743\u9650\u3002\u4EC5\u5B58\u50A8\u5728\u4F60\u7684\u6D4F\u89C8\u5668\u4E2D\u3002',
      'gh.saveBtn': '\u4FDD\u5B58\u5230GitHub',
      'gh.saving': '\u6B63\u5728\u4FDD\u5B58\u5230GitHub\u2026',
      'gh.success': '\u5DF2\u4FDD\u5B58\uFF01\u66F4\u6539\u5C06\u5F88\u5FEB\u751F\u6548\u3002',
      'gh.error': '\u4FDD\u5B58\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u4EE4\u724C\u5E76\u91CD\u8BD5\u3002',
      'gh.noEdits': '\u6CA1\u6709\u9700\u8981\u4FDD\u5B58\u7684\u7F16\u8F91\u3002',
      'gh.bannerSave': '\u63A8\u9001\u5230GitHub',
    },
  };

  // ─── State ─────────────────────────────────
  var currentLang = localStorage.getItem('chili-lang') || 'en';
  var editMode = false;
  var STORAGE_KEY = 'chili-thoughts';
  var CUSTOM_TRANS_KEY = 'chili-custom-translations';
  var GH_SETTINGS_KEY = 'chili-gh-settings';

  // Merged translations: defaults < remote (GitHub) < local (localStorage)
  var translations = { en: {}, zh: {} };
  var remoteCustom = { en: {}, zh: {} }; // from data/custom-translations.json

  // ─── Custom Translation Persistence ────────
  function loadCustomTranslations() {
    try {
      return JSON.parse(localStorage.getItem(CUSTOM_TRANS_KEY)) || {
        en: {},
        zh: {},
      };
    } catch (_e) {
      return { en: {}, zh: {} };
    }
  }

  function saveCustomTranslation(lang, key, text) {
    var custom = loadCustomTranslations();
    if (!custom[lang]) custom[lang] = {};
    custom[lang][key] = text;
    localStorage.setItem(CUSTOM_TRANS_KEY, JSON.stringify(custom));
    rebuildTranslations();
  }

  function rebuildTranslations() {
    var local = loadCustomTranslations();
    ['en', 'zh'].forEach(function (lang) {
      translations[lang] = {};
      var def = defaultTranslations[lang] || {};
      var remote = remoteCustom[lang] || {};
      var loc = local[lang] || {};
      // Layer: defaults < remote (GitHub file) < local (unsaved edits)
      for (var k in def) translations[lang][k] = def[k];
      for (var k2 in remote) translations[lang][k2] = remote[k2];
      for (var k3 in loc) translations[lang][k3] = loc[k3];
    });
  }

  // ─── i18n ──────────────────────────────────
  function getStr(key) {
    var dict = translations[currentLang] || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      // Skip editor UI keys when they start with 'editor.'
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document
      .querySelectorAll('[data-i18n-placeholder]')
      .forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
          el.placeholder = dict[key];
        }
      });

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });

    // Update editor UI labels if open
    updateEditorLabels();
  }

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('chili-lang', currentLang);
    applyTranslations(currentLang);
    renderThoughts();
  }

  // ─── Auto-Translate (MyMemory API) ─────────
  function autoTranslate(text, fromLang, toLang) {
    var langPair =
      (fromLang === 'en' ? 'en' : 'zh-CN') +
      '|' +
      (toLang === 'en' ? 'en' : 'zh-CN');

    var url =
      'https://api.mymemory.translated.net/get?q=' +
      encodeURIComponent(text) +
      '&langpair=' +
      langPair;

    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (
          data.responseData &&
          data.responseData.translatedText &&
          data.responseData.match > 0
        ) {
          return data.responseData.translatedText;
        }
        throw new Error('No translation returned');
      });
  }

  // ─── GitHub Settings ────────────────────────
  function loadGhSettings() {
    try {
      return JSON.parse(localStorage.getItem(GH_SETTINGS_KEY)) || {};
    } catch (_e) {
      return {};
    }
  }

  function saveGhSettings(settings) {
    localStorage.setItem(GH_SETTINGS_KEY, JSON.stringify(settings));
  }

  // Fetch the committed custom-translations.json from the site itself
  function fetchRemoteTranslations() {
    return fetch('data/custom-translations.json?_t=' + Date.now())
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (data && typeof data === 'object') {
          remoteCustom = { en: data.en || {}, zh: data.zh || {} };
        }
      })
      .catch(function () {
        // File doesn't exist or can't be fetched — that's fine
      });
  }

  // ─── GitHub API: save to repo ──────────────
  function mergeAllCustom() {
    // Merge remote + local into one object to commit
    var local = loadCustomTranslations();
    var merged = { en: {}, zh: {} };
    ['en', 'zh'].forEach(function (lang) {
      var r = remoteCustom[lang] || {};
      var l = local[lang] || {};
      for (var k in r) merged[lang][k] = r[k];
      for (var k2 in l) merged[lang][k2] = l[k2];
    });
    return merged;
  }

  function hasLocalEdits() {
    var local = loadCustomTranslations();
    return (
      Object.keys(local.en || {}).length > 0 ||
      Object.keys(local.zh || {}).length > 0
    );
  }

  function commitToGitHub(settings) {
    var owner = settings.owner;
    var repo = settings.repo;
    var branch = settings.branch || 'main';
    var token = settings.token;
    var filePath = 'data/custom-translations.json';
    var apiBase = 'https://api.github.com/repos/' + owner + '/' + repo;

    var merged = mergeAllCustom();
    var content = JSON.stringify(merged, null, 2) + '\n';
    var encoded = btoa(unescape(encodeURIComponent(content)));

    var headers = {
      Authorization: 'Bearer ' + token,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };

    // 1. Get the current file SHA (needed for updates)
    return fetch(apiBase + '/contents/' + filePath + '?ref=' + branch, {
      headers: headers,
    })
      .then(function (res) {
        if (res.status === 404) return null; // file doesn't exist yet
        if (!res.ok) throw new Error('GitHub API error: ' + res.status);
        return res.json();
      })
      .then(function (existing) {
        var body = {
          message: 'Update custom translations',
          content: encoded,
          branch: branch,
        };
        if (existing && existing.sha) {
          body.sha = existing.sha;
        }

        // 2. Create or update the file
        return fetch(apiBase + '/contents/' + filePath, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(body),
        });
      })
      .then(function (res) {
        if (!res.ok) throw new Error('GitHub commit failed: ' + res.status);
        return res.json();
      })
      .then(function () {
        // Success: merge local into remote and clear local
        remoteCustom = mergeAllCustom();
        localStorage.removeItem(CUSTOM_TRANS_KEY);
        rebuildTranslations();
      });
  }

  // ─── Edit Mode ─────────────────────────────
  var editorPanel = null;
  var editorTextarea = null;
  var editorStatus = null;
  var editorSaveBtn = null;
  var editorCancelBtn = null;
  var editorLangLabel = null;
  var editorBackdrop = null;
  var currentEditingEl = null;
  var currentEditingKey = null;
  var banner = null;

  function toggleEditMode() {
    editMode = !editMode;
    document.body.classList.toggle('edit-mode', editMode);
    document.getElementById('editToggle').classList.toggle('active', editMode);

    if (editMode) {
      showBanner();
    } else {
      hideBanner();
      closeEditor();
    }
  }

  function showBanner() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'edit-mode-banner';
    banner.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' +
      '<span>' +
      getStr('editor.banner') +
      '</span>' +
      '<button class="banner-save" id="bannerSave">' +
      getStr('gh.bannerSave') +
      '</button>';
    document.body.appendChild(banner);

    document.getElementById('bannerSave').addEventListener('click', function () {
      openGhModal();
    });
  }

  function hideBanner() {
    if (banner) {
      banner.remove();
      banner = null;
    }
  }

  function updateEditorLabels() {
    if (!editorPanel) return;
    editorCancelBtn.textContent = getStr('editor.cancel');
    editorSaveBtn.textContent = getStr('editor.save');
    if (banner) {
      banner.querySelector('span').textContent = getStr('editor.banner');
    }
  }

  function openEditor(el) {
    var key = el.getAttribute('data-i18n');
    if (!key) return;

    // Don't edit nav links or editor UI
    if (key.indexOf('editor.') === 0) return;

    currentEditingEl = el;
    currentEditingKey = key;

    // Remove previous editing highlight
    document.querySelectorAll('.editing').forEach(function (e) {
      e.classList.remove('editing');
    });
    el.classList.add('editing');

    // Populate textarea with current language's text
    var currentText = translations[currentLang][key] || el.textContent;
    editorTextarea.value = currentText;
    editorLangLabel.textContent = currentLang === 'en' ? 'EN' : '\u4E2D\u6587';
    editorStatus.textContent = '';
    editorStatus.className = 'inline-editor-status';
    editorSaveBtn.disabled = false;
    editorSaveBtn.textContent = getStr('editor.save');

    // Auto-size the textarea
    editorTextarea.rows = Math.min(
      8,
      Math.max(2, currentText.split('\n').length + 1)
    );

    // Position the panel near the element
    positionEditor(el);

    // Show backdrop + editor
    if (!editorBackdrop) {
      editorBackdrop = document.createElement('div');
      editorBackdrop.className = 'editor-backdrop';
      editorBackdrop.addEventListener('click', closeEditor);
    }
    document.body.appendChild(editorBackdrop);
    editorPanel.hidden = false;

    // Focus textarea
    setTimeout(function () {
      editorTextarea.focus();
      editorTextarea.select();
    }, 50);
  }

  function positionEditor(el) {
    var rect = el.getBoundingClientRect();
    var panelWidth = 380;
    var viewportW = window.innerWidth;
    var viewportH = window.innerHeight;

    // Place below the element, centered horizontally on it
    var top = rect.bottom + 10;
    var left = rect.left + rect.width / 2 - panelWidth / 2;

    // Clamp to viewport
    if (left < 16) left = 16;
    if (left + panelWidth > viewportW - 16) left = viewportW - panelWidth - 16;

    // If too close to bottom, place above
    if (top + 200 > viewportH) {
      top = rect.top - 10;
      editorPanel.style.transform = 'translateY(-100%)';
    } else {
      editorPanel.style.transform = '';
    }

    editorPanel.style.top = top + 'px';
    editorPanel.style.left = left + 'px';
  }

  function closeEditor() {
    if (editorPanel) editorPanel.hidden = true;
    if (editorBackdrop && editorBackdrop.parentNode) {
      editorBackdrop.remove();
    }
    if (currentEditingEl) {
      currentEditingEl.classList.remove('editing');
    }
    currentEditingEl = null;
    currentEditingKey = null;
  }

  function handleEditorSave() {
    var key = currentEditingKey;
    var newText = editorTextarea.value.trim();
    if (!key || !newText) return;

    var fromLang = currentLang;
    var toLang = fromLang === 'en' ? 'zh' : 'en';

    // Save current language immediately
    saveCustomTranslation(fromLang, key, newText);
    applyTranslations(currentLang);

    // Show translating status
    editorSaveBtn.disabled = true;
    editorStatus.className = 'inline-editor-status translating';
    editorStatus.innerHTML =
      '<span class="spinner"></span> ' + getStr('editor.translating');

    // Auto-translate to the other language
    autoTranslate(newText, fromLang, toLang)
      .then(function (translated) {
        saveCustomTranslation(toLang, key, translated);

        editorStatus.className = 'inline-editor-status success';
        editorStatus.textContent = getStr('editor.saved');

        setTimeout(closeEditor, 800);
      })
      .catch(function () {
        editorStatus.className = 'inline-editor-status error';
        editorStatus.textContent = getStr('editor.error');
        editorSaveBtn.disabled = false;
        editorSaveBtn.textContent = getStr('editor.cancel');

        // Still close after a moment
        setTimeout(closeEditor, 1800);
      });
  }

  // ─── Thoughts / Messages ───────────────────
  function getThoughts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (_e) {
      return [];
    }
  }

  function saveThoughts(thoughts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(thoughts));
  }

  function addThought(name, message) {
    var thoughts = getThoughts();
    thoughts.unshift({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    });
    saveThoughts(thoughts);
    renderThoughts();
  }

  function deleteThought(id) {
    if (!confirm(getStr('thoughts.deleteConfirm'))) return;
    var thoughts = getThoughts().filter(function (t) {
      return t.id !== id;
    });
    saveThoughts(thoughts);
    renderThoughts();
  }

  function formatDate(isoStr) {
    var d = new Date(isoStr);
    if (currentLang === 'zh') {
      return (
        d.getFullYear() +
        '\u5E74' +
        (d.getMonth() + 1) +
        '\u6708' +
        d.getDate() +
        '\u65E5'
      );
    }
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderThoughts() {
    var list = document.getElementById('thoughtsList');
    var thoughts = getThoughts();

    if (thoughts.length === 0) {
      list.innerHTML =
        '<p class="thoughts-empty">' +
        escapeHtml(getStr('thoughts.empty')) +
        '</p>';
      return;
    }

    list.innerHTML = thoughts
      .map(function (t) {
        return (
          '<div class="thought-card">' +
          '<button class="thought-delete" data-id="' +
          t.id +
          '" aria-label="Delete">\u00D7</button>' +
          '<div class="thought-header">' +
          '<span class="thought-name">' +
          escapeHtml(t.name) +
          '</span>' +
          '<span class="thought-date">' +
          formatDate(t.date) +
          '</span>' +
          '</div>' +
          '<p class="thought-message">' +
          escapeHtml(t.message) +
          '</p>' +
          '</div>'
        );
      })
      .join('');
  }

  // ─── Toast ─────────────────────────────────
  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2500);
  }

  // ─── Scroll Animations ─────────────────────
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  // ─── Header Scroll Effect ──────────────────
  function initHeaderScroll() {
    var header = document.getElementById('header');
    var scrolled = false;

    window.addEventListener(
      'scroll',
      function () {
        var isScrolled = window.scrollY > 40;
        if (isScrolled !== scrolled) {
          scrolled = isScrolled;
          header.style.borderBottomColor = scrolled ? '' : 'transparent';
        }
      },
      { passive: true }
    );

    if (window.scrollY <= 40) {
      header.style.borderBottomColor = 'transparent';
    }
  }

  // ─── GitHub Modal ───────────────────────────
  function openGhModal() {
    var modal = document.getElementById('ghModal');
    var backdrop = document.getElementById('ghModalBackdrop');
    var status = document.getElementById('ghStatus');
    var saved = loadGhSettings();

    // Pre-fill saved settings
    document.getElementById('ghOwner').value = saved.owner || '';
    document.getElementById('ghRepo').value = saved.repo || '';
    document.getElementById('ghBranch').value = saved.branch || 'main';
    document.getElementById('ghToken').value = saved.token || '';
    status.textContent = '';
    status.className = 'inline-editor-status';

    modal.hidden = false;
    backdrop.hidden = false;
  }

  function closeGhModal() {
    document.getElementById('ghModal').hidden = true;
    document.getElementById('ghModalBackdrop').hidden = true;
  }

  function handleGhSave(e) {
    e.preventDefault();
    var status = document.getElementById('ghStatus');
    var saveBtn = document.getElementById('ghSaveBtn');

    if (!hasLocalEdits()) {
      status.className = 'inline-editor-status';
      status.textContent = getStr('gh.noEdits');
      return;
    }

    var settings = {
      owner: document.getElementById('ghOwner').value.trim(),
      repo: document.getElementById('ghRepo').value.trim(),
      branch: document.getElementById('ghBranch').value.trim() || 'main',
      token: document.getElementById('ghToken').value.trim(),
    };

    // Persist settings (token stored locally only)
    saveGhSettings(settings);

    // Show saving state
    saveBtn.disabled = true;
    status.className = 'inline-editor-status translating';
    status.innerHTML =
      '<span class="spinner"></span> ' + getStr('gh.saving');

    commitToGitHub(settings)
      .then(function () {
        status.className = 'inline-editor-status success';
        status.textContent = getStr('gh.success');
        saveBtn.disabled = false;
        setTimeout(closeGhModal, 1200);
        showToast(getStr('gh.success'));
      })
      .catch(function (err) {
        status.className = 'inline-editor-status error';
        status.textContent = getStr('gh.error') + ' (' + err.message + ')';
        saveBtn.disabled = false;
      });
  }

  // ─── Init ──────────────────────────────────
  function init() {
    // Build merged translations (defaults + localStorage for now)
    rebuildTranslations();

    // Fetch the committed custom-translations.json, then re-merge & re-apply
    fetchRemoteTranslations().then(function () {
      rebuildTranslations();
      applyTranslations(currentLang);
    });

    // Cache editor DOM references
    editorPanel = document.getElementById('inlineEditor');
    editorTextarea = document.getElementById('editorTextarea');
    editorStatus = document.getElementById('editorStatus');
    editorSaveBtn = document.getElementById('editorSave');
    editorCancelBtn = document.getElementById('editorCancel');
    editorLangLabel = document.getElementById('editorLangLabel');

    // Language toggle
    document
      .getElementById('langToggle')
      .addEventListener('click', toggleLanguage);

    // Apply saved language
    applyTranslations(currentLang);

    // Edit mode toggle
    document
      .getElementById('editToggle')
      .addEventListener('click', toggleEditMode);

    // Click handler for editable elements (event delegation on body)
    document.body.addEventListener('click', function (e) {
      if (!editMode) return;

      // Find the closest [data-i18n] element
      var target = e.target.closest('[data-i18n]');
      if (!target) return;

      // Skip nav links (they navigate) and editor keys
      var key = target.getAttribute('data-i18n');
      if (key.indexOf('editor.') === 0) return;

      // Prevent default link behavior in edit mode
      e.preventDefault();
      e.stopPropagation();

      openEditor(target);
    });

    // Editor save / cancel
    editorSaveBtn.addEventListener('click', handleEditorSave);
    editorCancelBtn.addEventListener('click', closeEditor);

    // Save on Ctrl+Enter / Cmd+Enter in textarea
    editorTextarea.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleEditorSave();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        closeEditor();
      }
    });

    // Thoughts form
    document
      .getElementById('thoughtsForm')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        var nameInput = document.getElementById('thoughtName');
        var msgInput = document.getElementById('thoughtMessage');
        var name = nameInput.value;
        var message = msgInput.value;

        if (name.trim() && message.trim()) {
          addThought(name, message);
          nameInput.value = '';
          msgInput.value = '';
          showToast(getStr('thoughts.toast'));
        }
      });

    // Delete thought (event delegation)
    document
      .getElementById('thoughtsList')
      .addEventListener('click', function (e) {
        var btn = e.target.closest('.thought-delete');
        if (btn) {
          deleteThought(btn.getAttribute('data-id'));
        }
      });

    // GitHub modal events
    document
      .getElementById('ghSettingsForm')
      .addEventListener('submit', handleGhSave);
    document
      .getElementById('ghModalClose')
      .addEventListener('click', closeGhModal);
    document
      .getElementById('ghCancelBtn')
      .addEventListener('click', closeGhModal);
    document
      .getElementById('ghModalBackdrop')
      .addEventListener('click', closeGhModal);

    // Render saved thoughts
    renderThoughts();

    // Scroll animations
    initScrollAnimations();
    initHeaderScroll();
  }

  // ─── Start ─────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
