export default  {
    tabs: {
        root: ({ props }) => ({
            class: ['flex flex-col !bg--400', { '[&>[data-pc-name=tablist]]:overflow-hidden': props.scrollable }]
        })
    },
}
