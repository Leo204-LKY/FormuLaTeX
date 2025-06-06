<template>
  <ErrorDialog
    v-model:visible="errorDialogVisible"
    :detail="backendErrorMessage"
    :filePath="backendErrorFilePath"
  />
  <WelcomeCard v-if="isFirstOpen" @on-complete="handleComplete" />
  <div v-else class="flex h-screen">
    <!-- Left: QuickInput -->
    <div class="w-1/4 h-full">
      <TitleBar />
      <QuickInput />
    </div>
    <!-- Right: SymbolSelection & FormulaEdit -->
    <div class="flex-1 flex flex-col">
      <!-- Top Right: SymbolSelection -->
      <div class="h-1/4">
        <SymbolSelect />
      </div>
      <!-- Bottom Right: FormulaEdit -->
      <div class="flex-1">
        <FormulaEdit ref="editorRef" v-model:latexInput="latexInput" />
      </div>
    </div>
    <SideBar ref="sideBarRef" />
  </div>
</template>

<script setup lang="ts">
  import QuickInput from './components/QuickInput.vue';
  import FormulaEdit from './components/FormulaEdit.vue';
  import SymbolSelect from './components/SymbolSelect.vue';
  import SideBar from './components/SideBar.vue';
  import WelcomeCard from './components/WelcomeCard.vue';

  import { ref, onMounted, onUnmounted } from 'vue';
  import { selectExpressionEventBus, selectSymbolEventBus } from './eventBus';
  import TitleBar from './components/TitleBar.vue';
  import ErrorDialog from './sub-components/ErrorDialog.vue';

  const isFirstOpen = ref<boolean>(false);
  const latexInput = ref('');
  const editorRef = ref();
  const sideBarRef = ref();

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

  const handleComplete = async () => {
    isFirstOpen.value = false;
    await window.servicesApi.saveAppSetting('isFirstLaunch', false);
  };
</script>
