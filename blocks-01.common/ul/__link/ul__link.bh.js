module.exports = function(bh) {
	bh.match('ul__link', function(ctx) {
		ctx
			.tag('li')
			.content([
				{
					block: 'link',
					content: ctx.content()
				}
			])
	});
};
