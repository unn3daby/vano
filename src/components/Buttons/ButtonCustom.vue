<template>
    <button 
        class="btn" 
        :class="{primary: props.primary, danger: props.danger, outline: props.outline }" 
        :disabled="props.disabled"
    >
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    primary: {
        type: Boolean
    },
    danger: {
        type: Boolean
    },
    outline: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    }
});
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;

  color: var(--white);
  background-color: var(--primary);
  border: none;
  transition: box-shadow .15s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
}

.btn-primary {
  color: var(--white);
  background-color: var(--primary);
  border: none;
}

.btn-danger {
  color: var(--white);
  background-color: var(--error);
  border: none;
}

.btn-danger-outline {
  color: var(--error);
  background-color: var(--white);
  border: 1px solid var(--error);
  box-shadow: none;
}

.btn:disabled {
  cursor: not-allowed;
  color: var(--grey);
  background-color: var(--white);
  border: 1px solid var(--grey);
  box-shadow: none;
}
</style>