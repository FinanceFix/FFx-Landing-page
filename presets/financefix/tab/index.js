
export default {
    root: ({ props, context }) => ({
        class: [
            'relative shrink-0 flex flex-col !bg-[#142032] max-w-[525px] border border-[#1D3354] rounded-lg',
            // Transitions
            'transition-all duration-200',
            // Misc
            'cursor-pointer select-none whitespace-nowrap',
            'user-select-none',
            // Shape
            // Spacing
            'py-4 px-[1.125rem]',
            '-mb-px',
            // Colors and Conditions
            'outline-transparent',
            {
                'opacity-60 cursor-default user-select-none select-none pointer-events-none': props == null ? void 0 : props.disabled
            },
            // States
            {
                'hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.active,
                'hover:text-surface-900 dark:hover:text-surface-0': !context.active
            }
        ]
    })
}
