<template>
    <div v-for="note in notes" class="main-note">
        <p>{{ note.id }}. {{ note.title }}</p>
        <p class="main-note-arrow">➾</p>
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
