<template>
  <ErrorDialog
    v-model:visible="errorDialogVisible"
    :detail="backendErrorMessage"
    :filePath="backendErrorFilePath"
  />

  <WelcomeCard v-if="isFirstOpen" @on-complete="handleComplete" />
  <div v-else class="flex h-screen">
    <v-tour ref="tour" name="myTour" :steps="steps" :options="myOptions" />

    <AlterItem
      v-model:visible="alertVisible_tour"
      :title="t('UserTour.title')"
      :message="t('UserTour.subtitle')"
      :buttons="[
        { text: t('UserTour.Nobutton'), type: 'secondary' },
        { text: t('UserTour.Yesbutton'), type: 'primary', callback: startTour },
      ]"
    />
    <!-- Left: QuickInput -->
    <div class="w-1/4 h-full flex flex-col">
      <div class="h-12 shrink-0">
        <TitleBar />
      </div>
      <div class="flex-1 overflow-y-auto" id="step1">
        <QuickInput />
      </div>
    </div>
    <!-- Right: SymbolSelection & FormulaEdit -->
    <div class="flex-1 flex flex-col">
      <!-- Top Right: SymbolSelection -->
      <div class="h-1/4">
        <SymbolSelect id="step2" />
      </div>
      <!-- Bottom Right: FormulaEdit -->
      <div class="flex-1" id="step3">
        <FormulaEdit ref="editorRef" v-model:latexInput="latexInput" />
      </div>
    </div>
    <SideBar ref="sideBarRef" id="step4" />
  </div>
</template>

<script setup lang="ts">
  import QuickInput from './components/QuickInput.vue';
  import FormulaEdit from './components/FormulaEdit.vue';
  import SymbolSelect from './components/SymbolSelect.vue';
  import SideBar from './components/SideBar.vue';
  import WelcomeCard from './components/WelcomeCard.vue';
  import AlterItem from './sub-components/AlterItem.vue';

  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { nextTick } from 'vue';
  import { selectExpressionEventBus, selectSymbolEventBus } from './eventBus';
  import TitleBar from './components/TitleBar.vue';
  import ErrorDialog from './sub-components/ErrorDialog.vue';

  import { useI18n } from 'vue-i18n';

  // i18n
  const { t } = useI18n();

  const isFirstOpen = ref<boolean>(false);
  const latexInput = ref('');
  const editorRef = ref();
  const sideBarRef = ref();
  const tour = ref();
  const alertVisible_tour = ref(true);

  const steps = computed(() => [
    {
      target: '#step1',
      content: t('UserTour.step1.whole'),
      params: {
        placement: 'right',
        highlightpadding: 2,
      },
    },
    {
      target: '#step1 #createFormula-button',
      content: t('UserTour.step1.createFormula-button'),
      params: {
        placement: 'right',
      },
    },
    {
      target: '#step1 #tag-selector',
      content: t('UserTour.step1.tags-list'),
      params: {
        placement: 'right',
      },
    },
    {
      target: '#step1 #expression-list',
      content: t('UserTour.step1.expression-list'),
      params: {
        placement: 'right',
      },
    },
    {
      target: '#step3',
      content: t('UserTour.step3.whole'),
      params: {
        placement: 'left',
      },
    },
    {
      target: '#step3 #tools-bar',
      content: t('UserTour.step3.tools-bar'),
      params: {
        placement: 'left',
      },
    },
    {
      target: '#step3 #simpleTexSetting-button',
      content: t('UserTour.step3.simpleTexSetting-button'),
      params: {
        placement: 'left',
      },
    },
    {
      target: '#step3 #upload-button',
      content: t('UserTour.step3.upload-button'),
      params: {
        placement: 'left',
      },
    },
    {
      target: '#step3 #askAI-button',
      content: t('UserTour.step3.askAI-button'),
      params: {
        placement: 'left',
      },
    },
    {
      target: '#step2',
      content: t('UserTour.step2.whole'),
      params: {
        placement: 'auto',
      },
    },
    {
      target: '#step4',
      content: t('UserTour.step4.whole'),
      params: {
        placement: 'left',
      },
    },
  ]);

  const myOptions = computed(() => ({
    useKeyboardNavigation: false,
    labels: {
      buttonSkip: t('UserTour.buttonSkip'),
      buttonPrevious: t('UserTour.buttonPrevious'),
      buttonNext: t('UserTour.buttonNext'),
      buttonStop: t('UserTour.buttonStop'),
    },
    highlight: true,
  }));

  // Error dialog
  const errorDialogVisible = ref(false);
  const backendErrorMessage = ref('');
  const backendErrorFilePath = ref('');

  const isSideBarExpanded = () => {
    return sideBarRef.value?.isDrawerOpen;
  };

  const handleSelect = (expr: string) => {
    // Call the insert function by reference
    if (isSideBarExpanded()) {
      sideBarRef.value?.insertFormula(expr);
    } else {
      editorRef.value?.insertFormulaAtCursor(expr);
    }
  };

  onMounted(() => {
    getFirstOpen();
    selectExpressionEventBus.on('selectExpression', handleSelect);
    selectSymbolEventBus.on('selectSymbol', handleSelect);

    // Backend error handling
    window.backendErrorApi.onBackendError((error, logFilePath) => {
      console.log('Backend error:' + error + ', Path: ' + logFilePath);
      backendErrorMessage.value = `Message: ${error.message || 'Unknown Error'}\n${error.stack || 'Unknown stack'}`;
      backendErrorFilePath.value = logFilePath || '';
      errorDialogVisible.value = true;
    });
  });

  onUnmounted(() => {
    selectExpressionEventBus.off('selectExpression', handleSelect);
    selectSymbolEventBus.off('selectSymbol', handleSelect);
  });

  const getFirstOpen = async () => {
    const isFirstLaunch = (await window.servicesApi.getAppSetting(
      'isFirstLaunch'
    )) as boolean;

    isFirstOpen.value = isFirstLaunch ?? true;
  };

  async function startTour() {
    alertVisible_tour.value = false;
    await nextTick();
    tour.value?.start();
  }

  const handleComplete = async () => {
    isFirstOpen.value = false;
    await window.servicesApi.saveAppSetting('isFirstLaunch', false);
    alertVisible_tour.value = true;
  };
</script>

<style scoped>
  ::v-deep(.v-step) {
    background-color: #fff7ed !important;
    color: #78350f !important;
    border-radius: 12px !important;
    padding: 1.25rem !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1) !important;
    max-width: 340px !important;
    border: 1px solid #fed7aa;
  }

  ::v-deep(.v-step__arrow) {
    display: none !important;
  }

  ::v-deep(.v-step__buttons button) {
    background-color: #fdba74 !important;
    color: white !important;
    border: none !important;
  }

  ::v-deep(.v-step__buttons button:hover) {
    background-color: #f97316 !important;
  }

  ::v-deep(.v-tour__target--highlighted) {
    box-shadow: none !important;
    outline: 2px dashed #fb923c !important;
    border-radius: 6px !important;
  }
</style>
