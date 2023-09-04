<template>
    <div>
        <input type="text" name="" required v-model="InputData" @input="handleInput('input-value', InputData)">
        <label>Enter Content</label>
    </div>
</template>

<script>
    export default {
        name: "ContentOne",
    data() {
        return { 
            InputData: ''
        }
    },
        methods: {
        handleInput(emitEvent, value) {
            this.$emit(emitEvent, value)
        }
    }
}
</script>