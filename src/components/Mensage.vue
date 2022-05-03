<template>
    <div class="mensage-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'Mensage',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .mensage-container {
        color: rgb(84, 134, 134);
        background-color: #CCE5FF;
        border: 2px solid #B8DAFF;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>