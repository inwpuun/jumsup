<script lang="ts">
    import { validateRegEx } from '$lib/utils/validateRegEx';
	import { UserCircle } from 'phosphor-svelte';

    export let pathname: string;
    export let title: string;

    let titlePath = `/${title.toLowerCase()}`;
    let regex = new RegExp(`^${titlePath}.*$`);
    if (title === "Home") {
        titlePath = "/";
        regex = new RegExp(`^${titlePath}$`);
    }

</script>

<li aria-current={pathname === titlePath ? 'page' : undefined} class={`flex items-center justify-center h-full border-2 border-secondary-light hover:border-b-secondary-dark transition-all ease-in-out duration-300 ${validateRegEx(regex, pathname) && "border-b-primary-dark text-primary-dark"}`}>
    <a href={titlePath} class="flex gap-2 items-center px-2 rounded-md hover:bg-secondary-default hover:text-secondary-light h-5/6 transition-all ease-in-out duration-300 ">
        <!-- <UserCircle size={32} weight='duotone' /> -->
        <slot name="icon" />
        {title}
    </a>
</li>