<template>
    <div v-for="note in notes">
        <p>{{ note.id }}. {{ note.title }}: {{ note.content }}</p>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notes: []
        }
    },
    mounted() {
        this.fetchNotes()
    },
    methods: {
        fetchNotes() {
            axios.get('api/notes')
                .then(response => this.notes = response.data)
                .catch(error => console.log(error))
        }
    }
}
</script>
