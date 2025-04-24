<template>
  <div class="container">
    <h1>Formula Recognition</h1>
    
    <!-- 文件上传区域 -->
    <div class="upload-area" @dragover.prevent @drop="handleDrop">
      <input 
        type="file" 
        id="fileInput" 
        accept="image/*" 
        @change="handleFileChange" 
        ref="fileInput"
      />
      <label for="fileInput" class="upload-label">
        <span v-if="!previewImage">Drag & Drop or Click to Upload</span>
        <img v-else :src="previewImage" alt="Preview" class="preview-image" />
      </label>
    </div>
    
    <!-- 识别按钮 -->
    <button 
      @click="recognizeFormula" 
      :disabled="!selectedFilePath || isProcessing"
    >
      {{ isProcessing ? 'Processing...' : 'Recognize Formula' }}
    </button>
    
    <!-- 结果显示 -->
    <div v-if="latexResult" class="result-area">
      <h3>Recognition Result:</h3>
      <div class="latex-result">{{ latexResult }}</div>
      <button @click="copyToClipboard" class="copy-btn">Copy LaTeX</button>
    </div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 状态管理
const selectedFilePath = ref<string>(''); // 存储文件路径
const previewImage = ref<string>('');    // 图片预览
const latexResult = ref<string>('');     // 识别结果
const error = ref<string>('');           // 错误信息
const isProcessing = ref<boolean>(false); // 加载状态
const fileInput = ref<HTMLInputElement | null>(null);

// 处理文件选择
const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) processSelectedFile(file);
};

// 处理拖放文件
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const file = event.dataTransfer?.files?.[0];
  if (file) processSelectedFile(file);
};

// 处理选中的文件
const processSelectedFile = (file: File) => {
  // 验证文件类型
  if (!file.type.match('image.*')) {
    error.value = 'Please upload an image file (JPEG/PNG)';
    return;
  }

  // 重置状态
  error.value = '';
  selectedFilePath.value = '';
  latexResult.value = '';

  // 生成预览
  const reader = new FileReader();
  reader.onload = (e) => previewImage.value = e.target?.result as string;
  reader.readAsDataURL(file);

  // 存储文件路径（通过临时对象URL）
  selectedFilePath.value = URL.createObjectURL(file);
};

// 调用主进程识别公式
const recognizeFormula = async () => {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const file = fileInput.files?.[0];
  
  if (!file) {
    error.value = '请先选择文件';
    return;
  }

  isProcessing.value = true;
  try {
    // 直接传递File对象
    const response = await window.electronAPI.recognizeFormula(file);
    
    if (response.success && response.res) {
      latexResult.value = response.res;
    } else {
      error.value = response.error || '识别失败';
    }
  }  catch (err) {
  if (err instanceof Error) {
    error.value = `系统错误: ${err.message}`;
  } else {
    error.value = '发生未知错误';
  }
}finally {
    isProcessing.value = false;
  }
};

// 复制结果到剪贴板
const copyToClipboard = () => {
  if (!latexResult.value) return;
  navigator.clipboard.writeText(latexResult.value)
    .catch(err => console.error('Copy failed:', err));
};
</script>

<style scoped>
/* 原有样式保持不变 */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.upload-area {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
}

/* 其他样式... */
</style>
