const fancyboxWalletConnect = () => {
	document
		.querySelectorAll("[popup-to='wallet_connect_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#wallet_connect_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

const fancyboxStakeLPTokens = () => {
	document
		.querySelectorAll("[popup-to='stake_lp_tokens_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#stake_lp_tokens_popup",
					type: "inline",
					touch: false,
				});
			});
		});
};

window.addEventListener("load", (e) => {
	fancyboxWalletConnect();
	fancyboxStakeLPTokens();
});

window.addEventListener("scroll", (e) => {});

window.addEventListener("resize", () => {});
