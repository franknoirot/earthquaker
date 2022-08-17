
<script>
    // import components to use here
    import {PortableText} from '@portabletext/svelte'

    export let value = []

    const serializerOverrides = {
        types: {
            // embedded components and content types
        },
        marks: {
            // marks like bold and italics
        },
        blockStyles: {
            // block-level styles like headings and paragraphs
        },
    }
</script>

<div class="block-content">
    <PortableText {value} serializers={serializerOverrides} />
</div>

<style>
    :global(.block-content h1) {
        margin-top: 2rem;
        margin-bottom: 3rem;
    }
    :global(.block-content h2) {
        margin: 3rem 0 1.25rem;
    }
</style>
