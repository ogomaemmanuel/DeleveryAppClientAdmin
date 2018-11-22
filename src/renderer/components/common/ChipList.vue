<template>
<div v-click-outside="hideSelector" class="chip-container">
    <div  @click.self="showSector=true" class="chip-input">
        <chip @chipRemoved="removeChip" v-for="selectedChip in selectedChips" :chip="selectedChip" :key="selectedChip.id"></chip>
    </div>
    <div v-if="showSector" class="chip-selector">
        <ul>
            <li class="chip-option" @click.prevent="setSelectedChip(chipDt)" v-for="chipDt in chipData" :key="chipDt.id">{{chipDt.text}}</li>
        </ul>
    </div>
</div>
</template>

<script>
import Chip from './Chip'
export default {
    components: {
        "chip": Chip
    },
    props: ["chipData"],
    data() {
        return {
            selectedChips: [],
            showSector: false
        }
    },
    methods: {
        setSelectedChip(chip) {
            if (!this.selectedChips.find(selectedChip => selectedChip.id === chip.id)) {
                this.selectedChips.push(chip)
            }
        },
        setFocus() {

        },
        removeChip(chip) {
            this.selectedChips = this.selectedChips.filter(selectedChip => selectedChip.id !== chip.id);
        },
        hideSelector() {
           this.showSector = false; 
        }
    },
    
    directives: {
        'click-outside': {
            bind: function (el, binding, vNode) {
                // Provided expression must evaluate to a function.
                if (typeof binding.value !== 'function') {
                    const compName = vNode.context.name
                    let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                    if (compName) {
                        warn += `Found in component '${compName}'`
                    }

                    console.warn(warn)
                }
                // Define Handler and cache it on the element
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler

                // add Event Listeners
                document.addEventListener('click', handler)
            },

            unbind: function (el, binding) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    }
}
</script>

<style lang="scss">
.chip-container {
    position: relative;

    .chip-input {
        min-height: 40px;
        min-width: 100%;
        border-radius: 5px;
        border-width: thin;
        border-style: solid;
        border-color: black;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        padding: 5px;
    }

    ;

    &:hover {
        .chip-selector {
            display: block;
        }
    }

    .chip-selector {
        // display: none;
        border-radius: 5px;
        // bottom: 2px;
        z-index: 1;
        border-top: thin;
        // border-top-color: black;
        border-top-style: solid;
        position: absolute;
        background-color: white;
        color: black;
        width: 100%;
        box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.2);

        ul {
            list-style-type: none;
            padding: 0%;
            display: block;

            li {
                display: block;
                padding: 5px;

                &:hover {
                    background-color: blue;
                    color: white;
                }
            }
        }
    }
}
</style>
