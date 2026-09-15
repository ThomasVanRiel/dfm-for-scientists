-- Project-local Neovim config. Requires `vim.o.exrc = true`; approve this file once with :trust.
-- Formatting Slidev markdown breaks the deck: a blank line after `---` breaks per-slide
-- frontmatter, and ordered lists get renumbered. Disable conform's format-on-save for markdown.

vim.notify(".nvim.lua loaded")

local function disable(buf)
	vim.b[buf].autoformat = false
end

vim.api.nvim_create_autocmd("FileType", {
	pattern = "markdown",
	callback = function(args)
		disable(args.buf)
	end,
})

for _, buf in ipairs(vim.api.nvim_list_bufs()) do
	if vim.bo[buf].filetype == "markdown" then
		disable(buf)
	end
end
