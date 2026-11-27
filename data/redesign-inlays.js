/* 2026-11-21 REDESIGN (WP1): late file data/redesign-inlays.js - written by tools/build.mjs from common/109u-css-30-redesign-summary.css + common/109q-css-26-redesign-inlays.css + common/109r-css-27-redesign-inlay-dialog.css + common/109s-css-28-redesign-sleeve.css + common/109v-css-31-inlay-handling.css + common/369o-router-24-redesign-inlays.js + common/369p-router-25-redesign-inlay-dialog.js + common/369q-router-26-redesign-sleeve.js + common/369v0-router-31a-band-engine.js + common/369v-router-31-inlay-handling.js + common/369v1-router-31b-inlay-handling-picker.js + common/369u1-router-30a-human-check-late.js (comments left out); do not edit by hand */
(function(){if(document.getElementById("nbRiLateCss"))return;var s=document.createElement('style');s.id="nbRiLateCss";s.textContent="html #acc-body-summary.nb-rd>.v2-upsell-banner{border:0;border-radius:12px;padding:12px 14px;font-size:15px;align-items:flex-start}\nhtml #acc-body-summary.nb-rd .nb-rd-price .summary-section{margin:0;padding:0;border:0;background:none;display:grid;gap:6px}\nhtml #acc-body-summary.nb-rd .summary-total{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px 8px;margin:0;padding:0;border:0;background:none;box-shadow:none}\nhtml #acc-body-summary.nb-rd :is(.summary-total .label,.nb-range-main>.nb-k){font-size:13px;font-weight:600;letter-spacing:.02em;color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd :is(.summary-total .price,.nb-range-v){font-family:inherit;font-size:24px;line-height:1.2;font-weight:600;letter-spacing:-.01em;color:var(--nb-ink);font-variant-numeric:tabular-nums}\nhtml #acc-body-summary.nb-rd .nb-rd-busy{font-size:15px;color:var(--nb-muted)}\n.nb-rd-price:not([aria-busy=\"true\"])>.nb-rd-spin{display:none}\n.nb-rd-spin,.nb-rd-busy::before{content:\"\";display:inline-block;width:12px;height:12px;margin-right:6px;vertical-align:-1px;border-radius:50%;border:2px solid var(--nb-line2);border-top-color:var(--nb-accent);animation:nb-spin .9s linear infinite}\nhtml #acc-body-summary.nb-rd .nb-range{margin:0;padding:0;border:0;background:none;box-shadow:none;display:grid;gap:6px}\nhtml #acc-body-summary.nb-rd .nb-range-main{display:grid;gap:1px}\nhtml #acc-body-summary.nb-rd .nb-range:has(.nb-groups){border:1px solid var(--nb-line);border-radius:var(--nb-r-md);padding:10px 14px}\nhtml #acc-body-summary.nb-rd .nb-groups>.nb-k{font-size:13px;font-weight:600;color:var(--nb-ink2)}\nhtml #acc-body-summary.nb-rd .nb-range.nb-nudge{border-color:var(--nb-err);box-shadow:0 0 0 1px var(--nb-err)}\nhtml #acc-body-summary.nb-rd .nb-range.nb-nudge .nb-groups>.nb-k{color:var(--nb-err)}\nhtml #acc-body-summary.nb-rd .nb-range-n{font-size:12px;color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd .nb-groups+.nb-range-main{border-top:1px solid var(--nb-line);margin:0;padding-top:8px}\nhtml #acc-body-summary.nb-rd .nb-group-row{grid-template-columns:repeat(auto-fit,minmax(118px,1fr))}\nhtml #acc-body-summary.nb-rd .nb-group{white-space:nowrap;min-height:46px;border:1.5px solid var(--nb-line2);border-radius:var(--nb-r-sm);background:var(--nb-card);color:var(--nb-ink);font-size:13px;font-weight:600}\nhtml #acc-body-summary.nb-rd .nb-group[aria-pressed=\"true\"]{border-color:var(--nb-accent);background:var(--nb-sel);box-shadow:inset 0 0 0 1px var(--nb-accent)}\nhtml #acc-body-summary.nb-rd :is(#staffBreakdownBox:not(:empty),.nb-cust-sees){border:1px dashed var(--nb-line2);border-radius:var(--nb-r-sm);background:var(--nb-soft);padding:8px 12px;margin:0}\nhtml #acc-body-summary.nb-rd #staffBreakdownBox .summary-row{font-size:13px;padding:3px 0}\nhtml #acc-body-summary.nb-rd #staffBreakdownBox h4{margin:0 0 4px;padding:0;border:0;font-family:inherit;font-size:13px;font-weight:600;color:var(--nb-ink2)}\nhtml #acc-body-summary.nb-rd .nb-cs-v{color:var(--nb-ink);font-size:14px}\n.nb-rd-tag{padding:2px 8px;border-radius:999px;background:var(--nb-sel);color:var(--nb-accent);font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}\nhtml #acc-body-summary.nb-rd :is(.form-row input[type=text],.form-row input[type=email],textarea,.engraving-input,select):focus,:is(body.nb-pc,body.nb-easy) .exit-modal input:focus{outline:2px solid var(--nb-accent);outline-offset:2px;border-color:var(--nb-accent)}\nhtml #acc-body-summary.nb-rd :is(input,textarea)::placeholder,:is(body.nb-pc,body.nb-easy) .exit-modal input::placeholder{color:var(--nb-muted);opacity:1}\nhtml #acc-body-summary.nb-rd .nb-rd-ok input{padding-right:40px;background:var(--nb-card) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Ccircle cx='11' cy='11' r='11' fill='%233d7d55'/%3E%3Cpath d='M6.5 11.5l3 3 6-6' fill='none' stroke='%23fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") no-repeat right 10px center/22px}\nhtml #acc-body-summary.nb-rd .nb-rd-err{color:var(--nb-err) !important;font-size:13px !important;font-weight:600}\nhtml #acc-body-summary.nb-rd .nb-rd-wait{padding:8px 10px !important;border-radius:10px;background:var(--nb-warn-bg);color:var(--nb-warn) !important}\nhtml #acc-body-summary.nb-rd .nb-rd-fail{padding:10px 12px !important;border:1px solid currentColor;border-radius:12px;background:var(--nb-err-bg);color:var(--nb-err) !important;font-size:14px !important;font-weight:600}\nhtml #acc-body-summary.nb-rd .nb-next::before{content:\"\";display:inline-block;width:16px;height:16px;margin-right:6px;vertical-align:-3px;background:currentColor;-webkit-mask:var(--nb-rd-lock) center/16px no-repeat;mask:var(--nb-rd-lock) center/16px no-repeat}\n#acc-body-summary.nb-rd{--nb-rd-lock:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round'%3E%3Crect x='5' y='11' width='14' height='9' rx='2'/%3E%3Cpath d='M8 11V8a4 4 0 0 1 8 0v3'/%3E%3C/svg%3E\")}\nhtml #acc-body-summary.nb-rd .nb-receipt-row .nb-k{font-size:12px;color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd .nb-receipt-row .nb-t{font-size:15px;font-weight:600;color:var(--nb-ink)}\nhtml #acc-body-summary.nb-rd .nb-receipt-row .nb-t.nb-unk{color:var(--nb-warn)}\nhtml #acc-body-summary.nb-rd .nb-edit{min-width:60px;min-height:44px;color:var(--nb-accent);font-size:14px;font-weight:600}\nhtml #acc-body-summary.nb-rd .nb-sb-card{display:grid;gap:10px;margin:0;padding:14px;border:1px solid var(--nb-line);border-radius:var(--nb-r-md);background:var(--nb-card);color:var(--nb-ink)}\nhtml #acc-body-summary.nb-rd .nb-sb-title{margin:0;font-size:17px;line-height:1.3;font-weight:600}\nhtml #acc-body-summary.nb-rd :is(.nb-sb-card,.nb-rd-mini) .nb-sb-details{display:grid;gap:6px;margin:0}\nhtml #acc-body-summary.nb-rd .nb-sb-row{display:flex;justify-content:space-between;gap:12px;font-size:14px;line-height:1.4}\nhtml #acc-body-summary.nb-rd .nb-sb-row dt{color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd .nb-sb-row dd{margin:0;text-align:right;font-weight:600;overflow-wrap:anywhere}\nhtml #acc-body-summary.nb-rd .nb-sb-change{width:100%;min-height:44px;border:1.5px solid var(--nb-line2);border-radius:12px;background:transparent;color:var(--nb-ink);font-size:14px;font-weight:600}\nhtml #acc-body-summary.nb-rd .nb-sb-unavail{margin:0;padding:10px 12px;border:1px solid currentColor;border-radius:12px;background:var(--nb-err-bg);color:var(--nb-err);font-size:14px;font-weight:600}\nhtml #acc-body-summary.nb-rd details.nb-details{margin:0;border:1px solid var(--nb-line);border-radius:12px;background:var(--nb-card)}\nhtml #acc-body-summary.nb-rd details.nb-details>summary{min-height:52px;justify-content:flex-start;gap:10px;padding:0 14px;font-size:15px;font-weight:600;color:var(--nb-ink)}\nhtml #acc-body-summary.nb-rd details.nb-details>summary::before{display:grid;place-items:center;width:28px;height:28px;flex:none;border-radius:8px;background:var(--nb-soft);color:var(--nb-muted);font-size:16px;font-weight:400}\nhtml #acc-body-summary.nb-rd details.nb-details>summary::after{margin-left:2px;font-size:22px;color:var(--nb-muted)}\n.nb-sum-t{flex:1;min-width:0}\n.nb-rd-sv{max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:600;color:var(--nb-ok)}\n.nb-rd-sv:empty{display:none}\n.nb-rd details.nb-eng>summary::before{content:\"\\270E\"}\n.nb-rd details.nb-opt>summary::before{content:\"\\2709\"}\n.nb-rd details.nb-all>summary::before{content:\"\\2630\"}\nhtml #acc-body-summary.nb-rd details.nb-details>.nb-inner{display:grid;gap:10px;padding:2px 14px 14px}\nhtml #acc-body-summary.nb-rd details.nb-rd-wood>summary{display:none}\nhtml #acc-body-summary.nb-rd details.nb-rd-wood{border:0;background:none}\nhtml #acc-body-summary.nb-rd details.nb-rd-wood>.nb-inner{padding:0}\nhtml #acc-body-summary.nb-rd .eng-wood-note{margin:0 !important;padding:10px 12px;border-radius:12px;background:var(--nb-soft);color:var(--nb-ink2) !important;font-size:14px !important}\nhtml #acc-body-summary.nb-rd .nb-inner .summary-section{margin:0;padding:0;border:0;background:none;display:grid;gap:8px}\nhtml #acc-body-summary.nb-rd .engraving-preview{min-height:64px;display:grid;place-items:center;padding:10px;border:0;border-radius:12px;background:linear-gradient(180deg,#d9dde3,#aeb4bd 55%,#c9ced5);box-shadow:inset 0 2px 6px rgba(0,0,0,.25);color:#2b2f36;font-size:22px;text-align:center;overflow-wrap:anywhere}\nhtml #acc-body-summary.nb-rd .eng-font-wrap{display:grid;gap:4px;margin:0}\nhtml #acc-body-summary.nb-rd :is(.nb-eng .summary-section>div>span,.nb-eng .summary-section>p,#shopPayNote .sp-note){font-size:12.5px !important;color:var(--nb-muted) !important}\nhtml #acc-body-summary.nb-rd :is(.nb-inner,.nb-rd-mini) a{color:var(--nb-accent) !important}\nhtml #acc-body-summary.nb-rd .nb-inner .summary-section>h4{margin:6px 0 4px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd .nb-inner .summary-row{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid var(--nb-line);font-size:14px}\nhtml #acc-body-summary.nb-rd .nb-inner .summary-row .label{color:var(--nb-muted)}\nhtml #acc-body-summary.nb-rd .nb-inner .summary-row .value{font-weight:600;color:var(--nb-ink);text-align:right}\nhtml #acc-body-summary.nb-rd .nb-inner>p{font-size:13px !important;color:var(--nb-muted) !important;text-align:center;margin:0 !important}\nhtml #acc-body-summary.nb-rd #quoteBudgetBox{display:grid;gap:8px;margin:0 !important;padding:12px 14px !important;border:2px solid #d4a017 !important;border-radius:12px !important;background:var(--nb-pp-bg) !important}\nhtml #acc-body-summary.nb-rd #quoteBudgetBox>:is(label,div:not([id])){color:var(--nb-pp-ink) !important;margin:0 !important}\nhtml #acc-body-summary.nb-rd #quoteBudgetBox .pp-row{min-height:48px !important;background:var(--nb-card) !important;border-color:var(--nb-pp-line) !important;color:var(--nb-ink) !important;box-shadow:none !important}\nhtml #acc-body-summary.nb-rd #quoteBudgetBox .pp-row:has(input:checked){border-color:#d4a017 !important;box-shadow:0 0 0 2px rgba(212,160,23,.25) !important}\nhtml #acc-body-summary.nb-rd #shopPayNote{margin:0 !important;border-color:var(--nb-pp-line) !important;background:var(--nb-card) !important;color:var(--nb-ink)}\nhtml #acc-body-summary.nb-rd .nb-rd-share{margin:0 !important;display:flex;justify-content:center}\nhtml #acc-body-summary.nb-rd .nb-rd-share .btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 16px;border:1.5px solid var(--nb-line2);border-radius:12px;background:var(--nb-card);color:var(--nb-ink);font-family:inherit;font-size:14px;font-weight:600;letter-spacing:0;text-transform:none}\nhtml #acc-body-summary.nb-rd .nb-rd-share .btn-outline::before{content:\"\";width:18px;height:18px;background:currentColor;-webkit-mask:var(--nb-rd-link) center/18px no-repeat;mask:var(--nb-rd-link) center/18px no-repeat}\n#acc-body-summary.nb-rd{--nb-rd-link:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1'/%3E%3C/svg%3E\")}\nhtml #acc-body-summary.nb-rd .email-form.nb-rd-sent>:not(.nb-rd-done,#nbRdNone):not(#nbRdNone2){display:none !important}\nbody.nb-rd-sent #acc-body-summary.nb-rd>:is(.nb-rd-lbl,.nb-receipt,.nb-sb-card,details){display:none}\n@media (prefers-reduced-motion:reduce){.nb-rd-check{animation:none}.nb-rd-busy::before{animation-duration:2.4s}}\n:is(body.nb-pc,body.nb-easy) .exit-modal{padding:22px 18px;border:1px solid var(--nb-line);border-radius:18px;background:var(--nb-card);color:var(--nb-ink);box-shadow:var(--nb-shadow);text-align:left}\n:is(body.nb-pc,body.nb-easy) .exit-modal h3{font-family:inherit;font-size:20px;font-weight:600;color:var(--nb-ink)}\n:is(body.nb-pc,body.nb-easy) .exit-modal p{font-size:14px;color:var(--nb-ink2)}\n:is(body.nb-pc,body.nb-easy) .exit-modal input{min-height:48px;padding:10px 12px;border:1.5px solid var(--nb-line2);border-radius:12px;background:var(--nb-card);color:var(--nb-ink)}\n:is(body.nb-pc,body.nb-easy) .exit-modal .exit-err{color:var(--nb-err);font-size:13px;font-weight:600}\n:is(body.nb-pc,body.nb-easy) .exit-modal .exit-btns{flex-wrap:wrap}\n:is(body.nb-pc,body.nb-easy) .exit-modal .exit-btns button{flex:1 1 140px;min-height:48px;border-radius:12px;font-size:15px;font-weight:600}\n:is(body.nb-pc,body.nb-easy) .exit-modal .btn-exit-submit{background:var(--nb-accent);color:var(--nb-on-accent);box-shadow:none}\n:is(body.nb-pc,body.nb-easy) .exit-modal .btn-exit-skip{background:var(--nb-card);border:1.5px solid var(--nb-line2) !important;color:var(--nb-ink)}\nhtml #acc-body-summary.nb-rd .nb-rd-hero .nb-pn{margin:0;font-size:14px;line-height:1.45;color:var(--nb-info)}\n.nb-easy #controlsCol{overflow-anchor:none}\n#controlsCol .nb-x{display:none!important}\n#controlsCol .nb-rw{display:flex;align-items:center;gap:6px;margin:0 0 10px!important;padding:10px 0 4px;background:var(--nb-card)}\n#controlsCol .nb-rw-t{flex:1;font:var(--nb-w-bold) 15px/1.2 var(--font-body,inherit);color:var(--nb-ink)}\n#controlsCol .nb-rw input{width:62px!important;min-height:44px;border:1px solid var(--nb-line2)!important;border-radius:var(--nb-r-sm)!important;background:var(--nb-card)!important;color:var(--nb-ink)!important;font:var(--nb-w-bold) 16px var(--font-body,inherit)!important;text-align:center}\n#controlsCol .nb-rw>span:not(.nb-rw-t){color:var(--nb-muted);font-size:13px}\n#controlsCol .nb-ib{width:44px;height:44px;flex:0 0 44px;display:grid;place-items:center;padding:0;border-radius:var(--nb-r-sm);border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink);font:var(--nb-w-bold) 20px/1 var(--font-body,inherit);cursor:pointer}\n#controlsCol :is(.nb-ib,.nb-btn):disabled{opacity:.45;cursor:default}\n#controlsCol :is(.nb-ib,.nb-btn,.nb-gap):focus-visible{outline:2px solid var(--nb-accent);outline-offset:2px}\n#controlsCol .nb-band{display:flex;flex-wrap:nowrap;gap:0;padding:0;margin:0 0 4px;min-height:0;background:var(--nb-card);border:0;border-radius:0;box-shadow:none;overflow:visible}\n#controlsCol .nb-band>:is(.strip-block,.nb-free){width:auto!important;min-width:min(44px,calc(100%/var(--n,1)))!important;height:86px;min-height:0;margin:0;padding:0!important;border:0!important;border-radius:0!important;opacity:1;box-shadow:inset 1px 0 0 rgba(0,0,0,.3)!important;transform:none!important;outline-offset:-3px}\n#controlsCol .nb-band>:first-child{border-radius:12px 0 0 12px!important;box-shadow:none!important}\n#controlsCol .nb-band>:is(.nb-free,.nb-last){border-radius:0 12px 12px 0!important}\n#controlsCol .nb-band>.nb-last:first-child{border-radius:12px!important}\n#controlsCol .nb-band>.nb-free{opacity:.5!important;border:2px dashed var(--nb-ink2)!important;border-left:0!important}\n#controlsCol .nb-band>*>div,#controlsCol .nb-band .v2-grip,#controlsCol .nb-band .s-remove{display:none!important}\n#controlsCol .nb-band>.nb-qch{display:grid!important;place-items:center;background:repeating-linear-gradient(45deg,var(--nb-soft) 0 6px,var(--nb-soft2) 6px 12px)!important}\n#controlsCol .nb-band>.nb-qch>.s-name{display:block!important;visibility:visible!important;writing-mode:initial;max-height:none;font:600 20px/1 var(--font-body,inherit);color:var(--nb-accent)}\n#controlsCol .nb-band>.active-selected{outline:3px solid var(--nb-accent);z-index:1}\n#controlsCol .nb-band>.active-selected::after{content:\"\";position:absolute;left:50%;bottom:-1px;margin-left:-7px;border:7px solid transparent;border-bottom-color:var(--nb-card)}\n#controlsCol .nb-band>:focus-visible{outline:3px solid var(--nb-accent);z-index:2}\n#controlsCol .nb-band>.active-selected .s-remove{display:flex!important;align-items:center;justify-content:center;top:2px;right:2px;width:40px;height:40px;font-size:16px;z-index:2;border:0;box-shadow:none;color:var(--nb-card);background:radial-gradient(circle,var(--nb-err) 0 13px,transparent 13.5px)!important}\n#controlsCol .nb-plain{min-height:86px;background:var(--nb-base,var(--nb-soft2));border-radius:12px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.25)}\n#controlsCol .nb-blab{display:flex;padding-top:4px;font:var(--nb-w-bold) 12px/1.3 var(--font-body,inherit);color:var(--nb-ink2);font-variant-numeric:tabular-nums}\n#controlsCol .nb-blab span{min-width:min(44px,calc(100%/var(--n,1)));text-align:center;white-space:nowrap}\n#controlsCol .nb-blab-f{color:var(--nb-muted)}\n#controlsCol .nb-gaps{position:relative;height:48px}\n#controlsCol .nb-gap{position:absolute;top:2px;width:44px;height:44px;margin-left:-22px;display:grid;place-items:center;padding:0;border-radius:50%;border:2px solid var(--nb-accent);background:var(--nb-card);color:var(--nb-accent);font:600 22px/1 var(--font-body,inherit);box-shadow:var(--nb-shadow);cursor:pointer}\n#controlsCol .nb-gap::before{content:\"+\"}\n#controlsCol .nb-solo{width:auto;margin:0;transform:translateX(-50%);border-radius:999px;padding:0 16px;display:inline-flex;gap:6px;font-size:14px;white-space:nowrap}\n#controlsCol .nb-iu{margin:0 0 10px;font:14px/1.45 var(--font-body,inherit);color:var(--nb-ink);font-variant-numeric:tabular-nums}\n#controlsCol .nb-iu-t{font-weight:var(--nb-w-bold)}\n#controlsCol .nb-iu-ps{display:flex;flex-wrap:wrap;align-items:center;column-gap:6px;row-gap:2px;margin-top:2px;color:var(--nb-ink2)}\n#controlsCol .nb-iu-p{display:inline-flex;align-items:center;white-space:nowrap;max-width:100%}\n#controlsCol .nb-iu-p:not(:last-child)::after{content:\"\\00B7\";margin-left:6px;color:var(--nb-muted)}\n#controlsCol .nb-iu-p i{flex:0 0 auto;width:10px;height:10px;border-radius:3px;margin-right:5px;background:var(--nb-soft2);box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}\n#controlsCol .nb-iu-p b{font-weight:var(--nb-w-bold);color:var(--nb-ink)}\n#controlsCol .nb-iu-f{color:var(--nb-muted)}\n#controlsCol .nb-iu-f i{background:transparent;box-shadow:none;border:1px dashed var(--nb-muted)}\n#controlsCol .nb-tools{gap:8px;margin:0 0 12px}\n#controlsCol .nb-tools .btn{min-height:44px;padding:0 16px;border-radius:var(--nb-r-btn);border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink);font:var(--nb-w-bold) 14px var(--font-body,inherit);box-shadow:none;display:inline-flex;align-items:center;gap:6px}\n#controlsCol .nb-tools .btn-gold{background:var(--nb-accent);border-color:var(--nb-accent);color:var(--nb-on-accent)}\n#controlsCol .nb-tools .btn svg{width:16px;height:16px}\n#controlsCol .nb-tools~.validation-msg{display:flex;gap:8px;margin:0 0 10px;padding:9px 11px;border:0;border-radius:var(--nb-r-sm);font:400 13.5px/1.45 var(--font-body,inherit);background:var(--nb-soft);color:var(--nb-ink2)}\n#controlsCol .nb-tools~.validation-msg.error{background:var(--nb-err-bg);color:var(--nb-err)}\n#controlsCol .nb-tools~#v2-edge-note{margin:0 0 10px!important;border:0!important;border-radius:var(--nb-r-sm)!important;background:var(--nb-warn-bg)!important;color:var(--nb-warn)!important;font-size:13.5px!important}\n#controlsCol .nb-ed{display:grid;gap:12px;margin:0 0 12px;padding:14px;border:2px solid var(--nb-accent);border-radius:var(--nb-r-lg);background:var(--nb-card);color:var(--nb-ink)}\n#controlsCol .nb-ed-h{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:center}\n#controlsCol .nb-sw{width:34px;height:44px;border-radius:7px;background:var(--nb-soft2);box-shadow:inset 0 0 0 1px rgba(0,0,0,.22)}\n#controlsCol .nb-ed-h b{display:block;font-size:17px;line-height:1.2;font-weight:var(--nb-w-bold);overflow-wrap:anywhere}\n#controlsCol .nb-ed-h small{font-size:12.5px;color:var(--nb-muted)}\n#controlsCol .nb-step{display:grid;grid-template-columns:52px 1fr 52px;gap:8px;align-items:center}\n#controlsCol .nb-step .nb-ib{width:52px;height:52px;font-size:24px}\n#controlsCol .nb-num{display:flex;align-items:center;justify-content:center;gap:3px;min-height:52px;border:1px solid var(--nb-line2);border-radius:var(--nb-r-sm);background:var(--nb-card)}\n#controlsCol .nb-num:focus-within{border-color:var(--nb-accent)}\n#controlsCol .nb-num input{height:44px;width:70px;border:0;background:none;color:var(--nb-ink);font:var(--nb-w-bold) 22px var(--font-body,inherit);text-align:right;outline:0}\n#controlsCol .nb-num span{font-size:13px;color:var(--nb-ink2)}\n#controlsCol .nb-acts{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n#controlsCol .nb-acts .nb-btn{padding:0 10px;font-size:14px}\n#controlsCol .nb-bad{color:var(--nb-err)}\n#controlsCol .nb-mvl::before{content:\"« \"}\n#controlsCol .nb-mvr::after{content:\" »\"}\n#controlsCol .nb-sll::before{content:\"◀ \"}\n#controlsCol .nb-slr::after{content:\" ▶\"}\n#controlsCol .nb-tap{display:grid;gap:4px;margin:0 0 12px;padding:14px;border:1.5px dashed var(--nb-line2);border-radius:var(--nb-r-lg);text-align:center;font-size:14px;line-height:1.45;color:var(--nb-ink2)}\n#controlsCol .nb-tap b{color:var(--nb-ink);font-weight:var(--nb-w-bold)}\n#controlsCol .nb-tap :is(p,.nb-emp){margin:4px 0 0!important;font-size:13px!important;color:var(--nb-muted)!important;text-align:center!important}\n#controlsCol .nb-tap~.staff-item-prices,#controlsCol .nb-ed~.staff-item-prices{border:1px solid var(--nb-line);border-radius:var(--nb-r-md);background:var(--nb-soft);color:var(--nb-ink2)}\n.nb-easy #controlsCol .v2-strip-rows{gap:8px}\n.nb-easy #controlsCol .v2-strip-row{display:flex!important;flex-wrap:wrap;align-items:center;gap:6px 8px;padding:8px 10px!important;border:1.5px solid var(--nb-line);border-radius:var(--nb-r-md);background:var(--nb-card);box-shadow:none}\n.nb-easy #controlsCol .v2-strip-row:is(.nb-row-e,.v2-row-ghost){background:var(--nb-soft)}\n.nb-easy #controlsCol .v2-strip-row.v2-row-selected{border-color:var(--nb-accent);background:var(--nb-sel)}\n.nb-easy #controlsCol .v2-row-dot{order:1;width:26px;height:44px;border-radius:6px;border:0;box-shadow:inset 0 0 0 1px rgba(0,0,0,.22)}\n.nb-easy #controlsCol .v2-row-name{order:2;flex:1 1 calc(100% - 140px);min-height:44px;display:flex!important;flex-direction:column;justify-content:center;align-items:flex-start;white-space:normal;overflow-wrap:anywhere;font:var(--nb-w-bold) 14.5px/1.25 var(--font-body,inherit)!important;color:var(--nb-ink)}\n.nb-easy #controlsCol .v2-row-min{margin:0;font-size:12px!important;font-weight:400;color:var(--nb-muted)}\n.nb-easy #controlsCol .v2-row-name[data-nb-role]::after{content:attr(data-nb-role);font-size:12px;font-weight:400;color:var(--nb-muted)}\n.nb-easy #controlsCol .v2-row-btn{min-width:44px;width:44px;height:44px;border-radius:var(--nb-r-sm);border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink)}\n.nb-easy #controlsCol .v2-strip-row .nb-w{height:44px;border-color:var(--nb-line2);color:var(--nb-ink);background:var(--nb-card)}\n.nb-easy #controlsCol .nb-row-remove{color:var(--nb-err);border-color:var(--nb-line2)}\n@media(min-width:900px){\n  #controlsCol>.nb-band{position:sticky;top:var(--nb-hdr,0px);z-index:3;box-shadow:0 0 0 4px var(--nb-card)}\n}\n.nb-easy #controlsCol .v2-strip-row .nb-w-u{color:var(--nb-ink2)}\n.nb-easy #controlsCol .nb-row-remove{min-height:44px}\n.nb-easy #controlsCol>.panel-title{font:600 22px/1.25 var(--font-body,inherit);letter-spacing:-.01em;color:var(--nb-ink);margin:0 0 4px}\n.nb-easy #controlsCol>.panel-desc{font-size:14px;line-height:1.5;color:var(--nb-ink2);margin:0 0 14px}\n.nb-d5o{--gold:var(--nb-accent);--gold-light:var(--nb-accent2);--gold-dim:var(--nb-accent);--gold-grad:var(--nb-accent);--gold-wash:var(--nb-sel);--gold-ring:var(--nb-line2);--bg:var(--nb-bg);--bg2:var(--nb-card);--bg3:var(--nb-soft);--bg4:var(--nb-soft2);--text:var(--nb-ink);--text-dim:var(--nb-ink2);--text-muted:var(--nb-muted);--border:var(--nb-line);--border-light:var(--nb-line2);--input-bg:var(--nb-card);--swatch-border:var(--nb-line2);--done-dot-text:var(--nb-on-accent);color:var(--nb-ink);padding:0!important;align-items:flex-end!important;background:rgba(16,19,26,.55)!important}\n.nb-d5o .v2-modal-frame{max-width:none!important;width:100%;animation:nb-up .22s ease-out}\n@keyframes nb-up{from{transform:translateY(48px);opacity:.3}}\n.nb-d5{display:flex!important;flex-direction:column;width:100%;max-width:none!important;height:96vh;height:96dvh;max-height:none!important;overflow:hidden!important;padding:16px 16px max(12px,env(safe-area-inset-bottom))!important;border:0!important;border-radius:18px 18px 0 0!important;background:var(--nb-card)!important;color:var(--nb-ink)}\n.nb-d5>*{flex:0 0 auto;margin-top:0!important}\n.nb-d5>h3{margin:0 48px 10px 0!important;font:var(--nb-w-bold) 19px/1.25 var(--font-body,inherit)!important;color:var(--nb-ink)}\n.nb-d5o .v2-modal-x{top:10px!important;right:10px!important;width:44px!important;height:44px!important;border-radius:50%;border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink);z-index:3}\n.nb-d5>div:first-of-type:not(.nb-live){font-size:13px;color:var(--nb-muted);margin-bottom:8px!important}\n.nb-live{display:grid;gap:6px;margin:0 0 10px;padding:10px 12px;border-radius:var(--nb-r-md);background:var(--nb-soft)}\n.nb-cap{display:flex;justify-content:space-between;gap:10px;font-size:13px;color:var(--nb-muted)}\n.nb-cap b{color:var(--nb-ink);font-weight:var(--nb-w-bold);overflow-wrap:anywhere}\n.nb-cap span{white-space:nowrap}\n.nb-lband{display:flex;height:34px;border-radius:8px;overflow:hidden;background:var(--nb-card);box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}\n.nb-lband i{position:relative;min-width:3px;box-shadow:inset 1px 0 0 rgba(0,0,0,.25)}\n.nb-lband .nb-new{box-shadow:inset 0 0 0 3px var(--nb-accent)}\n.nb-lband .nb-gh{background:var(--nb-card);box-shadow:none;outline:2px dashed var(--nb-accent);outline-offset:-3px}\n.nb-lband .nb-auto::after{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.55) 0 3px,transparent 3px 6px)}\n.nb-lband .nb-fr,.nb-k-fr::before{background:repeating-linear-gradient(45deg,var(--nb-soft2) 0 4px,var(--nb-card) 4px 8px)}\n.nb-key{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:12px;color:var(--nb-muted)}\n.nb-key span::before{content:\"\";position:relative;display:inline-block;width:11px;height:11px;margin-right:5px;vertical-align:-1px;border-radius:3px;background:var(--nb-soft2);box-shadow:inset 0 0 0 1px var(--nb-line2)}\n.nb-k-new::before{box-shadow:inset 0 0 0 2px var(--nb-accent)!important;background:none!important}\n.nb-k-auto::before{background:repeating-linear-gradient(45deg,var(--nb-muted) 0 2px,var(--nb-soft2) 2px 4px)!important}\n.nb-live .validation-msg{margin:0!important;padding:0;border:0;background:none;color:var(--nb-dok);font-size:13px;line-height:1.4}\n.nb-d5>label:has(+.nb-gs){display:none!important}\n.nb-gs>.mat-groups.nb-sg{display:block;position:relative;margin:0 0 8px!important}\n.nb-gs>.mat-groups.nb-sg>.mat-group-btn{display:none}\n.nb-d5 .nb-sg-btn{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:46px;padding:0 18px;border-radius:999px;border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink);font:500 15px/1.2 var(--font-body,inherit);text-align:left;cursor:pointer}\n.nb-d5 .nb-sg-btn::after{content:\"\";width:8px;height:8px;margin:-4px 2px 0 12px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg)}\n.nb-d5 .nb-sg-btn[aria-expanded=true]::after{margin-top:4px;transform:rotate(225deg)}\n.nb-d5 .nb-sg-list{position:absolute;left:0;right:0;top:calc(100% + 4px);z-index:5;max-height:330px;overflow-y:auto;overscroll-behavior:contain;padding:4px 0;border:1px solid var(--nb-line2);border-radius:var(--nb-r-md);background:var(--nb-card);box-shadow:0 10px 28px rgba(0,0,0,.22)}\n.nb-d5 .nb-sg-row{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:44px;padding:4px 18px;border:0;background:var(--nb-card);color:var(--nb-ink);font:400 15px/1.25 var(--font-body,inherit);text-align:left;cursor:pointer}\n.nb-d5 .nb-sg-row::after{content:attr(data-nb-n);font-size:13px;color:var(--nb-muted)}\n.nb-d5 .nb-sg-on{background:var(--nb-sel);box-shadow:inset 3px 0 0 var(--nb-accent);font-weight:var(--nb-w-bold)}\n.nb-d5 :is(.nb-sg-btn,.nb-sg-row,.mat-card,.nb-clr):focus-visible{outline:2px solid var(--nb-accent);outline-offset:-2px}\n.nb-gs>.mat-search{min-height:48px;margin:0 0 8px!important;padding:0 44px 0 16px;border:1px solid var(--nb-line2);border-radius:var(--nb-r-btn);background:var(--nb-card);color:var(--nb-ink);font-size:16px}\n.nb-gs>.mat-search::placeholder{color:var(--nb-muted);opacity:1}\n.nb-clr{position:absolute;right:2px;bottom:2px;width:44px;height:44px;margin:0!important;border:0;border-radius:50%;background:none;color:var(--nb-muted);font-size:20px;cursor:pointer;z-index:1}\n.nb-d5>.mat-grid{flex:1 1 0;min-height:128px;max-height:none!important;overflow-y:auto;overscroll-behavior:contain;display:grid;grid-template-columns:minmax(0,1fr);grid-auto-rows:max-content;align-content:start;gap:6px;padding:2px 2px 8px}\n.nb-d5 .mat-card{display:grid;grid-template-columns:42px minmax(0,1fr) auto;column-gap:12px;align-items:center;min-height:54px;padding:6px 12px 6px 6px;border:1px solid var(--nb-line);border-radius:var(--nb-r-sm);background:var(--nb-card);box-shadow:none;transform:none!important}\n.nb-d5 .mat-card>.swatch{grid-row:1/3;width:42px;height:42px;border-radius:var(--nb-r-sm);background-size:cover}\n.nb-d5 .mat-card>.name{grid-column:2;align-self:end;font:var(--nb-w-bold) 15px/1.3 var(--font-body,inherit);color:var(--nb-ink);overflow-wrap:anywhere}\n.nb-d5 .mat-card .nb-mat-n,.nb-d5 .mat-card .nb-mat-s{display:block}\n.nb-d5 .mat-card .nb-mat-s{font-size:12px;font-weight:400;color:var(--nb-warn)}\n.nb-d5 .mat-card[data-nb-sub]:not(:has(.nb-mat-s))::before{content:attr(data-nb-sub);grid-column:2;grid-row:2;align-self:start;font-size:12px;color:var(--nb-muted)}\n.nb-d5 .mat-card>:not(.swatch):not(.name){grid-column:2}\n.nb-d5 .mat-card.selected{border-color:var(--nb-accent);background:var(--nb-sel);box-shadow:inset 0 0 0 1px var(--nb-accent)}\n.nb-d5 .mat-card.selected::after{position:static;grid-column:3;grid-row:1/3;width:24px;height:24px;background:var(--nb-accent);color:var(--nb-on-accent)}\n.nb-d5 .mat-card.disabled{opacity:1!important;background:var(--nb-soft);box-shadow:none}\n.nb-d5 .mat-card.disabled>.name{color:var(--nb-muted)}\n.nb-d5 .mat-card.disabled .swatch{filter:saturate(.35)}\n.nb-d5 .swatch-zoom-btn{right:-9px!important;bottom:-7px!important;width:22px!important;height:22px!important;pointer-events:none!important;min-width:0!important;min-height:0!important;border:0!important;border-radius:50%!important;background:radial-gradient(circle,var(--nb-card) 0 9.5px,var(--nb-line2) 9.5px 10.5px,transparent 11px)!important;color:var(--nb-ink)!important;font-size:12px!important;line-height:22px!important;box-shadow:none!important}\n.nb-d5 mark{background:var(--nb-sel);color:inherit;border-radius:3px}\n.nb-none{grid-column:1/-1;margin:16px 0;text-align:center;font-size:14px;color:var(--nb-muted)}\n.nb-d5>div:has(>a){margin:8px 0 0!important;font-size:13px!important;color:var(--nb-muted)!important}\n.nb-d5 a{color:var(--nb-accent)}\n.nb-d5>div:has(>.width-picker){margin:10px 0 0!important;padding-top:10px;border-top:1px solid var(--nb-line)}\n.nb-d5>div:has(>.width-picker)>label{font-size:12px!important;color:var(--nb-muted)!important;letter-spacing:.08em}\n.nb-wh{margin-left:6px;text-transform:none;letter-spacing:0;font-weight:400}\n.nb-d5 .width-picker{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px}\n.nb-d5 .width-picker input[type=number]{width:82px;min-height:48px;border:1px solid var(--nb-line2);border-radius:var(--nb-r-sm);background:var(--nb-card);color:var(--nb-ink);font-size:16px;font-weight:var(--nb-w-bold);text-align:center}\n.nb-d5 .width-picker span{font-size:12px!important;color:var(--nb-muted)!important;margin:0!important}\n.nb-d5 .width-picker .nb-small{order:9;flex:1 0 40%}\n.nb-d5 .width-picker>span:nth-child(3){order:10}\n.nb-wsl{order:3;flex:1 1 120px;height:44px!important;padding:0!important;background:none!important;margin:0;-webkit-appearance:none;appearance:none;accent-color:var(--nb-accent);color:var(--nb-ink)}\n.nb-wsl::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:var(--nb-line2)}\n.nb-wsl::-moz-range-track{height:6px;border-radius:3px;background:var(--nb-line2)}\n.nb-wsl::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;margin-top:-9px;border-radius:50%;border:2px solid var(--nb-card);background:var(--nb-accent);box-shadow:var(--nb-shadow)}\n.nb-wsl::-moz-range-thumb{width:22px;height:22px;border-radius:50%;border:2px solid var(--nb-card);background:var(--nb-accent)}\n.nb-wsl:disabled::-webkit-slider-thumb{background:var(--nb-line2)}\n.nb-d5 .v2-width-note{margin:6px 0 0!important;padding:8px 10px;border-radius:var(--nb-r-sm);background:var(--nb-warn-bg);color:var(--nb-warn);font-size:13px}\n.nb-dst{margin:8px 0 0!important;font-size:13.5px;color:var(--nb-muted)}\n.nb-dst.nb-dok{color:var(--nb-dok);font-weight:var(--nb-w-bold)}\n.nb-dst.nb-dok::before{content:\"✓ \"}\n.nb-foot{display:flex;gap:8px;margin:10px 0 0!important}\n.nb-foot .btn{min-height:48px;border-radius:var(--nb-r-btn);font:var(--nb-w-bold) 15px var(--font-body,inherit)}\n.nb-foot .btn-outline{background:var(--nb-card);border:1px solid var(--nb-line2);color:var(--nb-ink)}\n.nb-foot .btn-gold{flex:1;background:var(--nb-accent);border:1px solid var(--nb-accent);color:var(--nb-on-accent)}\n.nb-foot .btn-gold:disabled{opacity:1;pointer-events:none;background:var(--nb-soft2);border-color:var(--nb-line2);color:var(--nb-muted);box-shadow:none}\n.nb-d5 .nb-flash{animation:nb-flash 1.2s ease-out 1}\n.nb-easy .swatch-lightbox .slb-box{background:var(--nb-card);border-radius:var(--nb-r-lg);padding:16px}\n.nb-easy .swatch-lightbox .slb-close{top:8px;right:8px;width:44px;height:44px;background:var(--nb-card);color:var(--nb-ink);border:1px solid var(--nb-line2);z-index:2}\n.nb-easy .swatch-lightbox .slb-name{font:var(--nb-w-bold) 15px var(--font-body,inherit);color:var(--nb-ink)}\n@media(min-width:900px){\n  .nb-d5o{align-items:center!important}\n  .nb-d5o .v2-modal-frame{width:min(940px,calc(100% - 64px))}\n  .nb-d5{height:calc(100vh - 64px);border-radius:18px!important;padding:20px 24px 18px!important}\n  .nb-d5>.mat-grid{grid-template-columns:1fr 1fr}\n}\n@media(max-height:760px){\n  .nb-key{display:none}\n  .nb-live{gap:4px;padding:8px 10px;margin-bottom:8px}\n  .nb-lband{height:24px}\n  .nb-d5>h3{margin-bottom:6px!important}\n  .nb-d5>.mat-grid{min-height:96px}\n  .nb-d5>div:has(>a){font-size:12px!important;margin-top:4px!important}\n  .nb-d5>div:has(>.width-picker){margin-top:6px!important;padding-top:6px}\n  .nb-dst{margin-top:4px!important}\n  .nb-gs>.mat-search,.nb-gs>.mat-groups.nb-sg{margin-bottom:4px!important}\n}\n@media(max-height:700px){\n  .nb-small,.nb-dst{display:none}\n  .nb-lband{height:20px}\n  .nb-cap{font-size:12px}\n  .nb-d5 .mat-card{min-height:48px;padding:3px 10px 3px 4px}\n  .nb-gs>.mat-search,.nb-d5 .nb-sg-btn{min-height:44px}\n  .nb-d5>.mat-grid{min-height:120px}\n}\n@media(prefers-reduced-motion:reduce){.nb-d5o .v2-modal-frame{animation:none}}\n.nb-gs{position:relative;display:grid;gap:8px;margin:0 0 8px}\n.nb-gs>*{margin:0!important}\n@media(min-width:900px){.nb-gs{grid-template-columns:1fr 1fr;align-items:start}}\n.nb-ruler{position:relative;height:16px;font-size:12px;line-height:16px;color:var(--nb-muted);font-variant-numeric:tabular-nums}\n.nb-ruler span{position:absolute;top:0;transform:translateX(-50%)}\n.nb-ruler span:first-child{transform:none}\n.nb-ruler .nb-ru-end{left:auto;right:0;transform:none;color:var(--nb-ink2)}\n@media(max-height:700px){.nb-ruler{display:none}}\n#acc-body-sleeve .nb-x{display:none!important}\n#acc-body-sleeve .nb-cap5{display:grid;gap:2px;margin:0 0 12px;padding:10px 12px;border-radius:var(--nb-r-md);background:var(--nb-soft);color:var(--nb-ink2);font-size:13px}\n#acc-body-sleeve .nb-cap5 p{margin:0}\n#acc-body-sleeve .nb-ne5{color:var(--nb-warn)}\n#acc-body-sleeve .nb-cap5 b{color:var(--nb-ink);font-size:15px;font-weight:var(--nb-w-bold)}\n#acc-body-sleeve :is(.nb-tag,.nb-opt){display:inline-block;margin-left:8px;padding:2px 8px;border-radius:999px;background:var(--nb-soft2);color:var(--nb-ink2);font:var(--nb-w-bold) 12px/1.4 var(--font-body,inherit);letter-spacing:.06em;text-transform:uppercase;vertical-align:middle}\n#acc-body-sleeve .nb-opt i{font-size:0}\n#acc-body-sleeve .nb-figs{display:none}\n#acc-body-sleeve .nb-sub{margin:0 0 12px;font-size:14px;color:var(--nb-ink2)}\n#acc-body-sleeve .nb-label{margin:0 0 6px}\n#acc-body-sleeve .nb-seg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;margin:0 0 10px;padding:4px;border-radius:var(--nb-r-md);background:var(--nb-soft)}\n#acc-body-sleeve .nb-sg5{min-height:44px;padding:4px 6px;border:0;border-radius:var(--nb-r-sm);background:none;color:var(--nb-ink);font:500 14px/1.15 var(--font-body,inherit);cursor:pointer}\n#acc-body-sleeve .nb-sg5[aria-pressed=true]{background:var(--nb-card);color:var(--nb-accent);font-weight:var(--nb-w-bold);box-shadow:var(--nb-shadow)}\n#acc-body-sleeve :is(.nb-sg5,.nb-chip,.mat-card,.nb-find):focus-visible{outline:2px solid var(--nb-accent);outline-offset:2px}\n#acc-body-sleeve .nb-help{margin:0 0 12px;font-size:14px;line-height:1.5;color:var(--nb-ink2)}\n#acc-body-sleeve .nb-trayh{display:grid;gap:8px;margin:0 0 8px}\n#acc-body-sleeve .nb-chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding:2px}\n#acc-body-sleeve .nb-chip{flex:0 0 auto;white-space:nowrap}\n#acc-body-sleeve .nb-find{min-height:48px;padding:0 14px;border:1px solid var(--nb-line2);border-radius:var(--nb-r-btn);background:var(--nb-card);color:var(--nb-ink);font-size:16px}\n#acc-body-sleeve .nb-count{margin:0;font-size:12px;color:var(--nb-muted)}\n#acc-body-sleeve .nb-tray{display:grid!important;grid-auto-flow:column;grid-auto-columns:76px;grid-template-columns:none!important;gap:6px;max-height:none!important;overflow-x:auto;overflow-y:hidden;padding:4px 2px 8px;scroll-snap-type:x proximity}\n#acc-body-sleeve .nb-tray .mat-card{display:flex;flex-direction:column;align-items:center;gap:4px;min-height:44px;padding:4px 2px;border:0;background:none;box-shadow:none;transform:none!important;text-align:center;scroll-snap-align:start}\n#acc-body-sleeve .nb-tray .swatch{width:52px;height:52px;border-radius:50%;background-size:cover;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}\n#acc-body-sleeve .nb-tray .name{font-size:12px;line-height:1.25;color:var(--nb-ink);overflow-wrap:anywhere}\n#acc-body-sleeve .nb-tray .mat-card.selected{background:none}\n#acc-body-sleeve .nb-tray .mat-card.selected .swatch{box-shadow:0 0 0 3px var(--nb-card),0 0 0 5px var(--nb-accent)}\n#acc-body-sleeve .nb-tray .mat-card.selected::after{top:0;right:8px}\n#acc-body-sleeve .nb-tray .mat-card[data-nb-ne]::before{content:attr(data-nb-ne);order:3;font-size:12px;line-height:1.2;color:var(--nb-warn)}\n#acc-body-sleeve .nb-tray .swatch-zoom-btn{right:-8px!important;bottom:-8px!important;width:28px!important;height:28px!important;pointer-events:none!important;min-width:0!important;min-height:0!important;border:0!important;border-radius:50%!important;background:radial-gradient(circle,var(--nb-card) 0 12px,var(--nb-line2) 12px 13px,transparent 13.5px)!important;color:var(--nb-ink)!important;font-size:13px!important;line-height:28px!important;box-shadow:none!important}\n#acc-body-sleeve :is(.nb-none5,.nb-note5):empty{display:none}\n#acc-body-sleeve :is(.nb-none5,.nb-note5){margin:0 0 10px;font-size:13px;color:var(--nb-muted)}\n#acc-body-sleeve .nb-note5::before{content:attr(data-tag);margin-right:6px;padding:1px 6px;border-radius:999px;background:var(--nb-warn-bg);color:var(--nb-warn);font-weight:var(--nb-w-bold);font-size:12px}\n#acc-body-sleeve .nb-warn5{margin:0 0 10px;padding:9px 11px;border-radius:var(--nb-r-sm);background:var(--nb-warn-bg);color:var(--nb-warn);font-size:13.5px}\n.nb-easy #acc-body-sleeve>.validation-msg,.nb-easy #acc-body-sleeve>.v2-precut-sleeve-note{margin:0 0 10px;padding:9px 11px;border:0;border-radius:var(--nb-r-sm);background:var(--nb-info-bg);color:var(--nb-info);font-size:13.5px}\n@media(min-width:900px){\n  #acc-body-sleeve .nb-cap5{position:sticky;top:var(--nb-hdr,0px);z-index:3;box-shadow:var(--nb-shadow)}\n  #acc-body-sleeve .nb-figs{display:grid;grid-template-columns:1.15fr 1fr;gap:8px;margin-bottom:6px}\n  #acc-body-sleeve .nb-figs svg{width:100%;height:auto;border-radius:var(--nb-r-sm);background:var(--nb-card)}\n  #acc-body-sleeve .nb-tray{grid-auto-flow:row;grid-template-columns:repeat(auto-fill,minmax(76px,1fr))!important;overflow:visible}\n  #acc-body-sleeve .nb-chips{flex-wrap:wrap}\n}\n.nb-easy #acc-body-sleeve>.panel-title{font:600 22px/1.25 var(--font-body,inherit);letter-spacing:-.01em;color:var(--nb-ink);margin:0 0 4px}\n.nb-easy #acc-body-sleeve>.panel-desc{font-size:14px;line-height:1.5;color:var(--nb-ink2);margin:0 0 8px}\n#controlsCol.nb-ih-on>:is(.composer-actions,.composer-strips,.remaining-width,.strip-arrows,.v2-strip-rows,.nb-tap,.nb-blab,.nb-gaps,.nb-iu,.nb-ed,.nb-ih-x){display:none!important}\n#controlsCol.nb-ih-on>.panel-desc{display:none!important}\n:is(#controlsCol,#addStripModalInner) .nb-ih{--nb-ih-gold:#b08d57}\n#controlsCol .nb-ih-b{font:var(--nb-w-bold) 16px/1.2 var(--font-body,inherit);min-height:44px;padding:0 16px;border-radius:var(--nb-r-btn,12px);border:1px solid var(--nb-line2);background:var(--nb-card);color:var(--nb-ink);cursor:pointer;box-shadow:none}\n#controlsCol .nb-ih-b:focus-visible{outline:2px solid var(--nb-accent);outline-offset:2px}\n#controlsCol .nb-ih-main{background:var(--nb-accent);border-color:var(--nb-accent);color:var(--nb-on-accent)}\n#controlsCol .nb-ih-b.nb-ih-dis{opacity:.45;cursor:default}\n#controlsCol .nb-ih-tools{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 4px}\n:is(#controlsCol,#addStripModalInner) .nb-ih-pin{background:var(--nb-ih-bg,var(--nb-bg))}\n:is(#controlsCol,#addStripModalInner) .nb-ih-wrap{position:relative;padding-top:28px}\n:is(#controlsCol,#addStripModalInner) .nb-ih-bar{position:relative;height:84px;border-radius:14px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}\n:is(#controlsCol,#addStripModalInner) .nb-ih-bar::after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(0,0,0,.25);pointer-events:none;z-index:3}\n:is(#controlsCol,#addStripModalInner) .nb-ih-ml{position:absolute;inset:0}\n:is(#controlsCol,#addStripModalInner) .nb-ih-mp,:is(#controlsCol,#addStripModalInner) .nb-ih-in{position:absolute;top:0;bottom:0}\n:is(#controlsCol,#addStripModalInner) .nb-ih-in{z-index:1;cursor:grab;transition:left .12s,width .12s;box-shadow:inset 1px 0 0 rgba(0,0,0,.25),inset -1px 0 0 rgba(0,0,0,.25)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-in.nb-ih-drag{transition:none;cursor:grabbing;z-index:2}\n:is(#controlsCol,#addStripModalInner) .nb-ih-in.nb-ih-sel{outline:3px solid var(--nb-ih-gold);outline-offset:-3px;z-index:2}\n:is(#controlsCol,#addStripModalInner) .nb-ih-in:focus{outline-color:var(--nb-ih-gold)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-in:focus-visible{outline:3px solid var(--nb-accent);outline-offset:-3px;z-index:2}\n:is(#controlsCol,#addStripModalInner) .nb-ih-q{display:grid;place-items:center;background:repeating-linear-gradient(45deg,var(--nb-soft) 0 6px,var(--nb-soft2) 6px 12px);color:var(--nb-accent);font:600 20px/1 var(--font-body,inherit)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-tip{position:absolute;top:0;background:var(--nb-ink);color:var(--nb-card);font:600 13px/1.4 var(--font-body,inherit);padding:3px 8px;border-radius:8px;white-space:nowrap;pointer-events:none;z-index:4}\n:is(#controlsCol,#addStripModalInner) .nb-ih-nums{position:relative;height:20px;margin-top:4px;font:var(--nb-w-bold) 14px/20px var(--font-body,inherit);color:var(--nb-muted);font-variant-numeric:tabular-nums}\n:is(#controlsCol,#addStripModalInner) .nb-ih-nums span{position:absolute;top:0;white-space:nowrap}\n:is(#controlsCol,#addStripModalInner) .nb-ih-ends{display:flex;justify-content:space-between;margin-top:2px;font-size:12.5px;line-height:1.4;color:var(--nb-muted)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-lay{display:flex;flex-wrap:wrap;align-items:center;column-gap:10px;row-gap:2px;margin-top:6px;font:15px/1.45 var(--font-body,inherit);color:var(--nb-ink2);font-variant-numeric:tabular-nums}\n:is(#controlsCol,#addStripModalInner) .nb-ih-pc{display:inline-flex;align-items:center;white-space:nowrap;max-width:100%}\n:is(#controlsCol,#addStripModalInner) .nb-ih-pc:not(:last-child)::after{content:\"\\00B7\";margin-left:10px;color:var(--nb-muted)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-pc i,:is(#controlsCol,#addStripModalInner) .nb-ih-sw{flex:0 0 auto;width:10px;height:10px;border-radius:3px;margin-right:5px;background:var(--nb-soft2);box-shadow:inset 0 0 0 1px rgba(0,0,0,.25)}\n:is(#controlsCol,#addStripModalInner) .nb-ih-pc b{margin-left:4px;font-weight:var(--nb-w-bold);color:var(--nb-ink)}\n:is(#controlsCol,#addStripModalInner) :is(.nb-ih-pc,.nb-ih-sw).nb-ih-pq i,:is(#controlsCol,#addStripModalInner) .nb-ih-sw.nb-ih-pq{background:repeating-linear-gradient(45deg,var(--nb-soft) 0 3px,var(--nb-soft2) 3px 6px)}\n#controlsCol .nb-ih-msg{min-height:22px;margin:10px 0 6px;font-size:14px;line-height:1.45;color:var(--nb-warn)}\n#controlsCol .nb-ih-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n#controlsCol .nb-ih-panel{margin:0 0 12px;padding:14px;border:2px solid var(--nb-accent);border-radius:16px;background:var(--nb-sel);color:var(--nb-ink)}\n#controlsCol .nb-ih-empty{border-style:dashed;text-align:center}\n#controlsCol .nb-ih-where{color:var(--nb-muted);font-size:14px;font-weight:400}\n#controlsCol .nb-ih-pos{flex:1 1 100px;min-width:0}\n#controlsCol .nb-ih-h{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:18px;font-weight:700}\n#controlsCol .nb-ih-hl{display:flex;align-items:center;flex-wrap:wrap;column-gap:6px;min-width:0;flex:0 1 auto}\n#controlsCol .nb-ih-sw{display:inline-block;width:14px;height:14px;margin:0 8px 0 0;vertical-align:-1px}\n#controlsCol .nb-ih-b.nb-ih-name{border:0;background:none;padding:0 2px;font-size:18px;font-weight:700;text-align:left;flex:0 1 auto;min-width:0;white-space:normal;text-decoration:none;overflow-wrap:anywhere}\n#controlsCol .nb-ih-name>span{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}\n#controlsCol .nb-ih-b.nb-ih-link{flex:0 0 auto;border:0;background:none;color:var(--nb-accent);text-decoration:underline;padding:0 4px}\n#controlsCol .nb-ih-row{display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap}\n#controlsCol .nb-ih-lb{width:56px;color:var(--nb-muted);font-weight:var(--nb-w-bold);font-size:16px}\n#controlsCol .nb-ih-b.nb-ih-sq{width:44px;padding:0;font-size:20px}\n#controlsCol .nb-ih-val{width:56px;min-width:56px;height:44px;border:1px solid var(--nb-line2);border-radius:12px;background:var(--nb-card);color:var(--nb-ink);text-align:center;font:700 16px var(--font-body,inherit)}\n#controlsCol .nb-ih-val:focus{outline:2px solid var(--nb-accent);outline-offset:1px}\n#controlsCol .nb-ih-b.nb-ih-swap{font-size:14px;padding:0 12px}\n#controlsCol .nb-ih-panel :is(button,input),#controlsCol>.nb-ih-msg{scroll-margin-top:var(--nb-ih-smt,0px)}\n#controlsCol .nb-ih-panel :is(button,input),#controlsCol>.nb-ih-msg{scroll-margin-bottom:var(--nb-ih-smb,0px)}\n#controlsCol .nb-ih-ic{font-size:16px}\n#controlsCol.nb-ih-on>.validation-msg{display:flex;gap:8px;margin:0 0 10px;padding:9px 11px;border:0;border-radius:var(--nb-r-sm);font:400 13.5px/1.45 var(--font-body,inherit);background:var(--nb-soft);color:var(--nb-ink2)}\n#controlsCol.nb-ih-on>.validation-msg.error{background:var(--nb-err-bg);color:var(--nb-err)}\n#controlsCol.nb-ih-on>#v2-edge-note{margin:0 0 10px!important;border:0!important;border-radius:var(--nb-r-sm)!important;background:var(--nb-warn-bg)!important;color:var(--nb-warn)!important;font-size:13.5px!important}\n#controlsCol.nb-ih-on>.staff-item-prices{border:1px solid var(--nb-line);border-radius:var(--nb-r-md);background:var(--nb-soft);color:var(--nb-ink2)}\nbody:not(.nb-pc) #controlsCol>.nb-ih-blk{display:contents}\nbody:not(.nb-pc) #controlsCol .nb-ih-pin{position:sticky;top:var(--nb-ih-top,0px);z-index:4;padding-bottom:2px}\nbody:not(.nb-pc) #controlsCol .nb-ih-wrap{padding-top:24px}\nbody.nb-pc #controlsCol>.nb-ih-blk{position:sticky;top:var(--nb-ih-top,var(--nb-hdr,0px));z-index:4;background:var(--nb-ih-bg,var(--nb-bg));padding-bottom:4px}\nbody.nb-pc #controlsCol.nb-ih-pp>.nb-ih-blk{display:contents}\nbody.nb-pc #controlsCol.nb-ih-pp .nb-ih-pin{position:sticky;top:var(--nb-ih-top,0px);z-index:4;padding-bottom:2px}\nbody #controlsCol.nb-ih-np>.nb-ih-blk,body #controlsCol.nb-ih-np .nb-ih-pin{position:static}\nbody:not(.nb-pc) .studio-controls:has(section.open #controlsCol.nb-ih-on){min-height:var(--nb-ih-mh,100svh);margin-bottom:var(--nb-ih-mb,0px)}\nbody:not(.nb-pc) .studio-controls:has(section.open #controlsCol.nb-ih-on)>.acc-stack{padding-bottom:var(--nb-ih-pb,220px)}\n@media(prefers-reduced-motion:reduce){#controlsCol .nb-ih-in{transition:none}}\n:is(#controlsCol,#addStripModalInner) .nb-ih-mp.nb-ih-sel{outline:3px solid var(--nb-ih-gold);outline-offset:-3px;z-index:2}\n#controlsCol .nb-ih-mp.nb-ih-mz{cursor:pointer}\n#controlsCol .nb-ih-mp.nb-ih-mz:focus{outline-color:var(--nb-ih-gold)}\n#controlsCol .nb-ih-mp.nb-ih-mz:focus-visible{outline:3px solid var(--nb-accent);outline-offset:-3px;z-index:2}\n#controlsCol .nb-ih-mn{display:inline-flex;align-items:center;min-width:0;overflow-wrap:anywhere}\n#controlsCol .nb-ih-mh{font-size:15px;line-height:1.45;color:var(--nb-ink2)}\n#addStripModalInner .nb-ih-head{gap:4px}\n#addStripModalInner .nb-ih-head .nb-ih-pin{background:none;padding:0}\n#addStripModalInner .nb-ih-head .nb-ih-wrap{padding-top:0}\n#addStripModalInner .nb-ih-head .nb-ih-bar{height:48px;touch-action:auto}\n#addStripModalInner .nb-ih-head .nb-ih-in{cursor:default;transition:none}\n#addStripModalInner .nb-ih-head .nb-ih-lay{font-size:13px;margin-top:4px}\n";(document.head||document.documentElement).appendChild(s);})();
(function(){
  const B=()=>{try{return BUILDER}catch(e){return null}},S=()=>{try{return state}catch(e){return null}},
    on=()=>/\bnb-(pc|easy)\b/.test(document.body.className),pre=()=>document.body.classList.contains('nb-pre'),
    q=(r,s)=>r.querySelector(s),qa=(r,s)=>[...r.querySelectorAll(s)],
    T=(g,k,v)=>{const u=(B()||{}).ui_texts;let t=u&&u[g]&&u[g][k];if(typeof t!='string'||!t.trim())return'';for(const n in v||{}){if(v[n]==null||v[n]==='')return'';t=t.split('{'+n+'}').join(v[n])}return/\{[a-z_]+\}/.test(t)?'':t},
    el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e},
    at=(e,o)=>{for(const k in o)if(o[k]!=null&&o[k]!=='')e.setAttribute(k,o[k]);return e},
    btn=(c,x,k,fn,a)=>{const b=at(el('button',c,x),{type:'button','data-nb5k':k,'aria-label':a});b.onclick=e=>{e.preventDefault();e.stopPropagation();fn(e)};return b},
    r2=x=>Math.round(x*100)/100,f=x=>String(r2(+x)),eps=()=>(B()||{}).width_epsilon||.01,
    look=n=>{try{const r=typeof METAL_SHADE_RAMPS!='undefined'&&METAL_SHADE_RAMPS[n],c=v=>'rgb('+v+')';
      return typeof METAL_TEXTURES!='undefined'&&METAL_TEXTURES[n]?'center/cover url(data:image/jpeg;base64,'+METAL_TEXTURES[n]+')':
        typeof TEXTURE_MATERIALS!='undefined'&&TEXTURE_MATERIALS.has(n)?'center/cover url(swatches-tex/'+swatchSlug(n)+'.jpg)':
        r&&r.length>3?'linear-gradient('+c(r[1])+','+c(r[3])+' 38%,'+c(r[2])+' 58%,'+c(r[0])+')':getColor(n)||''}catch(e){return''}};
  const hdr=()=>{const n=document.querySelector('.studio-controls .nb-pc-steps');document.documentElement.style.setProperty('--nb-hdr',(n&&getComputedStyle(n).position=='sticky'?n.offsetHeight:0)+'px')};
  window.__NB5__={B,S,on,q,qa,T,el,at,btn,f,r2,eps,look,hdr};
  const I=(k,v)=>T('inlays',k,v),CH='(choose)',isM=n=>{try{return n!=CH&&isMetal(n)}catch(e){return!1}},
    stepOf=n=>parseFloat(((B().rules||{}).width_increment_materials||{})[n])||B().strip_width.step,
    freeW=()=>{const s=S();return Math.max(0,r2(s.ringWidth-s.strips.reduce((a,x)=>a+x.width,0)))},
    edge=i=>{const s=S();return(i==0||i==s.strips.length-1)&&s.strips[i].material==s.baseMetal},
    kind=i=>{const s=S(),m=s.strips[i].material;return m==CH?'q':isM(m)?(i==0||i==s.strips.length-1?'edge':'pin'):'inlay'},
    minOf=i=>{const b=B(),n=S().strips[i].material,x=(DATA.m[n]||{}).mi||{};let m;try{m=edge(i)?getBaseMetalMinWidth():isM(n)?metalStripMin(n):x.solid_inlay||x.inlay_swarf||b.material_default_min_width}catch(e){}return Math.max(parseFloat(m)||0,b.strip_width.min)},
    role=i=>{const k=kind(i);if(k=='edge')return I(i?'role_right_edge':'role_left_edge');if(k=='pin')return I('role_pinstripe');if(k=='q')return'?';let c=0;for(let j=0;j<=i;j++)c+=kind(j)=='inlay';return I('role_inlay',{n:c})},
    col=()=>document.getElementById('controlsCol'),redraw=()=>{try{__V2_ROUTER__.rerenderSection('compose')}catch(e){}},
    select=i=>{S().selectedStrip=i;redraw()},hide=e=>e&&e.classList.add('nb-x'),
    put=(r,e)=>{if(e){r.l.after(e);r.l=e}};
  let gap=null;

  function topLine(wc){
    const n=q(wc,'input[type=number]');if(!n||q(wc,'.nb-ib'))return;
    [...wc.children].forEach(c=>{if(c!=n&&c!=n.nextElementSibling)hide(c)});
    if(I('band_label'))wc.prepend(el('span','nb-rw-t',I('band_label')));
    const st=+B().ring_width.step,v=+n.value,go=d=>{const x=r2(+n.value+d*st);if(x<n.min-eps()||x>n.max- -eps())return;n.value=x;n.dispatchEvent(new Event('change',{bubbles:!0}))},
      m=btn('nb-ib','−','rw-',()=>go(-1),I('ring_narrower')),p=btn('nb-ib','+','rw+',()=>go(1),I('ring_wider'));
    m.disabled=n.disabled||v-st<n.min-eps();p.disabled=n.disabled||v+st>n.max- -eps();m.title=p.title=n.title;
    n.before(m);(n.nextElementSibling||n).after(p);wc.classList.add('nb-rw');
  }

  function band(cp,add){
    const s=S(),W=+s.ringWidth,fr=freeW(),n=s.strips.length,gh=q(cp,':scope>div[title]:not(.strip-block)');
    cp.classList.add('nb-band');cp.style.setProperty('--n',n+!!gh);cp.classList.toggle('nb-plain',!n);if(!n){cp.style.setProperty('--nb-base',look(s.baseMetal));at(cp,{role:'img','aria-label':s.baseMetal+', '+f(W)+' mm · '+I('role_whole')})}
    qa(cp,':scope>.strip-block').forEach((b,i)=>{const x=s.strips[i];if(!x)return;const c=x.material==CH;
      b.style.flex=x.width+' 1 0';if(!c)b.style.background=look(x.material);b.classList.toggle('nb-qch',c);b.classList.toggle('nb-last',i==n-1&&fr<=eps());
      at(b,{role:'button',tabindex:0,'data-nb5k':'b'+i,'aria-label':(c?'?':x.material)+', '+f(x.width)+' mm','aria-pressed':s.selectedStrip==i});
      const r=q(b,'.s-remove');if(r)at(r,{'aria-label':I('remove')})});
    if(gh){gh.className='nb-free';gh.style.flex=fr+' 1 0';at(gh,{role:'button',tabindex:0,'data-nb5k':'free','aria-label':f(fr)+' mm '+I('free_word')})}
    const l=n&&at(el('div','nb-blab'),{'aria-hidden':'true'}),g=el('div','nb-gaps'),R=cp.getBoundingClientRect(),bl=qa(cp,':scope>.strip-block');
    if(l){l.style.setProperty('--n',n+!!gh);s.strips.concat(gh?[{width:fr,f:1}]:[]).forEach(x=>{const e=el('span',x.f?'nb-blab-f':'',f(x.width));e.style.flex=x.width+' 1 0';l.append(e)})}
    if(pre()||!add||add.disabled)return[l];
    const sm=+B().strip_width.min,x2=i=>i<0?50:(bl[i].getBoundingClientRect().right-R.left)/R.width*100,o=(p,i,t)=>{const b=btn('nb-gap'+(t?' nb-solo':''),t||'',i<0?'gend':'g'+i,()=>{
        if(i<0)return add.click();gap={i,p:s.selectedStrip};s.selectedStrip=i;openAddStripModal()},t?'':(I('add_after',{material:s.strips[p]&&s.strips[p].material})||I('add_at_spot')));    b.style.left=Math.min(94,Math.max(6,x2(p)))+'%';g.append(b)};
    let bm=0;try{bm=getBaseMetalMinWidth()}catch(e){}
    if(!n){if(I('add_here'))o(-1,-1,I('add_here'))}
    else s.strips.forEach((x,i)=>{const y=s.strips[i+1];if(!y)o(i,-1);else if(isM(y.material)&&x.material!=CH&&fr>=sm+(isM(x.material)?0:bm)-eps())o(i,i)});
    return[l,g.firstChild&&g];
  }

  function sum(){
    const s=S(),W=+s.ringWidth,fr=freeW(),u=r2(W-fr),full=fr<=eps(),
      l1=full?I('used_full',{mm:f(u),ring:f(W)}):I('used_line',{mm:f(u),ring:f(W),free:f(fr)});
    if(!l1)return null;
    const e=el('div','nb-iu'),ps=el('div','nb-iu-ps'),sr=[],
      pc=(nm,w,m,c)=>{const x=el('span','nb-iu-p'+(c?' '+c:'')),i=el('i');if(m)i.style.background=look(m);x.append(i,el('span',null,nm+' '),el('b',null,f(w)));ps.append(x);const a=I('piece_aria',{material:nm,width:f(w)});if(a)sr.push(a)};
    s.strips.forEach(x=>pc(x.material==CH?'?':x.material,x.width,x.material!=CH&&x.material,x.material==CH?'nb-iu-q':''));
    if(!full&&I('free_name'))pc(I('free_name'),fr,null,'nb-iu-f');
    e.append(el('div','nb-iu-t',l1),ps);
    return at(e,{role:'img','aria-label':l1.split(' · ').join(', ')+(sr.length?': '+sr.join(', '):'')});
  }

  function editor(i,c){
    const s=S(),x=s.strips[i],k=kind(i),W=window.__V2_WIDTHS__,n=s.strips.length,st=stepOf(x.material),ed=at(el('div','nb-ed'),{role:'group','aria-label':x.material}),
      h=el('div','nb-ed-h'),sw=el('span','nb-sw'),tx=el('span'),set=v=>{if(W&&W.apply(i,v)&&S().strips[i])select(i)},
      bx=at(el('input'),{inputmode:'decimal','data-nb5k':'ew','aria-label':I('width_aria')}),lb=el('label','nb-num'),rw=el('div','nb-step'),acts=el('div','nb-acts'),
      a=(key,cl,fn,d)=>{if(I(key)){const b=btn('nb-btn '+cl,I(key),'e'+key,fn);b.disabled=!!d;acts.append(b)}},
      mi=btn('nb-ib','−','e-',()=>set(r2(x.width-st)),I('narrower')),pl=btn('nb-ib','+','e+',()=>W&&set(W.plusWant(i)),I('wider'));
    sw.style.background=look(x.material);tx.append(el('b',null,x.material),el('small',null,[role(i),I('min_width',{mm:f(minOf(i))})].filter(Boolean).join(' · ')));h.append(sw,tx);
    bx.value=f(x.width);bx.onkeydown=e=>{e.stopPropagation();if(e.key=='Enter'){e.preventDefault();bx.onchange()}else if(e.key=='Escape')bx.value=f(x.width)};
    bx.onchange=()=>{const v=parseFloat(bx.value);v>0&&Math.abs(v-x.width)>eps()?set(v):bx.value=f(x.width)};
    lb.append(bx,el('span','nb-u','mm'));
    mi.disabled=x.width-st<minOf(i)-eps();if(W){const p=W.plan(i,W.plusWant(i));pl.disabled=p.error!==undefined||!p.changed}
    rw.append(mi,lb,pl);ed.append(h,rw);
    if(k=='inlay'){const r=qa(c,'.v2-strip-rows>.v2-strip-row:not(.v2-row-ghost)')[i],mv=r?qa(qa(r,'.v2-row-group')[0]||r,'.v2-row-btn'):[],
        mo=d=>{const nm=x.material,sg=JSON.stringify(S().strips),b=d<0?mv[0]:mv[1];b.click();const st=S().strips;if(JSON.stringify(st)==sg)return select(i);const c2=st.map((y,j)=>y.material==nm?j:-1).filter(j=>j>=0);if(c2.length)select(c2.reduce((a,j)=>(d<0?j<i:j>i)&&Math.abs(j-i)<Math.abs(a-i)?j:a,c2[0]))};
      a('move_left','nb-mvl',()=>mo(-1),!mv[0]||mv[0].disabled);a('move_right','nb-mvr',()=>mo(1),!mv[1]||mv[1].disabled);
      qa(c,'.strip-arrows .strip-arrow').forEach(b=>{const l=/left/i.test(b.title);a('slide',l?'nb-sll':'nb-slr',()=>b.click());const z=acts.lastChild;if(z&&I(l?'slide_left':'slide_right'))at(z,{'aria-label':I(l?'slide_left':'slide_right')})});
      a('change_material','',()=>{const e=q(c,'.strip-edit-btn');e?e.click():openEditStripModal(i)});
      a('remove','nb-bad',()=>{const b=qa(c,'.composer-strips>.strip-block')[i],r=b&&q(b,'.s-remove');if(r)r.click()});
    }else if(k=='edge'&&edge(0)&&n>1){const z=rgt();if(z!=null)a('make_edges_equal','',equal,Math.abs(s.strips[0].width-z)<=eps())}
    a('done','nb-done',()=>select(-1));ed.append(acts);return ed;
  }
  const rgt=()=>{const s=S(),n=s.strips.length,fr=freeW();return n>2&&edge(n-1)&&fr<=eps()?s.strips[n-1].width:!edge(n-1)&&fr>eps()?fr:null};
  function equal(){
    const s=S(),n=s.strips.length,st=stepOf(s.baseMetal),z=rgt(),t=r2(s.strips[0].width+z),h=r2(Math.floor(t/2/st+1e-9)*st),p=s.strips.map(x=>({...x}));
    p[0].width=h;if(z!=freeW())p[n-1].width=r2(t-h);const why=validateProposedStrips(p);if(why)return showRuleToast(why);
    pushUndo();s.strips=p;redraw();renderRing();updatePrice();
  }

  function dress(key){
    const c=col(),s=S();if(!c||!on()||!s||!Array.isArray(s.strips))return;hdr();
    const k=x=>q(c,':scope>'+x),wc=k('.width-control'),cp=k('.composer-strips'),ac=k('.composer-actions');
    if(!cp||!ac||cp.classList.contains('nb-band'))return;
    const rows=k('.v2-strip-rows'),ar=k('.strip-arrows'),sl=s.selectedStrip,n=s.strips.length,fr=freeW();
    if(wc)topLine(wc);
    if(window.__NB_IH__&&__NB_IH__.screen&&__NB_IH__.screen.on()){const t=key&&q(c,'[data-nb5k="'+key+'"]');if(t&&!t.disabled)t.focus({preventScroll:!0});return}
    ac.classList.add('nb-tools');
    if(wc)wc.after(ac);ac.after(cp);
    const[lb,gp]=band(cp,q(ac,'.btn-gold')),r={l:cp},us=(n||!pre())?sum():null;put(r,lb);put(r,gp);put(r,us);
    const rw=k('.remaining-width');put(r,rw);if(us&&rw){hide(rw);at(rw,{'aria-hidden':'true'})}    qa(c,':scope>.validation-msg,:scope>#v2-edge-note').forEach(e=>{put(r,e);if(e.classList.contains('info')&&fr>eps()&&e.textContent.indexOf(f(fr).replace(/^\d+$/,m=>m+'.'))>=0&&/remaining/.test(e.textContent))hide(e)});
    if(!pre()&&sl>=0&&s.strips[sl]&&s.strips[sl].material!=CH){put(r,editor(sl,c));hide(ar);if(ar)hide(ar.nextElementSibling)}
    else if(!pre()){const t=el('div','nb-tap'),a=I(n?'tap_strip':'tap_plain'),b=I(n?'tap_plus':'tap_designs'),em=!n&&q(cp,':scope>div:not([class])');
      if(a)t.append(el('b',null,a));if(b&&(!n||gp))t.append(el('span',null,b));
      if(em){em.className='nb-emp';em.removeAttribute('style');t.append(em)}
      qa(c,':scope>p:not([class])').forEach(p=>{t.append(p);if(n)hide(p)});if(t.firstChild)put(r,t)}
    put(r,k('.staff-item-prices'));
    if(rows){put(r,rows);qa(rows,'.v2-strip-row').forEach((w,i)=>{const nm=q(w,'.v2-row-name');if(!nm)return;
      if(w.classList.contains('v2-row-ghost'))return at(nm,{'data-nb-role':[I('free_word'),I('role_rest')].filter(Boolean).join(' · ')});    if(!s.strips[i])return;
      const t=kind(i);w.classList.toggle('nb-row-e',t!='inlay');at(nm,{'data-nb-role':t=='edge'?I('role_edge'):t=='pin'?I('role_between'):role(i)})})}
    const t=key&&q(c,'[data-nb5k="'+key+'"]');if(t&&!t.disabled)t.focus({preventScroll:!0});
  }

  let done=0;
  function start(){
    if(!done&&typeof renderComposePanel=='function'){done=1;const inner=renderComposePanel;
      renderComposePanel=function(){const a=document.activeElement,c=col(),key=a&&c&&c.contains(a)?a.dataset.nb5k:null,r=inner.apply(this,arguments);
        Promise.resolve().then(()=>{try{dress(key)}catch(e){console.error('redesign inlays:',e)}});return r}}
    const h=document.getElementById('acc-body-compose'),ov=document.getElementById('addStripModal');
    if(h){h.addEventListener('click',e=>{if(!on()||pre())return;const t=e.target,b=t.closest('.composer-strips>.strip-block');if(!b||t.closest('.s-remove'))return;
        const i=qa(b.parentNode,':scope>.strip-block').indexOf(b),x=S().strips[i];if(!x||x.material==CH)return;e.preventDefault();e.stopPropagation();select(i)},!0);
      h.addEventListener('keydown',e=>{const t=e.target;if(on()&&(e.key=='Enter'||e.key==' ')&&t.matches('.nb-band>[role=button]')){e.preventDefault();t.click()}})}
    if(ov)new MutationObserver(()=>{if(ov.classList.contains('open')||!gap)return;const g=gap,s=S();gap=null;if(s.selectedStrip==g.i){s.selectedStrip=g.p;redraw()}}).observe(ov,{attributes:!0,attributeFilter:['class']});
    new MutationObserver(l=>l.forEach(m=>m.addedNodes.forEach(n=>{const c=n.classList;if(c)at(n,{role:c.contains('rule-toast')?'alert':c.contains('v2-ok-toast')?'status':''})}))).observe(document.body,{childList:!0});
  }
  document.readyState=='loading'?document.addEventListener('DOMContentLoaded',start):start();
  window.__NB_INLAYS__={dress,equal};
})();
(function(){
  const N=window.__NB5__;if(!N)return;
  const{S,B,on,q,qa,T,el,at,btn,f,r2,eps,look}=N,D=(k,v)=>T('inlay_dialog',k,v),
    ov=()=>document.getElementById('addStripModal'),inn=()=>document.getElementById('addStripModalInner'),
    isM=n=>{try{return isMetal(n)}catch(e){return!1}},
    mat=c=>{const t=((c&&q(c,'.name'))||{}).textContent||'';if(DATA.m[t])return t;for(let k=t.lastIndexOf(' (');k>0;k=t.lastIndexOf(' (',k-1))if(DATA.m[t.slice(0,k)])return t.slice(0,k);return null},
    minOf=n=>{const b=B(),x=(DATA.m[n]||{}).mi||{};let m;try{m=isM(n)?metalStripMin(n):x.solid_inlay||x.inlay_swarf||b.material_default_min_width}catch(e){}return Math.max(parseFloat(m)||0,b.strip_width.min)},
    ev=(e,t)=>e.dispatchEvent(new Event(t,{bubbles:!0}));
  let opener=null;

  function live(m,ed,pk,w){
    const s=S(),W=+s.ringWidth,st=s.strips.map(x=>({m:x.material,w:x.width}));let bm=0,sg;try{bm=getBaseMetalMinWidth()}catch(e){}
    if(ed>=0){sg=st.slice();sg[ed]={m:pk||st[ed].m,w,n:1}}
    else{const p=s.selectedStrip>=0?s.selectedStrip+1:st.length,rm=W-st.reduce((a,x)=>a+x.w,0),au=(!st.length||(p>0&&!isM(st[p-1].m)))&&rm-w>=bm&&!(pk&&isM(pk));
      sg=st.slice(0,p).concat(au?[{m:s.baseMetal,w:bm,a:1}]:[],[{m:pk,w,n:1,g:!pk}],st.slice(p))}
    const fr=r2(W-sg.reduce((a,x)=>a+x.w,0)),bx=el('div','nb-live'),cp=el('div','nb-cap'),bd=at(el('div','nb-lband'),{role:'img','aria-label':D('band_aria',{ring:f(W)})}),ky=at(el('div','nb-key'),{'aria-hidden':'true'});
    cp.append(el('b',null,pk?pk+' · '+f(w)+' mm':D('new_strip')),el('span',null,D('free_of',{free:f(Math.max(0,fr)),ring:f(W)})));
    sg.concat(fr>eps()?[{w:fr,f:1}]:[]).forEach(x=>{const i=el('i',x.f?'nb-fr':x.g?'nb-new nb-gh':x.n?'nb-new':x.a?'nb-auto':'');i.style.flex=x.w+' 1 0';if(x.m&&!x.g)i.style.background=look(x.m);bd.append(i)});
    [['new_strip','new'],['key_auto','auto',{base:s.baseMetal}],['key_free','fr']].forEach(([k,c,v])=>{if(D(k,v))ky.append(el('span','nb-k-'+c,D(k,v)))});
    const ru=at(el('div','nb-ruler'),{'aria-hidden':'true'});for(let v=0;v<W-.6;v+=2){const s=el('span',null,f(v));s.style.left=(v/W*100)+'%';ru.append(s)}const e=el('span','nb-ru-end',T('common','mm',{mm:f(W)})||f(W));ru.append(e);
    bx.append(cp,bd,ru,ky);qa(m,':scope>.validation-msg.info').forEach(i=>bx.append(i));return bx;
  }

  function dress(){
    const m=inn();if(!m||!on()||!ov().classList.contains('open'))return;
    const h3=q(m,':scope>h3'),ht=h3?h3.textContent:'',ad=/^Add an Inlay Strip/.test(ht),em=ht.match(/^Edit Strip (\d+)/),ok=!!(ad||em);
    m.classList.toggle('nb-d5',ok);ov().classList.toggle('nb-d5o',ok);if(!ok||q(m,':scope>.nb-live'))return;
    const ih=window.__NB_IH__&&__NB_IH__.picker&&__NB_IH__.picker.dress?__NB_IH__.picker.dress(m):null;
    const pk=ih?ih.mat:mat(q(m,'.mat-card.selected')),inp=q(m,'.width-picker input[type=number]'),w=ih?ih.w:inp?+inp.value:0,b=B(),
      sr=q(m,'.mat-search'),tm=sr?sr.value.trim().toLowerCase():'',gr=q(m,':scope>.mat-grid'),cs=gr?qa(gr,':scope>.mat-card'):[],ft=m.lastElementChild;
    at(m,{role:'dialog','aria-modal':'true','aria-labelledby':'nbDlgT'});h3.id='nbDlgT';h3.after(ih?ih.head:live(m,em?em[1]-1:-1,pk,w));
    const gs=q(m,':scope>.mat-groups');if(gs&&sr){const ae=document.activeElement,w=el('div','nb-gs');gs.before(w);w.append(gs,sr);if(ae&&ae!=document.activeElement&&w.contains(ae))ae.focus({preventScroll:!0})}    
    if(tm&&D('clear_search'))sr.after(btn('nb-clr','×','',()=>{sr.value='';ev(sr,'input');q(inn(),'.mat-search').focus()},D('clear_search')));
    const t0=q(gr||m,'.mat-card.selected')||cs[0];if(gr)at(gr,{role:'group','aria-label':(q(m,'.nb-sg-btn')||{}).textContent});
    cs.forEach(c=>{at(c,{role:'button',tabindex:c==t0?0:-1,'aria-pressed':c.classList.contains('selected')});const n=mat(c);if(!n)return;
      if(!q(c,'.nb-mat-s')){let g=DATA.m[n].g;try{g=metalGroupLabel(g)}catch(e){}c.dataset.nbSub=[g,T('inlays','min_width',{mm:f(minOf(n))})].filter(Boolean).join(' · ')}
      const t=q(c,'.nb-mat-n')||q(c,'.name'),x=t.firstChild,i=tm&&x&&x.nodeType==3?x.nodeValue.toLowerCase().indexOf(tm):-1;
      if(i>=0){const r=x.splitText(i),k=el('mark');r.splitText(tm.length);r.before(k);k.append(r)}});
    if(gr&&!cs.length&&D('no_match'))gr.append(el('p','nb-none',D('no_match')));
    const wb=!ih&&inp&&inp.closest('.width-picker');
    if(wb){const lo=pk?minOf(pk):+b.strip_width.min,hi=+inp.max,sl=at(el('input','nb-wsl'),{type:'range',min:lo,max:Math.max(lo,hi),'data-nb5k':'sl','aria-label':(wb.previousElementSibling||{}).textContent});
      sl.step=parseFloat(((b.rules||{}).width_increment_materials||{})[pk])||b.strip_width.step;sl.value=w;sl.disabled=!pk||hi<lo;
      sl.oninput=()=>{inp.value=sl.value};sl.onchange=()=>{inp.value=sl.value;ev(inp,'input');ev(inp,'change')};
      wb.append(sl);if(D('smallest',{mm:f(lo)}))wb.append(el('span','nb-small',D('smallest',{mm:f(lo)})));
      if(!pk&&!em&&D('width_hint'))wb.parentNode.firstElementChild.append(el('span','nb-wh',D('width_hint')))}
    const rd=ih?ih.ready:pk&&w>=minOf(pk)-eps()&&(!inp||w<=+inp.max+eps()),st=at(el('p','nb-dst'+(rd?' nb-dok':''),ih?ih.status:!pk?D('todo_material'):rd?D('ready',{material:pk,width:f(w)}):D('todo_width')),{role:'status'});
    if(st.textContent&&ft)ft.before(st);
    if(ft&&!ft.__nb){ft.__nb=1;ft.classList.add('nb-foot');ft.addEventListener('click',e=>{const g=q(ft,'.btn-gold');if(e.target!=ft||!g||!g.disabled)return;
      const r=g.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)return;
      if(!q(inn(),'.mat-card.selected')&&D('pick_first'))showRuleToast(D('pick_first'));const t=q(inn(),':scope>.mat-grid');if(t){t.classList.remove('nb-flash');void t.offsetWidth;t.classList.add('nb-flash')}})}
  }

  function start(){
    const m=inn(),o=ov();if(!m||!o)return;
    new MutationObserver(()=>Promise.resolve().then(()=>{try{dress()}catch(e){console.error('redesign dialog:',e)}})).observe(m,{childList:!0});
    new MutationObserver(()=>{if(!on())return;if(o.classList.contains('open')){if(!opener)opener=document.activeElement;dress();const s=matchMedia('(pointer:fine)').matches?q(m,'.mat-search'):(m.tabIndex=-1,m);if(s&&!m.contains(document.activeElement))s.focus({preventScroll:!0})}
      else if(opener){const b=opener;opener=null;if(document.contains(b))b.focus({preventScroll:!0})}}).observe(o,{attributes:!0,attributeFilter:['class']});
    m.addEventListener('keydown',e=>{const c=e.target;if(!c.matches('.mat-card'))return;if(e.key=='Enter'||e.key==' '){e.preventDefault();c.click();return}
      const l=qa(m,'.mat-grid>.mat-card'),i=l.indexOf(c),k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key],j=e.key=='Home'?0:e.key=='End'?l.length-1:k?Math.max(0,Math.min(l.length-1,i+k)):-1;
      if(j<0)return;e.preventDefault();c.tabIndex=-1;l[j].tabIndex=0;l[j].focus()});
    addEventListener('keydown',e=>{if(e.key!='Escape'||!on()||!o.classList.contains('open'))return;const l=document.getElementById('swatchLightbox');
      if((l&&l.classList.contains('open'))||(window.__V2_INLAY_GROUPS__&&__V2_INLAY_GROUPS__.isOpen()))return;o.classList.remove('open')},!0);
  }
  document.readyState=='loading'?document.addEventListener('DOMContentLoaded',start):start();
  window.__NB_DLG__=dress;
})();
(function(){
  const N=window.__NB5__;if(!N)return;
  const{S,B,on,q,qa,T,el,at,btn,hdr}=N,L=(k,v)=>T('sleeve',k,v),host=()=>document.getElementById('acc-body-sleeve'),
    no=n=>{const e=B().engraving||{},g=e.unavailable_sleeve_groups||(e.unavailable_sleeve_group?[e.unavailable_sleeve_group]:[]),m=DATA.m[n];return!!m&&(g.includes(m.g)||(e.unavailable_sleeve_materials||[]).includes(n))},
    nm=c=>{const t=((q(c,'.name')||{}).textContent||'').trim();return DATA.m[t]?t:''},
    cl=n=>{try{return getColor(n)}catch(e){return'#999'}},
    fo=k=>{const f=q(host(),'[data-nb5k="'+k+'"]');if(f)f.focus()},
    svg=(o,i)=>'<svg viewBox="0 0 120 70"><ellipse cx="60" cy="40" rx="54" ry="26" fill="'+o+'"/><ellipse cx="60" cy="30" rx="54" ry="26" fill="'+o+'" stroke="#0004"/><ellipse cx="60" cy="30" rx="44" ry="19" fill="'+i+'"/><ellipse cx="60" cy="33" rx="40" ry="15" fill="#0002"/></svg><svg viewBox="0 0 120 70"><rect x="4" y="52" width="112" height="16" rx="3" fill="#e8c4a8"/><path d="M14 14h92l6 10v18H8V24z" fill="'+o+'" stroke="#0004"/><rect x="8" y="42" width="104" height="9" fill="'+i+'" stroke="#0004"/></svg>';
  let tab,term='',chip=null;

  function dress(){
    const h=host(),s=S();if(!h||!on()||!s)return;hdr();
    qa(h,'.nb-s5').forEach(e=>e.remove());qa(h,'.nb-x').forEach(e=>e.classList.remove('nb-x'));
    const k=x=>q(h,':scope>'+x),add=(e,r,a)=>{e.classList.add('nb-s5');a?r.after(e):r.before(e);return e},
      bs=s.baseMetal,sl=s.sleeve||bs,h2=k('h2'),gp=k('.mat-groups'),gd=k('.mat-grid');if(!h2||!gp||!gd)return;
    const cp=el('div','nb-cap5'),l1=el('p'),fg=at(el('div','nb-figs'),{'aria-hidden':'true'});
    l1.append(el('b',null,L('caption_inside',{sleeve:sl})));if(sl==bs&&L('caption_default'))l1.append(el('span','nb-tag',L('caption_default')));
    fg.innerHTML=svg(cl(bs),cl(sl));cp.append(fg,l1,el('p',null,L('caption_outside',{base:bs})));if(no(sl)&&L('caption_no_engraving'))cp.append(el('p','nb-ne5',L('caption_no_engraving')));    add(cp,h2);
    const m=!q(h2,'.nb-opt')&&h2.textContent.match(/^(.*?)\s*\((.+)\)\s*$/);if(m){const t=el('span','nb-opt');t.append(el('i',null,'('),m[2],el('i',null,')'));h2.textContent=m[1]+' ';h2.append(t)}
    if(L('subtitle'))add(el('p','nb-sub',L('subtitle')),k('.panel-desc')||h2,1);
    const tb=qa(gp,'.mat-group-btn'),sh=tb.filter(b=>b.style.display!='none'),g=((tb.find(b=>b.classList.contains('active'))||{}).dataset||{}).g;
    if(g!=tab){tab=g;term='';chip=null}gp.classList.add('nb-x');
    if(sh.length>1){const sg=at(el('div','nb-seg'),{role:'group','aria-label':L('tabs_aria')}),K={default:'tab_same',metals:'tab_metal',woods:'tab_wood',other:'tab_special'};
      if(L('inside_label'))add(el('p','nb-label',L('inside_label')),gp);
      tb.forEach(b=>{const x=b.dataset.g;sg.append(at(btn('nb-sg5',L(K[x])||b.textContent,'t'+x,()=>{b.click();dress();fo('t'+x)}),{'aria-pressed':b.classList.contains('active')}))});add(sg,gp)}
    const cs=qa(gd,':scope>.mat-card');
    if(tab=='default'){if(sh.length>1&&L('same_help',{base:bs})){gd.classList.add('nb-x');add(el('p','nb-help',L('same_help',{base:bs})),gd)}}
    else{gd.classList.add('nb-tray');
      if(tab=='woods')try{cs.filter(c=>POPULAR_WOODS.has(nm(c))).reverse().forEach(c=>gd.prepend(c))}catch(e){}
      const tp=add(el('div','nb-trayh'),gd),ct=el('p','nb-count'),no5=add(el('p','nb-none5'),gd,1),nt=add(at(el('p','nb-note5'),{'data-tag':L('note_tag')}),no5,1),sk=tab=='woods'?'search_woods':'search_materials';
      if(tab=='other'){const gs=[...new Set(cs.map(c=>(DATA.m[nm(c)]||{}).g).filter(Boolean))].sort(),ch=at(el('div','nb-chips'),{role:'group','aria-label':L('groups_aria')});
        [null].concat(gs).forEach(x=>{let t=x;try{t=x==null?L('group_all',{count:cs.length}):metalGroupLabel(x)}catch(e){}
          if(t)ch.append(at(btn('nb-chip',t,'c'+x,()=>{chip=x;dress();fo('c'+x)}),{'aria-pressed':chip==x}))});tp.append(ch)}
      if(cs.length>8&&L(sk)){const i=at(el('input','nb-find'),{type:'search',placeholder:L(sk),'aria-label':L(sk),'data-nb5k':'find'});i.value=term;i.oninput=()=>{term=i.value;fl()};tp.append(i)}
      tp.append(ct);
      const fl=()=>{let v=0,b=0;const t=term.trim().toLowerCase();
        cs.forEach(c=>{const n=nm(c),ok=(!t||n.toLowerCase().includes(t))&&(chip==null||(DATA.m[n]||{}).g==chip);c.classList.toggle('nb-x',!ok);if(ok){v++;b+=no(n)}});
        ct.textContent=L(tab=='woods'?'popular_count':'count',{count:tab=='woods'?cs.length:v});no5.textContent=v?'':L('no_match',{query:t&&term.trim()});nt.textContent=v&&b==v?L('none_engravable'):''};
      cs.forEach(c=>{if(no(nm(c)))at(c,{'data-nb-ne':L('no_engraving')})});fl()}
    cs.forEach(c=>at(c,{role:'button',tabindex:0,'aria-pressed':c.classList.contains('selected'),'data-nb5k':'m'+nm(c)}));
    if(sl!=bs&&no(sl)&&L('engraving_notice',{sleeve:sl}))add(at(el('p','nb-warn5',[L('engraving_notice',{sleeve:sl}),L('engraving_keep',{base:bs})].filter(Boolean).join(' ')),{role:'note'}),k('.validation-msg')||gd,1);
  }

  let done=0;
  function start(){
    if(!done&&typeof renderSleevePanel=='function'){done=1;const inner=renderSleevePanel;
      renderSleevePanel=function(){const a=document.activeElement,h=host(),key=a&&h&&h.contains(a)?a.dataset.nb5k:null,r=inner.apply(this,arguments);
        Promise.resolve().then(()=>{try{dress();if(key)fo(key)}catch(e){console.error('redesign sleeve:',e)}});return r}}
    const h=host();if(h)h.addEventListener('keydown',e=>{const t=e.target;if((e.key=='Enter'||e.key==' ')&&t.matches('.mat-card')){e.preventDefault();t.click()}});
  }
  document.readyState=='loading'?document.addEventListener('DOMContentLoaded',start):start();
})();
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BandEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var Q = 4;
  function q(mm) { return Math.round(mm * Q); }
  function mm(u) { return u / Q; }
  function fmt(u) { return String(mm(u)) + 'mm'; }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  function createEngine(cfg) {
    cfg = cfg || {};
    var isMetal = cfg.isMetal || function () { return false; };
    var minWidth = cfg.minWidth || function () { return 1; };
    var needsMetal = cfg.needsMetal || function () { return false; };
    var mayBeEdge = cfg.mayBeEdge || function (n) { return !needsMetal(n); };
    var pairError = cfg.pairError || function () { return null; };
    var say = cfg.say || function (n) { return n; };
    var edgeMinFn = cfg.edgeMin || function () { return 0; };
    var stripMinFn = cfg.stripMin || function (s) { return minWidth(s.base); };
    var ringMin = q(cfg.ringMin == null ? 2 : cfg.ringMin), ringMax = q(cfg.ringMax == null ? 14 : cfg.ringMax), ringStep = q(cfg.ringStep == null ? 0.5 : cfg.ringStep);

    function inn(s) {
      var items = s.inlays.map(function (i) { return { id: i.id, mat: i.mat, w: q(i.w), x: q(i.x) }; });
      items.sort(function (a, b) { return a.x - b.x; });
      var S = { W: q(s.width), base: s.base, items: items, src: s };
      S.strip = q(stripMinFn(s)); S.edge = Math.max(q(edgeMinFn(s)), 0);
      return S;
    }
    function out(S) {
      var o = {}; for (var k in S.src) o[k] = S.src[k];
      o.width = mm(S.W); o.base = S.base;
      o.inlays = S.items.map(function (i) { return { id: i.id, mat: i.mat, w: mm(i.w), x: mm(i.x) }; });
      return o;
    }
    function clone(S) { var c = { W: S.W, base: S.base, src: S.src, strip: S.strip, edge: S.edge }; c.items = S.items.map(function (i) { return { id: i.id, mat: i.mat, w: i.w, x: i.x }; }); return c; }
    function gaps(S) {
      var g = [], pos = 0;
      for (var i = 0; i < S.items.length; i++) { g.push(S.items[i].x - pos); pos = S.items[i].x + S.items[i].w; }
      g.push(S.W - pos); return g;
    }
    function rule(S, a, b) {
      if (!a && !b) return { min: 0, zero: true };
      if (!a || !b) {
        var it = a || b, m = Math.max(S.strip, S.edge);
        return { min: m, zero: S.edge === 0 && mayBeEdge(it.mat), edge: true };
      }
      var touch = !pairError(a.mat, b.mat, S.base) && (!needsMetal(a.mat) || isMetal(b.mat)) && (!needsMetal(b.mat) || isMetal(a.mat));
      return { min: S.strip, zero: touch };
    }
    function rules(S) { var r = []; for (var i = 0; i <= S.items.length; i++) r.push(rule(S, S.items[i - 1] || null, S.items[i] || null)); return r; }
    function legal(g, r) { return g === 0 ? r.zero : g >= r.min; }
    function least(r) { return r.zero ? 0 : r.min; }
    function sumW(S) { return S.items.reduce(function (t, i) { return t + i.w; }, 0); }

    function whyGap(S, a, b) {
      var r = rule(S, a, b);
      if (!a || !b) {
        var it = a || b;
        if (S.edge > S.strip) return 'Your ' + say(S.base) + ' edges need to be at least ' + fmt(S.edge) + ' wide.';
        return cap(say(it.mat)) + " can't be the outside of the ring. It needs a " + say(S.base) + ' edge of at least ' + fmt(r.min) + '.';
      }
      if (needsMetal(a.mat) && needsMetal(b.mat)) return cap(say(a.mat)) + ' and ' + say(b.mat) + ' are both coated materials, so they need at least ' + fmt(r.min) + ' of metal between them.';
      var c = needsMetal(a.mat) ? a : needsMetal(b.mat) ? b : null;
      if (c) return cap(say(c.mat)) + ' is a coated material, so it needs at least ' + fmt(r.min) + ' of metal on both sides.';
      if (!r.zero) return cap(say(a.mat)) + ' and ' + say(b.mat) + ' need at least ' + fmt(r.min) + ' of metal between them.';
      return 'A strip of ' + say(S.base) + ' has to be at least ' + fmt(r.min) + ' wide.';
    }
    function problemsIn(S) {
      var p = [], g = gaps(S), R = rules(S), i;
      if (S.W < ringMin || S.W > ringMax) p.push({ code: 'ring-width', reason: 'The ring has to be between ' + fmt(ringMin) + ' and ' + fmt(ringMax) + ' wide.' });
      for (i = 0; i < S.items.length; i++) {
        var it = S.items[i];
        if (it.w < q(minWidth(it.mat))) p.push({ code: 'too-narrow', id: it.id, reason: cap(say(it.mat)) + ' needs to be at least ' + fmt(q(minWidth(it.mat))) + ' wide.' });
      }
      for (i = 0; i < g.length; i++) {
        if (g[i] < 0) { p.push({ code: 'overlap', gap: i, reason: 'Two inlays overlap.' }); continue; }
        if (!legal(g[i], R[i])) p.push({ code: 'gap', gap: i, ids: [S.items[i - 1] && S.items[i - 1].id, S.items[i] && S.items[i].id].filter(Boolean), reason: whyGap(S, S.items[i - 1] || null, S.items[i] || null) });
      }
      return p;
    }
    function done(S, moved, extra) { var r = { ok: true, state: out(S), moved: moved || [] }; for (var k in (extra || {})) r[k] = extra[k]; return r; }
    function no(code, reason, extra) { var r = { ok: false, code: code, reason: reason }; for (var k in (extra || {})) r[k] = extra[k]; return r; }
    function idx(S, id) { for (var i = 0; i < S.items.length; i++) if (S.items[i].id === id) return i; return -1; }
    function movedList(S0, S1) {
      var m = [];
      S1.items.forEach(function (i) { var o = S0.items[idx(S0, i.id)]; if (o && o.x !== i.x) m.push({ id: i.id, mat: i.mat, by: mm(i.x - o.x), text: cap(say(i.mat)) + ' moved ' + fmt(Math.abs(i.x - o.x)) + ' to the ' + (i.x > o.x ? 'right' : 'left') + ' to make room.' }); });
      return m;
    }

    function take(S, i, side, loose) {
      var T = clone(S), g = gaps(T), R = rules(T), k, j;
      if (side === 'R') {
        for (k = i + 1; k < g.length && g[k] === 0; k++);
        if (k >= g.length || !legal(g[k] - 1, R[k])) return null;
        T.items[i].w += 1; for (j = i + 1; j < k; j++) T.items[j].x += 1;
      } else {
        for (k = i; k >= 0 && g[k] === 0; k--);
        if (k < 0 || !legal(g[k] - 1, R[k])) return null;
        T.items[i].x -= 1; T.items[i].w += 1; for (j = k; j < i; j++) T.items[j].x -= 1;
      }
      var id = T.items[i].id, left = problemsIn(T).filter(function (p) { return !(loose && p.code === 'too-narrow' && p.id === id); });
      return left.length ? null : T;
    }
    function give(S, i, side) {
      var T = clone(S), g = gaps(T), k, j;
      if (side === 'R') {
        for (k = i + 1; k < g.length && g[k] === 0; k++);
        if (k >= g.length) return null;
        T.items[i].w -= 1; for (j = i + 1; j < k; j++) T.items[j].x -= 1;
      } else {
        for (k = i; k >= 0 && g[k] === 0; k--);
        if (k < 0) return null;
        T.items[i].x += 1; T.items[i].w -= 1; for (j = k; j < i; j++) T.items[j].x += 1;
      }
      return problemsIn(T).length ? null : T;
    }
    function resize(state, id, dir) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var it = S.items[i], g = gaps(S), T, order;
      if (dir > 0) {
        order = g[i + 1] >= g[i] ? ['R', 'L'] : ['L', 'R'];
        T = take(S, i, order[0]) || take(S, i, order[1]);
        if (!T) return no('no-room', 'There is no room to make ' + say(it.mat) + ' wider. ' + (S.W + ringStep <= ringMax ? 'Make the ring wider, or make another inlay narrower.' : 'Make another inlay narrower.'), { fixWidth: S.W + ringStep <= ringMax ? mm(S.W + ringStep) : null });
        return done(T, movedList(S, T));
      }
      if (it.w - 1 < q(minWidth(it.mat))) return no('min-width', cap(say(it.mat)) + ' needs to be at least ' + fmt(q(minWidth(it.mat))) + ' wide.');
      order = g[i + 1] <= g[i] ? ['R', 'L'] : ['L', 'R'];
      T = give(S, i, order[0]) || give(S, i, order[1]);
      if (!T) return no('sliver', 'Making ' + say(it.mat) + ' narrower would leave a strip of ' + say(S.base) + ' thinner than ' + fmt(S.strip) + '.');
      return done(T, movedList(S, T));
    }
    function setWidthOf(state, id, wMm) {
      var target = q(wMm), cur = state, r = null, guard = 0, i = idx(inn(cur), id);
      if (i < 0) return no('missing', 'That inlay is not in the design.');
      while (guard++ < 400) {
        var w = inn(cur).items[idx(inn(cur), id)].w; if (w === target) break;
        r = resize(cur, id, target > w ? 1 : -1); if (!r.ok) return guard > 1 ? { ok: true, state: cur, moved: [], stoppedAt: mm(w), reason: r.reason } : r;
        cur = r.state;
      }
      return { ok: true, state: cur, moved: movedList(inn(state), inn(cur)) };
    }

    function move(state, id, dir) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var g = gaps(S), R = rules(S), lead = dir > 0 ? i + 1 : i, trail = dir > 0 ? i : i + 1, it = S.items[i];
      var nb = dir > 0 ? S.items[i + 1] : S.items[i - 1];
      if (g[lead] === 0) return no('touching', nb ? cap(say(it.mat)) + ' is already against ' + say(nb.mat) + '. Use Swap to change their order.' : cap(say(it.mat)) + ' is already at the edge of the ring.');
      var maxJump = Math.max(R[lead].min, R[trail].min, 1);
      for (var k = 1; k <= maxJump && k <= g[lead]; k++) {
        if (legal(g[lead] - k, R[lead]) && legal(g[trail] + k, R[trail])) { var T = clone(S); T.items[i].x += dir * k; if (!problemsIn(T).length) return done(T, []); }
      }
      return no('blocked', dir > 0 ? whyGap(S, it, S.items[i + 1] || null) : whyGap(S, S.items[i - 1] || null, it));
    }
    function dragTo(state, id, xMm) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var it = S.items[i], lo = i ? S.items[i - 1].x + S.items[i - 1].w : 0, hi = (S.items[i + 1] ? S.items[i + 1].x : S.W) - it.w, want = q(xMm), best = null;
      var R = rules(S);
      for (var x = lo; x <= hi; x++) { if (legal(x - lo, R[i]) && legal(hi - x, R[i + 1]) && (best === null || Math.abs(x - want) < Math.abs(best - want))) best = x; }
      if (best === null) return no('blocked', 'There is nowhere else for ' + say(it.mat) + ' to go.');
      var T = clone(S); T.items[i].x = best; return done(T, [], { snappedTo: mm(best), overshoot: mm(want < lo ? want - lo : want > hi ? want - hi : 0) });
    }

    function swap(state, idA, idB) {
      var S = inn(state), a = idx(S, idA), b = idx(S, idB); if (a < 0 || b < 0 || Math.abs(a - b) !== 1) return no('not-neighbors', 'Only inlays that are next to each other can swap.');
      if (a > b) { var t = a; a = b; b = t; }
      var T = clone(S), A = T.items[a], B = T.items[b], start = A.x, mid = B.x - (A.x + A.w);
      B.x = start; A.x = start + B.w + mid; T.items[a] = B; T.items[b] = A;
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason);
      return done(T, []);
    }
    function pushPast(state, id, overshootMm) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var nb = overshootMm > 0 ? S.items[i + 1] : S.items[i - 1]; if (!nb) return no('edge', '');
      if (Math.abs(q(overshootMm)) * 2 < nb.w) return no('not-far-enough', '');
      return swap(state, id, nb.id);
    }

    function center(state) {
      var S = inn(state); if (!S.items.length) return done(S, []);
      var g = gaps(S), total = g[0] + g[g.length - 1], left = Math.floor(total / 2), d = left - g[0], T = clone(S);
      T.items.forEach(function (i) { i.x += d; });
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason);
      return done(T, movedList(S, T));
    }

    function narrowest(state) {
      var S = inn(state); if (!S.items.length) return mm(ringMin);
      var g = gaps(S), R = rules(S), spare = (g[0] - least(R[0])) + (g[g.length - 1] - least(R[g.length - 1]));
      var w = S.W - Math.max(spare, 0); w = Math.ceil(w / ringStep) * ringStep; return mm(Math.max(w, ringMin));
    }
    function setRingWidth(state, wMm) {
      var S = inn(state), W = q(wMm), d = W - S.W;
      if (W < ringMin || W > ringMax || W % ringStep) return no('ring-width', 'The ring has to be between ' + fmt(ringMin) + ' and ' + fmt(ringMax) + ' wide, in ' + fmt(ringStep) + ' steps.');
      var T = clone(S); T.W = W; if (!S.items.length || d === 0) return done(T, []);
      var g = gaps(S), R = rules(S), n = g.length - 1, half = Math.trunc(d / 2), l = g[0] + half, r = g[n] + (d - half);
      if (d < 0) {
        var aL = g[0] - least(R[0]), aR = g[n] - least(R[n]), need = -d;
        if (aL + aR < need) return no('too-narrow', 'Your inlays need a ring at least ' + fmt(q(narrowest(state))) + ' wide. To go narrower, make an inlay narrower or remove one.', { narrowest: narrowest(state) });
        var tl = Math.min(aL, Math.ceil(need / 2)), tr = need - tl; if (tr > aR) { tr = aR; tl = need - tr; }
        l = g[0] - tl; r = g[n] - tr;
        if (!legal(l, R[0]) && legal(l + 1, R[0]) && legal(r - 1, R[n])) { l += 1; r -= 1; }
        if (!legal(r, R[n]) && legal(r + 1, R[n]) && legal(l - 1, R[0])) { r += 1; l -= 1; }
      }
      var shift = l - g[0]; T.items.forEach(function (i) { i.x += shift; });
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason, { narrowest: narrowest(state) });
      return done(T, []);
    }

    function slotInfo(S, p, mat, w) {
      var N = { id: '?', mat: mat, w: w, x: 0 }, T = clone(S); T.items.splice(p, 0, N);
      var R = rules(T), need = sumW(T) + R.reduce(function (t, r) { return t + least(r); }, 0);
      return { ok: need <= S.W, spare: S.W - need, R: R };
    }
    function canAdd(state, mat) {
      var S = inn(state), minw = q(minWidth(mat)), best = -1, g = gaps(S), widest = Math.max.apply(null, g);
      for (var p = 0; p <= S.items.length; p++) { var s = slotInfo(S, p, mat, minw); if (s.ok) best = Math.max(best, minw + s.spare); }
      if (best >= minw) return { ok: true, min: mm(minw), max: mm(best) };
      var fix = null;
      for (var W = S.W + ringStep; W <= ringMax && fix === null; W += ringStep) { var S2 = clone(S); S2.W = W; for (var p2 = 0; p2 <= S2.items.length; p2++) if (slotInfo(S2, p2, mat, minw).ok) { fix = mm(W); break; } }
      return { ok: false, code: 'no-room', min: mm(minw), widest: mm(widest), fixWidth: fix,
        reason: cap(say(mat)) + ' needs at least ' + fmt(minw) + '. The widest free stretch in your band is ' + fmt(widest) + '.', fix: fix ? 'Make ring ' + fmt(q(fix)) + ' wide' : null };
    }
    function add(state, mat, wMm, newId) {
      var S = inn(state), w = Math.max(q(minWidth(mat)), q(wMm || 0)), g = gaps(S), n = S.items.length, order = [], p, k;
      for (p = 0; p <= n; p++) order.push(p);
      order.sort(function (a, b) { return g[b] - g[a] || b - a; });
      for (k = 0; k < order.length; k++) {
        p = order[k]; var info = slotInfo(S, p, mat, w); if (!info.ok) continue;
        var T = clone(S), id = newId || ('i' + Date.now().toString(36) + Math.floor(Math.random() * 1e4)), N = { id: id, mat: mat, w: w, x: 0 };
        var rl = info.R[p], rr = info.R[p + 1], start = p ? S.items[p - 1].x + S.items[p - 1].w : 0, room = g[p];
        var needRoom = w + least(rl) + least(rr);
        if (room < needRoom) {
          var E = needRoom - room, T2 = clone(S), R0 = rules(S), G = g.slice();
          var slack = function (j) { return G[j] > 0 && G[j] - 1 >= R0[j].min ? G[j] - R0[j].min : 0; };
          while (E > 0) {
            var jr = -1, jl = -1, j;
            for (j = p + 1; j <= n; j++) if (slack(j) > 0) { jr = j; break; }
            for (j = p - 1; j >= 0; j--) if (slack(j) > 0) { jl = j; break; }
            if (jr < 0 && jl < 0) break;
            if (jr >= 0 && (jl < 0 || slack(jr) >= slack(jl))) { G[jr] -= 1; for (j = p; j < jr; j++) T2.items[j].x += 1; }
            else { G[jl] -= 1; for (j = jl; j < p; j++) T2.items[j].x -= 1; start -= 1; }
            E -= 1; room += 1;
          }
          if (E > 0) continue;
          T = T2;
        }
        var free = room - w, bestL = null;
        for (var L = 0; L <= free; L++) { if (legal(L, rl) && legal(free - L, rr) && (bestL === null || Math.abs(L - free / 2) < Math.abs(bestL - free / 2))) bestL = L; }
        if (bestL === null) continue;
        N.x = start + bestL; T.items.splice(p, 0, N);
        if (problemsIn(T).length) continue;
        var moved = movedList(S, T);
        return done(T, moved, { id: id, text: cap(say(mat)) + ' added (' + fmt(w) + ').' + (moved.length ? ' ' + moved.map(function (m) { return m.text; }).join(' ') : '') });
      }
      var c = canAdd(state, mat); return no('no-room', c.reason || ('There is no room for ' + say(mat) + ' in this ring.'), { fixWidth: c.fixWidth, fix: c.fix });
    }
    function roomForAny(state, names) {
      var fix = null, ok = false, S = inn(state);
      names.forEach(function (n) { var c = canAdd(state, n); if (c.ok) ok = true; else if (c.fixWidth != null && (fix === null || c.fixWidth < fix)) fix = c.fixWidth; });
      if (ok) return { ok: true };
      return { ok: false, fixWidth: fix, reason: "There isn't room for another inlay in " + (/^(8|11)/.test(fmt(S.W)) ? 'an ' : 'a ') + fmt(S.W) + ' ring.', fix: fix != null ? 'Make ring ' + fmt(q(fix)) + ' wide' : null };
    }

    function gapInfo(state, k, metal) {
      var S = inn(state), g = gaps(S), R = rules(S); if (k < 0 || k >= g.length) return null;
      var mw = metal ? q(minWidth(metal)) : null, side = Math.max(S.strip, R[k].edge ? S.edge : 0), isEdge = !!R[k].edge;
      var leftSide = (k === 0) ? side : S.strip, rightSide = (k === g.length - 1) ? side : S.strip, pinMax = g[k] - leftSide - rightSide;
      return { index: k, width: mm(g[k]), left: S.items[k - 1] ? S.items[k - 1].id : null, right: S.items[k] ? S.items[k].id : null, isEdge: isEdge,
        canReplace: mw === null ? g[k] > 0 : g[k] >= mw, canPinstripe: mw === null ? pinMax > 0 : pinMax >= mw, pinstripeMax: mm(Math.max(pinMax, 0)),
        pinstripeWhy: 'A pinstripe needs ' + fmt(S.strip) + ' of ' + say(S.base) + ' on each side. This space is ' + fmt(g[k]) + ' wide.' };
    }
    function replaceGap(state, k, metal, newId) {
      var S = inn(state), g = gaps(S); if (k < 0 || k >= g.length || g[k] <= 0) return no('missing', 'There is no metal there.');
      if (g[k] < q(minWidth(metal))) return no('min-width', cap(say(metal)) + ' needs at least ' + fmt(q(minWidth(metal))) + '. This space is ' + fmt(g[k]) + ' wide.');
      var T = clone(S), start = k ? S.items[k - 1].x + S.items[k - 1].w : 0, id = newId || ('m' + Date.now().toString(36));
      T.items.splice(k, 0, { id: id, mat: metal, w: g[k], x: start });
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason);
      return done(T, [], { id: id });
    }
    function addPinstripe(state, k, metal, wMm, newId) {
      var S = inn(state), info = gapInfo(state, k, metal); if (!info) return no('missing', 'There is no metal there.');
      var w = Math.max(q(minWidth(metal)), q(wMm || 0)), g = gaps(S), R = rules(S);
      if (!info.canPinstripe || w > q(info.pinstripeMax)) return no('no-room', info.pinstripeWhy);
      var side = Math.max(S.strip, R[k].edge ? S.edge : 0), lmin = k === 0 ? side : S.strip, rmin = k === g.length - 1 ? side : S.strip;
      var free = g[k] - w, L = Math.floor(free / 2); if (L < lmin) L = lmin; if (free - L < rmin) L = free - rmin;
      var T = clone(S), start = k ? S.items[k - 1].x + S.items[k - 1].w : 0, id = newId || ('m' + Date.now().toString(36));
      T.items.splice(k, 0, { id: id, mat: metal, w: w, x: start + L });
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason);
      return done(T, [], { id: id });
    }

    function changeMaterial(state, id, mat) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var T = clone(S); T.items[i].mat = mat; var guard = 0, minw = q(minWidth(mat));
      while (T.items[i].w < minw && guard++ < 200) {
        var g = gaps(T), order = g[i + 1] >= g[i] ? ['R', 'L'] : ['L', 'R'], N = take(T, i, order[0], true) || take(T, i, order[1], true);
        if (!N) return no('no-room', cap(say(mat)) + ' needs at least ' + fmt(minw) + '. There is no room to make it that wide here.', { fixWidth: S.W + ringStep <= ringMax ? mm(S.W + ringStep) : null });
        T = N;
      }
      var p = problemsIn(T); if (p.length) return no('rule', p[0].reason);
      return done(T, movedList(S, T));
    }
    function remove(state, id) {
      var S = inn(state), i = idx(S, id); if (i < 0) return no('missing', 'That inlay is not in the design.');
      var T = clone(S); T.items.splice(i, 1);
      return done(T, [], { problems: problemsIn(T) });
    }
    function setBase(state, metal) {
      var S = inn(state), T = clone(S), merged = []; T.base = metal;
      T.items = T.items.filter(function (i) { if (i.mat === metal) { merged.push(i.id); return false; } return true; });
      var s2 = out(T); s2.base = metal; var S2 = inn(s2);
      return { ok: true, state: s2, merged: merged, problems: problemsIn(S2) };
    }

    function toStrips(state) {
      var S = inn(state), g = gaps(S), o = [];
      for (var i = 0; i <= S.items.length; i++) { if (g[i] > 0) o.push({ material: S.base, width: mm(g[i]) }); if (S.items[i]) o.push({ material: S.items[i].mat, width: mm(S.items[i].w) }); }
      return o;
    }
    function fromStrips(strips, base, widthMm) {
      var x = 0, inl = [], n = 0;
      strips.forEach(function (s) { if (s.material !== base) inl.push({ id: 'i' + (++n), mat: s.material, w: s.width, x: mm(x) }); x += q(s.width); });
      return { width: widthMm == null ? mm(x) : widthMm, base: base, inlays: inl };
    }
    function leftOver(state) {
      var S = inn(state), g = gaps(S); return { left: mm(g[0]), between: g.slice(1, -1).map(mm), right: mm(g[g.length - 1]) };
    }
    function describe(state, id) {
      var S = inn(state), i = idx(S, id), it = S.items[i], l = it.x, r = S.W - it.x - it.w;
      return l <= r ? fmt(l) + ' from the left edge' : fmt(r) + ' from the right edge';
    }

    function chState(blank, base) { return { base: base, blank: blank, channels: blank.parts.filter(function (p) { return !p.metal; }).map(function () { return []; }) }; }
    function chParts(s) { var c = -1; return s.blank.parts.map(function (p, i) { return p.metal ? null : { c: ++c, w: q(p.w), wallL: !!(s.blank.parts[i - 1] && s.blank.parts[i - 1].metal), wallR: !!(s.blank.parts[i + 1] && s.blank.parts[i + 1].metal) }; }).filter(Boolean); }
    function chCopy(s) { return { base: s.base, blank: s.blank, channels: s.channels.map(function (c) { return c.map(function (i) { return { id: i.id, mat: i.mat, w: i.w }; }); }) }; }
    function chFind(s, id) { for (var c = 0; c < s.channels.length; c++) for (var i = 0; i < s.channels[c].length; i++) if (s.channels[c][i].id === id) return { c: c, i: i }; return null; }
    function chFree(s, c) { return mm(chParts(s)[c].w - s.channels[c].reduce(function (t, i) { return t + q(i.w); }, 0)); }
    function chProblems(s) {
      var p = [], parts = chParts(s);
      s.channels.forEach(function (list, c) {
        var free = q(chFree(s, c));
        if (free > 0) p.push({ code: 'empty', channel: c, reason: fmt(free) + ' of the channel is empty. Make an inlay wider or add one.' });
        if (free < 0) p.push({ code: 'overfull', channel: c, reason: 'The inlays are wider than the channel.' });
        list.forEach(function (it, i) {
          if (q(it.w) < q(minWidth(it.mat))) p.push({ code: 'too-narrow', id: it.id, reason: cap(say(it.mat)) + ' needs to be at least ' + fmt(q(minWidth(it.mat))) + ' wide.' });
          var L = list[i - 1], Rn = list[i + 1];
          var okL = L ? isMetal(L.mat) : parts[c].wallL, okR = Rn ? isMetal(Rn.mat) : parts[c].wallR;
          if (needsMetal(it.mat) && (!okL || !okR)) p.push({ code: 'needs-metal', id: it.id, reason: cap(say(it.mat)) + ' is a coated material, so it needs metal on both sides.' });
          if (!L && !parts[c].wallL && !mayBeEdge(it.mat)) p.push({ code: 'rim', id: it.id, reason: cap(say(it.mat)) + " can't be the outside of the ring." });
          if (!Rn && !parts[c].wallR && free <= 0 && !mayBeEdge(it.mat)) p.push({ code: 'rim', id: it.id, reason: cap(say(it.mat)) + " can't be the outside of the ring." });
          if (Rn && pairError(it.mat, Rn.mat, s.base)) p.push({ code: 'pair', id: it.id, reason: cap(say(it.mat)) + ' and ' + say(Rn.mat) + " can't sit next to each other." });
        });
      });
      return p;
    }
    function chAdd(s, c, mat, wMm, newId) {
      var w = Math.max(q(minWidth(mat)), q(wMm || 0)), free = q(chFree(s, c));
      if (free < w) return no('full', free > 0 ? cap(say(mat)) + ' needs at least ' + fmt(q(minWidth(mat))) + '. The channel has ' + fmt(free) + ' left.' : 'The channel is full.');
      var t = chCopy(s), id = newId || ('c' + Date.now().toString(36)); t.channels[c].push({ id: id, mat: mat, w: mm(w) });
      return { ok: true, state: t, id: id, problems: chProblems(t) };
    }
    function chResize(s, id, dir) {
      var at = chFind(s, id); if (!at) return no('missing', 'That inlay is not in the design.');
      var t = chCopy(s), list = t.channels[at.c], it = list[at.i];
      if (dir < 0) { if (q(it.w) - 1 < q(minWidth(it.mat))) return no('min-width', cap(say(it.mat)) + ' needs to be at least ' + fmt(q(minWidth(it.mat))) + ' wide.'); it.w = mm(q(it.w) - 1); return { ok: true, state: t, problems: chProblems(t) }; }
      if (q(chFree(s, at.c)) >= 1) { it.w = mm(q(it.w) + 1); return { ok: true, state: t, problems: chProblems(t) }; }
      var from = [list[at.i + 1], list[at.i - 1]].filter(function (nb) { return nb && q(nb.w) - 1 >= q(minWidth(nb.mat)); });
      return no('full', 'The channel is full. To make ' + say(it.mat) + ' wider, take width from the inlay beside it.', { takeFrom: from.map(function (nb) { return { id: nb.id, label: 'Take ' + fmt(1) + ' from ' + say(nb.mat) }; }) });
    }
    function chTake(s, id, fromId) {
      var a = chFind(s, id), b = chFind(s, fromId); if (!a || !b || a.c !== b.c || Math.abs(a.i - b.i) !== 1) return no('not-neighbors', 'Only the inlay beside it can give width.');
      var t = chCopy(s), A = t.channels[a.c][a.i], B = t.channels[b.c][b.i];
      if (q(B.w) - 1 < q(minWidth(B.mat))) return no('min-width', cap(say(B.mat)) + ' needs to be at least ' + fmt(q(minWidth(B.mat))) + ' wide.');
      A.w = mm(q(A.w) + 1); B.w = mm(q(B.w) - 1); return { ok: true, state: t, problems: chProblems(t) };
    }
    function chSwap(s, idA, idB) {
      var a = chFind(s, idA), b = chFind(s, idB); if (!a || !b || a.c !== b.c || Math.abs(a.i - b.i) !== 1) return no('not-neighbors', 'Only inlays that are next to each other can swap.');
      var t = chCopy(s), l = t.channels[a.c], x = l[a.i]; l[a.i] = l[b.i]; l[b.i] = x;
      var p = chProblems(t).filter(function (e) { return e.code !== 'empty'; }); if (p.length) return no('rule', p[0].reason);
      return { ok: true, state: t, problems: chProblems(t) };
    }
    function chRemove(s, id) { var at = chFind(s, id); if (!at) return no('missing', 'That inlay is not in the design.'); var t = chCopy(s); t.channels[at.c].splice(at.i, 1); return { ok: true, state: t, problems: chProblems(t) }; }
    function chToStrips(s) {
      var o = [], c = -1;
      s.blank.parts.forEach(function (p) { if (p.metal) o.push({ material: s.base, width: p.w }); else { c++; s.channels[c].forEach(function (i) { o.push({ material: i.mat, width: i.w }); }); } });
      return o;
    }

    return {
      problems: function (state) { return problemsIn(inn(state)); },
      resize: resize, setWidthOf: setWidthOf, move: move, dragTo: dragTo, swap: swap, pushPast: pushPast, center: center,
      setRingWidth: setRingWidth, narrowest: narrowest, canAdd: canAdd, roomForAny: roomForAny, add: add,
      gapInfo: gapInfo, replaceGap: replaceGap, addPinstripe: addPinstripe, changeMaterial: changeMaterial, remove: remove, setBase: setBase,
      toStrips: toStrips, fromStrips: fromStrips, leftOver: leftOver, describe: describe,
      blank: { start: chState, free: chFree, problems: chProblems, add: chAdd, resize: chResize, take: chTake, swap: chSwap, remove: chRemove, toStrips: chToStrips },
      fmt: function (mmv) { return fmt(q(mmv)); }
    };
  }
  return { createEngine: createEngine };
});
(function(){
  'use strict';
  var NS=window.__NB_IH__=window.__NB_IH__||{};
  if(window.BandEngine&&!NS.BandEngine){ NS.BandEngine=window.BandEngine; try{ delete window.BandEngine; }catch(e){ window.BandEngine=undefined; } }
  var CH='(choose)', Q=4;
  var KEYS=['add_inlay','undo','center','width_label','move_label','swap_label','from_min','from_left','drag_tip','swap_left','swap_right',
    'empty_panel','added','moved_right','moved_left','moved_past','removed','swapped','centered','already_centered','undone','nothing_to_undo',
    'cant_move','no_room_wider','no_room_add','no_room_add_an','no_room_any','blank_fixed'];

  function B(){ try{ return typeof BUILDER!=='undefined'?BUILDER:null; }catch(e){ return null; } }
  function S(){ try{ return typeof state!=='undefined'?state:null; }catch(e){ return null; } }
  function D(){ try{ return typeof DATA!=='undefined'?DATA:null; }catch(e){ return null; } }
  function U(){ try{ return typeof undoStack!=='undefined'?undoStack:null; }catch(e){ return null; } }
  function q(mm){ return Math.round(Number(mm)*Q); }
  function onGrid(mm){ var v=Number(mm)*Q; return isFinite(v)&&Math.abs(v-Math.round(v))<1e-6; }
  function f(u){ return String(Math.round(u/Q*1000)/1000); }
  function mi(n){ var d=D(); return (d&&d.m&&d.m[n]&&d.m[n].mi)||{}; }
  function minInlay(n){ var b=B(), x=mi(n), m=parseFloat(x.solid_inlay||x.inlay_swarf||b.material_default_min_width); return Math.max(isNaN(m)?0:m,b.strip_width.min); }
  function stepOf(n){ var b=B(), v=parseFloat(((b.rules||{}).width_increment_materials||{})[n]); return v>0?v:b.strip_width.step; }
  function stepQ(n){ return Math.max(1,q(stepOf(n))); }
  function maxOf(n){ var v=parseFloat(((B().rules||{}).max_width_materials||{})[n]); return v>0?v:Infinity; }
  function maxStrips(){ var b=B(); return (b&&b.limits&&b.limits.max_strips)||20; }
  function isBlank(){ try{ var b=B(); return !!(b&&b.precut_choice&&typeof isPrecutBase==='function'&&isPrecutBase()); }catch(e){ return false; } }
  function needsMetal(n){ try{ return !!needsMetalEdges(n); }catch(e){ return false; } }

  function cfg(){
    var b=B();
    return {
      isMetal:function(){ return false; },
      needsMetal:needsMetal,
      pairError:function(a,c){ try{ return checkPairAdjacency(a,c)||null; }catch(e){ return null; } },
      mayBeEdge:function(n){ try{ return !needsMetalEdges(n)&&!needsProtectedNeighbors(n)&&(!metalEdgeRuleOn()||isPrecutBase()||isEdgeExempt(n)); }catch(e){ return true; } },
      minWidth:minInlay,
      stripMin:function(s){ var m=parseFloat(mi(s.base).edge_same_sleeve); return m>0?m:b.strip_width.min; },
      edgeMin:function(){ return 0; },
      say:function(n){ return n; },
      ringMin:b.ring_width.min, ringMax:b.ring_width.max, ringStep:b.ring_width.step
    };
  }
  function engine(){ return NS.BandEngine?NS.BandEngine.createEngine(cfg()):null; }

  function text(key,vars){
    var T=window.__NB5__&&window.__NB5__.T; if(typeof T!=='function') return '';
    vars=vars||{};
    if(vars.ring!=null&&/^(8|11)(\D|$)/.test(String(vars.ring))){ var a=T('inlays',key+'_an',vars); if(a) return a; }
    return T('inlays',key,vars);
  }
  function textsIn(){ var b=B(), t=b&&b.ui_texts&&b.ui_texts.inlays; return !!t&&KEYS.every(function(k){ return typeof t[k]==='string'&&!!t[k].trim(); }); }
  function join(a,b){ return [a,b].filter(function(x){ return !!x; }).join(' '); }

  function merge(list){
    var o=[]; list.forEach(function(s){ var l=o[o.length-1]; if(l&&l.material===s.material) l.width=parseFloat((l.width+s.width).toFixed(2)); else o.push({material:s.material,width:s.width}); });
    return o;
  }
  function formsL(L){
    var out=[], pos=0;
    L.items.forEach(function(it){ if(it.x>pos) out.push({material:L.base,width:(it.x-pos)/Q}); out.push({material:it.mat,width:it.w/Q}); pos=it.x+it.w; });
    if(L.W>pos) out.push({material:L.base,width:(L.W-pos)/Q});
    var C=merge(out), O=C.length&&C[C.length-1].material===L.base?C.slice(0,-1):C.slice();
    return { O:O, C:C };
  }
  function parse(strips,base,W){
    var x=0, items=[];
    for(var i=0;i<strips.length;i++){ var s=strips[i]; if(!s||typeof s.width!=='number'||!(s.width>0)||!onGrid(s.width)) return null;
      var u=q(s.width); if(s.material!==base) items.push({mat:s.material,w:u,x:x}); x+=u; }
    return x>W?null:{ W:W, base:base, items:items };
  }
  function copyL(L){ return { W:L.W, base:L.base, items:L.items.map(function(i){ return {mat:i.mat,w:i.w,x:i.x}; }) }; }
  function gaps(L){ var g=[], p=0; L.items.forEach(function(i){ g.push(i.x-p); p=i.x+i.w; }); g.push(L.W-p); return g; }
  function normal(L){ return parse(formsL(L).C,L.base,L.W); }
  function selAt(L,x){ for(var k=0;k<L.items.length;k++) if(x>=L.items[k].x&&x<L.items[k].x+L.items[k].w) return k; return L.items.length?0:-1; }
  function same(a,b){ return a.length===b.length&&a.every(function(s,i){ return s.material===b[i].material&&Math.abs(s.width-b[i].width)<1e-9; }); }
  function sig(){ var s=S(); return s?JSON.stringify([s.baseMetal,s.ringWidth,s.profile,s.finish,s.sleeve,s.precutStyle,s.strips]):''; }

  function val(list){
    if(typeof validateProposedStrips!=='function') return 'validator missing';
    try{ return validateProposedStrips(list.map(function(s){ return {material:s.material,width:s.width}; }))||null; }catch(e){ return String(e&&e.message||e); }
  }
  function gateL(L,base0){
    var p=0;
    for(var i=0;i<L.items.length;i++){ var it=L.items[i]; if(it.w<=0||it.x<p) return {ok:false,code:'geometry',why:null}; p=it.x+it.w; }
    if(p>L.W) return {ok:false,code:'geometry',why:null};
    var fm=formsL(L);
    if(fm.C.length>maxStrips()) return {ok:false,code:'limit',why:null};
    if(!fm.C.concat(fm.O).every(function(s){ return onGrid(s.width); })) return {ok:false,code:'grid',why:null};
    var e=val(fm.O)||val(fm.C);
    if(e&&e!==base0) return {ok:false,code:'rule',why:e};
    return {ok:true,why:e||null,f:fm};
  }

  function read(){
    var s=S(), b=B(); if(!s||!b||!s.baseMetal||!Array.isArray(s.strips)||!onGrid(s.ringWidth)) return null;
    var W=q(s.ringWidth), blank=isBlank();
    if(s.strips.some(function(x){ return !x||typeof x.width!=='number'||!(x.width>0); })) return null;
    var st=merge(s.strips);
    if(!blank&&st.some(function(x){ return x.material===CH; })) return null;
    var L=parse(st,s.baseMetal,W); if(!L) return null;
    var open=st.length&&st[st.length-1].material===s.baseMetal?st.slice(0,-1):st;
    if(!same(formsL(L).O,open)) return null;
    var fm=formsL(L);
    return { L:L, err:val(fm.O)||val(fm.C)||null, blank:blank, sig:sig(), strips:st, open:open };
  }
  function model(L,err,blank){
    return { W:L.W/Q, base:L.base, blank:!!blank, err:err||null,
      inlays:L.items.map(function(it,k){ return {k:k,mat:it.mat,w:it.w/Q,x:it.x/Q}; }) };
  }
  function fromModel(m){
    if(!m||!Array.isArray(m.inlays)||!onGrid(m.W)) return null;
    var it=[]; for(var i=0;i<m.inlays.length;i++){ var x=m.inlays[i]; if(!onGrid(x.w)||!onGrid(x.x)) return null; it.push({mat:x.mat,w:q(x.w),x:q(x.x)}); }
    it.sort(function(a,b){ return a.x-b.x; });
    return { W:q(m.W), base:m.base, items:it };
  }

  function no(code,reason,extra){ var r={ok:false,code:code,reason:reason||''}; for(var k in extra||{}) r[k]=extra[k]; return r; }
  function movedLines(L0,L1,skip){
    var out=[];
    L1.items.forEach(function(it,j){ if(j===skip) return; var o=L0.items.filter(function(a){ return a.mat===it.mat&&a.w===it.w; });
      if(!o.length) return; var best=o.reduce(function(a,b){ return Math.abs(b.x-it.x)<Math.abs(a.x-it.x)?b:a; });
      if(best.x!==it.x) out.push(text(it.x>best.x?'moved_right':'moved_left',{material:it.mat,mm:f(Math.abs(it.x-best.x))})); });
    return out.filter(Boolean);
  }
  function done(c,L2,g,atX,line,extra){
    var N=normal(L2)||L2, r={ ok:true, model:model(N,g.why,c.blank), sel:atX==null?(N.items.length?0:-1):selAt(N,atX), line:line||'', strips:g.f.O, sig:c.sig, rule:g.why||null, changed:!same(g.f.O,c.open) };
    for(var k in extra||{}) r[k]=extra[k];
    return r;
  }
  function first(cands,base0){
    var why=null;
    for(var i=0;i<cands.length;i++){ var g=gateL(cands[i],base0); if(g.ok) return {L:cands[i],g:g}; if(!why&&g.why) why=g.why; }
    return {why:why};
  }
  function with1(L,i,x,w,mat){ var T=copyL(L); if(x!=null) T.items[i].x=x; if(w!=null) T.items[i].w=w; if(mat!=null) T.items[i].mat=mat; return T; }

  function edgeFree(n){ return cfg().mayBeEdge(n); }
  function touchOk(a,b){ var c=cfg(); return !c.pairError(a,b)&&!needsMetal(a)&&!needsMetal(b); }
  function addCands(c,mat){
    var L=c.L, st=stepQ(mat), w=Math.ceil(q(minInlay(mat))/st)*st, g=gaps(L), n=L.items.length, order=[], p;
    for(p=0;p<=n;p++) order.push(p);
    order.sort(function(a,b){ return g[b]-g[a]||b-a; });
    var plain=[], slide=[];
    order.forEach(function(p){
      var start=p?L.items[p-1].x+L.items[p-1].w:0, room=g[p]; if(room<w) return;
      var free=room-w, pos=[]; for(var l=0;l<=free;l++) pos.push(l);
      pos.sort(function(a,b){ return Math.abs(a-free/2)-Math.abs(b-free/2)||a-b; });
      pos.forEach(function(l){ var T=copyL(L); T.items.splice(p,0,{mat:mat,w:w,x:start+l}); plain.push({L:T,x:start+l,wide:g[p]===Math.max.apply(null,g)}); });
    });
    if(L.W-L.items.reduce(function(a,i){ return a+i.w; },0)>=w){
      try{ var E=engine(), r=E&&E.add({width:L.W/Q,base:L.base,inlays:L.items.map(function(it,k){ return {id:'i'+k,mat:it.mat,w:it.w/Q,x:it.x/Q}; })},mat,w/Q,'nbih-new');
        if(r&&r.ok){ var T=parse(E.toStrips(r.state),L.base,L.W), nx=r.state.inlays.filter(function(i){ return i.id==='nbih-new'; })[0]; if(T&&nx) slide.push({L:T,x:q(nx.x),m:-1}); } }catch(e){}
      var sm=cfg().stripMin({base:L.base});
      [0,1].forEach(function(variant){
        order.forEach(function(p,rank){
          for(var x0=0;x0+w<=L.W;x0++){
            var T=copyL(L), nw={mat:mat,w:w,x:x0}; T.items.splice(p,0,nw);
            var mg=function(a,b){ if(!a) return edgeFree(b.mat)?0:q(sm); if(!b) return edgeFree(a.mat)?0:q(sm); return !variant&&touchOk(a.mat,b.mat)?0:q(sm); };
            var ok=true, j;
            for(j=p-1;j>=0&&ok;j--){ var R=T.items[j+1], it=T.items[j], need=R.x-mg(it,R)-it.w; if(it.x>need) it.x=need; if(it.x<0) ok=false; }
            for(j=p+1;j<T.items.length&&ok;j++){ var Lf=T.items[j-1], it2=T.items[j], need2=Lf.x+Lf.w+mg(Lf,it2); if(it2.x<need2) it2.x=need2; if(it2.x+it2.w>L.W) ok=false; }
            if(!ok) continue;
            var mv=0; for(j=0;j<n;j++){ var o=L.items[j], t=T.items[j<p?j:j+1]; mv+=Math.abs(t.x-o.x); }
            if(mv>0) slide.push({L:T,x:nw.x,m:mv,rank:rank,mid:Math.abs(x0-((p?L.items[p-1].x+L.items[p-1].w:0)+g[p]/2-w/2))});
          }
        });
      });
      slide.sort(function(a,b){ return (a.m<0?-1:0)-(b.m<0?-1:0)||a.m-b.m||a.rank-b.rank||a.mid-b.mid; });
    }
    return { w:w, list:plain.concat(slide) };
  }
  function addedShort(mat,mm,base){
    var Z='\u0001', t=text('added',{material:mat,mm:mm,base:Z}), i=t.indexOf(Z), cut=i>0?t.lastIndexOf(',',i):-1;
    if(i<0||cut<=0) return '';
    return t.slice(0,cut).replace(/\s+$/,'')+t.slice(i+1).replace(/^[^.!?]*/,'');
  }
  function addHere(c,mat,p){
    var L=c.L, st=stepQ(mat), w=Math.ceil(q(minInlay(mat))/st)*st, g=gaps(L), n=L.items.length, plain=[], slide=[];
    var start=p?L.items[p-1].x+L.items[p-1].w:0, room=g[p], end=start+room, l, x0, j;
    if(room>=w){ var free=room-w, pos=[]; for(l=0;l<=free;l++) pos.push(l);
      pos.sort(function(a,b){ return Math.abs(a-free/2)-Math.abs(b-free/2)||a-b; });
      pos.forEach(function(l){ var T=copyL(L); T.items.splice(p,0,{mat:mat,w:w,x:start+l}); plain.push({L:T,x:start+l}); }); }
    if(L.W-L.items.reduce(function(a,i){ return a+i.w; },0)>=w){
      var sm=cfg().stripMin({base:L.base}), lo=Math.max(0,Math.min(start,end-w)), hi=Math.min(L.W-w,Math.max(start,end-w)), mid=start+room/2-w/2;
      [0,1].forEach(function(variant){
        for(x0=lo;x0<=hi;x0++){
          var T=copyL(L), nw={mat:mat,w:w,x:x0}; T.items.splice(p,0,nw);
          var mg=function(a,b){ if(!a) return edgeFree(b.mat)?0:q(sm); if(!b) return edgeFree(a.mat)?0:q(sm); return !variant&&touchOk(a.mat,b.mat)?0:q(sm); };
          var ok=true;
          for(j=p-1;j>=0&&ok;j--){ var R=T.items[j+1], it=T.items[j], need=R.x-mg(it,R)-it.w; if(it.x>need) it.x=need; if(it.x<0) ok=false; }
          for(j=p+1;j<T.items.length&&ok;j++){ var Lf=T.items[j-1], it2=T.items[j], need2=Lf.x+Lf.w+mg(Lf,it2); if(it2.x<need2) it2.x=need2; if(it2.x+it2.w>L.W) ok=false; }
          if(!ok) continue;
          var mv=0; for(j=0;j<n;j++){ var o=L.items[j], t=T.items[j<p?j:j+1]; mv+=Math.abs(t.x-o.x); }
          if(mv>0) slide.push({L:T,x:x0,m:mv,mid:Math.abs(x0-mid)});
        }
      });
      slide.sort(function(a,b){ return a.m-b.m||a.mid-b.mid||a.x-b.x; });
    }
    return { w:w, list:plain.concat(slide) };
  }
  function addAt(c,mat,p){
    var n=c.L.items.length, g=gaps(c.L);
    if(!(p>=0&&p<=n&&p===Math.floor(p))||!(g[p]>0)) return no('missing','');
    var A=addHere(c,mat,p), why=null, clean=null, sm=q(cfg().stripMin({base:c.L.base}));
    for(var i=0;i<A.list.length;i++){ var C0=A.list[i], g1=gateL(C0.L,c.err);
      if(g1.ok){ var idx=C0.L.items.indexOf(C0.L.items.filter(function(it){ return it.x===C0.x&&it.mat===mat; })[0]), mv=movedLines(c.L,C0.L,idx);
        return done(c,C0.L,g1,C0.x,[addedShort(mat,f(A.w),c.L.base)].concat(mv).filter(Boolean).join(' '),{width:A.w/Q,at:p}); }
      if(g1.why){ if(!why) why=g1.why; if(!clean&&!gaps(C0.L).some(function(x){ return x>0&&x<sm; })) clean=g1.why; } }
    why=clean||why;
    return no(why?'rule':'room',why||text('no_room_here',{material:mat,mm:f(A.w),base:c.L.base}),{rule:why,width:A.w/Q,at:p});
  }
  function add(c,mat,at){
    if(!mat||mat===c.L.base) return no('missing','');
    if(c.blank) return no('dialog','');
    if(at!=null) return addAt(c,mat,+at);
    var A=addCands(c,mat), why=null;
    for(var i=0;i<A.list.length;i++){ var g=gateL(A.list[i].L,c.err); if(g.ok){
        var N=normal(A.list[i].L)||A.list[i].L, k=selAt(N,A.list[i].x), mv=movedLines(c.L,A.list[i].L,A.list[i].L.items.indexOf(A.list[i].L.items.filter(function(it){ return it.x===A.list[i].x&&it.mat===mat; })[0]));
        return done(c,A.list[i].L,g,A.list[i].x,[A.list[i].wide?text('added',{material:mat,mm:f(A.w),base:c.L.base}):addedShort(mat,f(A.w),c.L.base)].concat(mv).filter(Boolean).join(' '),{width:A.w/Q}); }
      if(!why&&g.why) why=g.why; }
    return no(why?'rule':'room',join(text('no_room_add',{material:mat,mm:f(A.w),ring:f(c.L.W)}),why),{rule:why,width:A.w/Q});
  }

  function move(c,k,dir){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    if(c.blank) return no('blank',text('blank_fixed',{base:L.base}));
    dir=dir<0?-1:1;
    var lo=k?L.items[k-1].x+L.items[k-1].w:0, hi=(L.items[k+1]?L.items[k+1].x:L.W)-it.w, cands=[];
    for(var x=it.x+dir;x>=lo&&x<=hi;x+=dir) cands.push(with1(L,k,x));
    var r=first(cands,c.err);
    if(r.L) return done(c,r.L,r.g,r.L.items[k].x,'');
    var sm=q(cfg().stripMin({base:L.base})), why=null;
    for(var i=0;i<cands.length&&!why;i++){ var gs=gaps(cands[i]); if(gs.some(function(g){ return g>0&&g<sm; })) continue; var g1=gateL(cands[i],c.err); if(!g1.ok&&g1.why) why=g1.why; }
    why=why||r.why;
    return no(why?'rule':'edge',join(text('cant_move'),why),{rule:why});
  }
  function drag(c,k,xMm){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    if(c.blank) return no('blank',text('blank_fixed',{base:L.base}),{over:(q(xMm)-it.x)/Q});
    var want=q(xMm), lo=k?L.items[k-1].x+L.items[k-1].w:0, hi=(L.items[k+1]?L.items[k+1].x:L.W)-it.w, xs=[];
    for(var x=lo;x<=hi;x++) xs.push(x);
    xs.sort(function(a,b){ return Math.abs(a-want)-Math.abs(b-want)||Math.abs(a-it.x)-Math.abs(b-it.x); });
    var over=(want<lo?want-lo:want>hi?want-hi:0)/Q, r=first(xs.map(function(x){ return with1(L,k,x); }),c.err);
    if(r.L) return done(c,r.L,r.g,r.L.items[k].x,'',{over:over,x:r.L.items[k].x/Q});
    return no(r.why?'rule':'edge',join(text('cant_move'),r.why),{rule:r.why,over:over});
  }
  function swapL(c,a,b){
    var L=c.L, A=L.items[a], Bt=L.items[b], start=A.x, end=Bt.x+Bt.w, mid=Bt.x-(A.x+A.w), span=end-start-A.w-Bt.w, cands=[];
    for(var m=0;m<=span;m++) for(var off=0;off+m<=span;off++){ var T=copyL(L); T.items[a]={mat:Bt.mat,w:Bt.w,x:start+off}; T.items[b]={mat:A.mat,w:A.w,x:start+off+Bt.w+m}; cands.push({T:T,d:Math.abs(m-mid),off:off,m:m}); }
    cands.sort(function(p,r){ return p.d-r.d||(p.m===mid?p.off-r.off:0)||p.off-r.off; });
    return first(cands.map(function(x){ return x.T; }),c.err);
  }
  function noQ(c,k){ var it=c.L.items[k]; return c.blank&&it&&it.mat===CH; }
  function pickFirst(){ var T=window.__NB5__&&window.__NB5__.T; return no('pick',typeof T==='function'?T('inlay_dialog','pick_first'):''); }
  function blankIx(c,k){ var n=-1; for(var i=0;i<c.strips.length;i++){ if(c.strips[i].material!==c.L.base){ n++; if(n===k) return i; } } return -1; }
  function blankDone(c,list,k,line){
    var lim=list.length>maxStrips(), e=lim?null:val(list);
    if(lim) return no('limit','');
    if(e&&e!==c.err) return no('rule',e,{rule:e});
    var L=parse(merge(list),c.L.base,c.L.W)||c.L;
    return { ok:true, model:model(L,e,true), sel:Math.min(k,L.items.length-1), line:line||'', strips:list, sig:c.sig, rule:e||null };
  }
  function swap(c,k,j){
    var L=c.L; if(!L.items[k]||!L.items[j]||Math.abs(k-j)!==1) return no('missing','');
    var line=text('swapped',{material:L.items[k].mat,inlays:L.items[j].mat});
    if(noQ(c,k)||noQ(c,j)) return pickFirst();
    if(c.blank){ var si=blankIx(c,k), sj=blankIx(c,j); if(si<0||Math.abs(si-sj)!==1) return no('blank',text('blank_fixed',{base:L.base}));
      var a=c.strips.map(function(s){ return {material:s.material,width:s.width}; }), t=a[si]; a[si]=a[sj]; a[sj]=t; return blankDone(c,a,j,line); }
    var lo=Math.min(k,j), r=swapL(c,lo,lo+1);
    if(r.L) return done(c,r.L,r.g,r.L.items[j].x,line);
    return no('rule',r.why||text('cant_move'),{rule:r.why});
  }
  function push(c,k,overMm){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    var j=overMm>0?k+1:k-1, nb=L.items[j]; if(!nb) return no('edge','');
    if(Math.abs(q(overMm))*2<nb.w) return no('not-far','');
    var r=swap(c,k,j); if(r.ok) r.line=text('moved_past',{material:it.mat,inlays:nb.mat});
    return r;
  }
  function center(c){
    var L=c.L; if(!L.items.length) return no('empty',text('empty_panel'));
    if(c.blank) return no('blank',text('blank_fixed',{base:L.base}));
    var g=gaps(L), g0=g[0], gn=g[g.length-1], d=Math.floor((g0+gn)/2)-g0;
    if(d===0) return no('centered',text('already_centered'));
    var sh=[]; for(var s=-g0;s<=gn;s++) if(s!==0&&Math.abs((g0+s)-(gn-s))<Math.abs(g0-gn)) sh.push(s);
    sh.sort(function(a,b){ return Math.abs(a-d)-Math.abs(b-d)||b-a; });
    var r=first(sh.map(function(s){ var T=copyL(L); T.items.forEach(function(i){ i.x+=s; }); return T; }),c.err);
    if(r.L) return done(c,r.L,r.g,r.L.items[0].x,text('centered'));
    return no('rule',r.why||text('cant_move'),{rule:r.why});
  }
  function stepL(L,i,dir,side,st){
    var T=copyL(L), g=gaps(T), k, j;
    if(dir>0){
      if(side==='R'){ for(k=i+1;k<g.length&&g[k]===0;k++); if(k>=g.length||g[k]<st) return null; T.items[i].w+=st; for(j=i+1;j<k;j++) T.items[j].x+=st; }
      else { for(k=i;k>=0&&g[k]===0;k--); if(k<0||g[k]<st) return null; T.items[i].x-=st; T.items[i].w+=st; for(j=k;j<i;j++) T.items[j].x-=st; }
    } else {
      if(T.items[i].w-st<=0) return null;
      if(side==='R'){ for(k=i+1;k<g.length&&g[k]===0;k++); if(k>=g.length) return null; T.items[i].w-=st; for(j=i+1;j<k;j++) T.items[j].x-=st; }
      else { for(k=i;k>=0&&g[k]===0;k--); if(k<0) return null; T.items[i].x+=st; T.items[i].w-=st; for(j=k;j<i;j++) T.items[j].x+=st; }
    }
    return T;
  }
  function sides(L,i,dir){ var g=gaps(L); return dir>0?(g[i+1]>=g[i]?['R','L']:['L','R']):(g[i+1]<=g[i]?['R','L']:['L','R']); }
  function resizeL(c,L,k,dir){
    var it=L.items[k], st=stepQ(it.mat), w2=it.w+(dir>0?st:-st);
    var cands=sides(L,k,dir).map(function(s){ return stepL(L,k,dir,s,st); }).filter(Boolean), r=first(cands,c.err);
    if(r.L) return r;
    if(dir>0&&w2/Q>maxOf(it.mat)+1e-9){
      var sm=cfg().stripMin({base:L.base}), why=r.why||val([{material:L.base,width:sm},{material:it.mat,width:w2/Q},{material:L.base,width:sm}]);
      return {code:'max',why:why,reason:why||text('no_room_wider',{material:it.mat})}; }
    if(dir<0&&w2/Q<minInlay(it.mat)-1e-9){ var mn=gateL(with1(L,k,null,w2),c.err); return {code:'min',why:mn.why,reason:mn.why||''}; }
    return {code:r.why?'rule':'room',why:r.why,reason:join(dir>0?text('no_room_wider',{material:it.mat}):text('cant_move'),r.why)};
  }
  function blankWidth(c,k,wantMm){
    var si=blankIx(c,k), P=window.__V2_CHANNELS__; if(si<0||!P||typeof P.plan!=='function') return no('blank','');
    var p; try{ p=P.plan(si,wantMm); }catch(e){ p={error:''}; }
    if(!p||p.error!==undefined||!p.strips) return no('rule',(p&&p.error)||'',{rule:(p&&p.error)||null});
    return blankDone(c,p.strips.map(function(s){ return {material:s.material,width:s.width}; }),k,'');
  }
  function resize(c,k,dir){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    if(noQ(c,k)) return pickFirst();
    if(c.blank) return blankWidth(c,k,(it.w+(dir>0?1:-1)*stepQ(it.mat))/Q);
    var r=resizeL(c,L,k,dir>0?1:-1);
    if(r.L) return done(c,r.L,r.g,r.L.items[k].x,movedLines(L,r.L,k).join(' '));
    return no(r.code,r.reason,{rule:r.why||null});
  }
  function setWidth(c,k,mmv){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    var st=stepQ(it.mat), t=Math.round(Number(mmv)*Q/st)*st;
    if(!(t>0)) return no('min','');
    if(c.blank) return blankWidth(c,k,t/Q);
    if(noQ(c,k)) return no('dialog','');
    if(t===it.w) return no('same','');
    var cur=L, last=null, guard=0;
    while(cur.items[k].w!==t&&guard++<400){
      var r=resizeL(c,cur,k,t>cur.items[k].w?1:-1);
      if(!r.L){ if(!last) return no(r.code,r.reason,{rule:r.why||null}); return done(c,last.L,last.g,last.L.items[k].x,movedLines(L,last.L,k).join(' '),{stoppedAt:last.L.items[k].w/Q,reason:r.reason}); }
      last=r; cur=r.L;
    }
    return done(c,last.L,last.g,last.L.items[k].x,movedLines(L,last.L,k).join(' '));
  }
  function remove(c,k){
    var L=c.L, it=L.items[k]; if(!it) return no('missing','');
    if(noQ(c,k)) return no('dialog','');
    var line=text('removed',{material:it.mat,base:L.base});
    if(c.blank){ var si=blankIx(c,k); if(si<0) return no('missing','');
      var a=c.strips.map(function(s){ return {material:s.material,width:s.width}; }); a[si]={material:CH,width:a[si].width};
      var e=val(a), M=parse(merge(a),L.base,L.W)||L; return { ok:true, model:model(M,e,true), sel:0, line:line, strips:a, sig:c.sig, rule:e||null }; }
    var T=copyL(L); T.items.splice(k,1);
    var R=first([T].concat(removeCands(T,k)),c.err), all=null;
    if(!R.L){ all=everyPlace(T); if(all&&all.length) R=first(all,c.err); }
    if(R.L){ var N1=normal(R.L)||R.L; return { ok:true, model:model(N1,R.g.why,false), sel:N1.items.length?0:-1, line:[line].concat(movedLines(L,R.L,-1)).filter(Boolean).join(' '), strips:R.g.f.O, sig:c.sig, rule:R.g.why||null }; }
    var fm=formsL(T), e2=val(fm.O)||val(fm.C)||null, N=normal(T)||T, out={ ok:true, model:model(N,e2,false), sel:N.items.length?0:-1, line:join(line,e2&&e2!==c.err?e2:''), strips:fm.O, sig:c.sig, rule:e2 };
    if(all&&e2) out.noValid=true;
    return out;
  }
  function everyPlace(T){
    var n=T.items.length, F=T.W-T.items.reduce(function(a,i){ return a+i.w; },0), cnt=1, i;
    if(F<0) return null;
    for(i=1;i<=n;i++){ cnt=cnt*(F+i)/i; if(cnt>5000) return null; }
    var out=[];
    (function rec(j,x,left,S){
      if(j===n){ out.push(S); return; }
      for(var g=0;g<=left;g++){ var C=copyL(S); C.items[j].x=x+g; rec(j+1,x+g+C.items[j].w,left-g,C); }
    })(0,0,F,copyL(T));
    return out;
  }
  function removeCands(T,k){
    var a=k-1, b=k, A=T.items[a], Bn=T.items[b], lo=A?A.x+A.w:0, hi=Bn?Bn.x:T.W, hole=hi-lo, n=T.items.length,
      sm=q(cfg().stripMin({base:T.base})), cap=Math.min(T.W,Math.max(sm,hole)+4), og=gaps(T), out=[], seen={};
    function shift(S,i,dx,floor){
      if(!dx) return true; var it=S.items[i]; it.x+=dx; var j;
      if(dx>0){ for(j=i+1;j<n;j++){ var need=S.items[j-1].x+S.items[j-1].w+floor(og[j]); if(S.items[j].x<need) S.items[j].x=need; else break; } return S.items[n-1].x+S.items[n-1].w<=S.W; }
      for(j=i-1;j>=0;j--){ var need2=S.items[j+1].x-floor(og[j+1])-S.items[j].w; if(S.items[j].x>need2) S.items[j].x=need2; else break; } return S.items[0].x>=0;
    }
    function put(S,kind,side){ var key=S.items.map(function(i){ return i.x; }).join(','); if(seen[key]) return; seen[key]=1;
      var mv=0; S.items.forEach(function(i,j){ mv+=Math.abs(i.x-T.items[j].x); }); if(mv) out.push({L:S,m:mv,kind:kind,side:side}); }
    var floors=[function(g){ return Math.min(g,sm); },function(g){ return g; },function(){ return 0; }];
    for(var d=1;d<=cap;d++) for(var l=0;l<=d;l++){ var r=d-l; if((l&&!A)||(r&&!Bn)) continue;
      floors.forEach(function(fl){ var S=copyL(T); if((!r||shift(S,b,r,fl))&&(!l||shift(S,a,-l,fl))) put(S,0,l); }); }
    if(hole>0&&(A&&Bn?touchOk(A.mat,Bn.mat)&&A.mat!==Bn.mat:A?edgeFree(A.mat):Bn?edgeFree(Bn.mat):false))
      for(var t=0;t<=hole;t++){ if((t&&!A)||(hole-t&&!Bn)) continue; var S2=copyL(T); if(A) S2.items[a].x+=t; if(Bn) S2.items[b].x-=hole-t; put(S2,1,t); }
    out.sort(function(p,s){ return p.m-s.m||p.kind-s.kind||p.side-s.side; });
    return out.map(function(x){ return x.L; });
  }
  function change(c,k,mat){
    var L=c.L, it=L.items[k]; if(!it||!mat||mat===L.base) return no('missing','');
    if(c.blank) return no('dialog','');
    var st=stepQ(mat), t=Math.max(Math.ceil(it.w/st)*st,Math.ceil(q(minInlay(mat))/st)*st), base=with1(L,k,null,null,mat), cands=[];
    if(t===it.w) cands.push(base);
    else [['more'],['R'],['L'],['alt']].forEach(function(mode){
      var T=base, n=0, ok=true;
      while(T.items[k].w<t&&ok&&n++<200){ var s=mode[0]==='more'?sides(T,k,1):mode[0]==='alt'?(n%2?['R','L']:['L','R']):[mode[0]], N=null;
        for(var i=0;i<s.length&&!N;i++) N=stepL(T,k,1,s[i],Math.min(1,t-T.items[k].w)); if(N) T=N; else ok=false; }
      if(ok) cands.push(T); });
    var r=first(cands,c.err);
    if(r.L) return done(c,r.L,r.g,r.L.items[k].x,movedLines(L,r.L,k).join(' '));
    return no(r.why?'rule':'room',join(text('no_room_wider',{material:mat}),r.why),{rule:r.why});
  }

  var memo={s:null,m:{}};
  function cached(key,fn){ var s=sig(); if(memo.s!==s) memo={s:s,m:{}}; if(!(key in memo.m)) memo.m[key]=fn(); return memo.m[key]; }
  function offered(){
    var d=D(), s=S(), b=B(); if(!d||!d.m||!s) return [];
    var dis=(b.disabled_materials||[]), r=b.rules||{}, lists=[].concat(r.flexible_memorial_materials||[],r.needs_metal_edges_materials||[],r.protected_neighbor_materials||[],r.coated_materials||[],
      r.metal_edge_exempt_materials||[],Object.keys(r.width_increment_materials||{}),Object.keys(r.max_width_materials||{}),[r.whale_bone_material]), seen={}, out=[];
    Object.keys(d.m).forEach(function(n){
      if(n===s.baseMetal||dis.indexOf(n)>=0) return;
      try{ if(typeof stripRuleBlock==='function'&&stripRuleBlock(n)) return; }catch(e){}
      var m=d.m[n], key=lists.indexOf(n)>=0?n:JSON.stringify([m.g,m.s,/crushed/i.test(n),minInlay(n)]);
      if(!seen[key]){ seen[key]=1; out.push(n); } });
    return out.sort(function(a,b){ return minInlay(a)-minInlay(b); });
  }
  function canOf(r){ return {ok:!!(r&&r.ok),reason:r&&!r.ok?r.reason:''}; }

  function run(fn){ return function(){ var c=read(); if(!c) return no('off',''); var a=[c].concat([].slice.call(arguments)); return fn.apply(null,a); }; }
  var act={ add:run(add), move:run(move), drag:run(drag), push:run(push), swap:run(swap), center:run(center), resize:run(resize), setWidth:run(setWidth), remove:run(remove), change:run(change) };

  function on(){
    try{
      if(!NS.BandEngine||!window.__NB5__||typeof window.__NB5__.on!=='function'||!window.__NB5__.on()) return false;
      if(!textsIn()) return false;
      return !!read();
    }catch(e){ return false; }
  }
  function commit(r){
    if(!r||!r.ok||!Array.isArray(r.strips)||r.sig!==sig()||r.changed===false) return false;
    var s=S(); if(!s) return false;
    var before=NS.core.sel;
    try{ pushUndo(); }catch(e){}
    try{ var u0=U(); if(u0&&u0.length) selOf.set(u0[u0.length-1],before); }catch(e){}
    s.strips=r.strips.map(function(x){ return {material:x.material,width:x.width}; });
    s.selectedStrip=-1;
    var col=document.getElementById('controlsCol');
    try{ if(col) renderComposePanel(col); }catch(e){ if(window.console) console.error('inlay handling:',e); }
    try{ renderRing(); }catch(e){}
    try{ updatePrice(); }catch(e){}
    try{ (col||document.body).dispatchEvent(new Event('change')); }catch(e){}
    NS.core.sel=typeof r.sel==='number'?r.sel:-1;
    return true;
  }
  var selOf=typeof WeakMap==='function'?new WeakMap():{ set:function(){}, get:function(){} };
  function look(list){ var s=S(), m=merge((list||[]).filter(function(x){ return x&&x.width>0; })); if(s&&m.length&&m[m.length-1].material===s.baseMetal) m.pop(); return JSON.stringify(m.map(function(x){ return [x.material,Math.round(x.width*1000)]; })); }
  function realStep(){ var u=U(), s=S(); if(!u||!s) return -1; var now=look(s.strips); for(var i=u.length-1;i>=0;i--) if(look(u[i].strips)!==now) return i; return -1; }
  function undo(){
    var u=U(), i=realStep(); if(!u||!u.length||i<0) return no('nothing',text('nothing_to_undo'));
    var entry=u[i], was=selOf.get(entry);
    try{ while(u.length>i+1) u.pop(); undoAction(); }catch(e){ return no('error',''); }
    try{ var col=document.getElementById('controlsCol'); (col||document.body).dispatchEvent(new Event('change')); }catch(e){}
    var c=read(), n=c?c.L.items.length:0, k=typeof was==='number'&&was>=0?was:NS.core.sel;
    NS.core.sel=n?Math.min(Math.max(k,0),n-1):-1;
    return { ok:true, line:text('undone'), sel:NS.core.sel, model:c?model(c.L,c.err,c.blank):null };
  }
  function audit(r){ try{ if(r&&!r.ok&&r.rule) ringAudit.record('validation','composer_rule_blocked',{message:r.rule}); }catch(e){} }

  NS.core={
    KEYS:KEYS.slice(), sel:-1,
    on:on,
    model:function(){ var c=read(); return c?model(c.L,c.err,c.blank):null; },
    gate:function(m){ var c=read(), L=fromModel(m); if(!L) return {ok:false,code:'grid',reason:''}; var g=gateL(L,c?c.err:null); return {ok:g.ok,code:g.ok?'':g.code,reason:g.why||''}; },
    forms:function(m){ var L=fromModel(m); return L?formsL(L):null; },
    act:act,
    can:{
      add:function(mat,at){ return cached('a:'+mat+(at!=null?':'+at:''),function(){ return canOf(at!=null?act.add(mat,at):act.add(mat)); }); },
      any:function(){ return cached('any',function(){ var c=read(); if(!c) return {ok:false,reason:''}; if(c.blank) return {ok:true,reason:''};
        var l=offered(); for(var i=0;i<l.length;i++) if(add(c,l[i]).ok) return {ok:true,reason:''}; return {ok:false,reason:text('no_room_any')}; }); },
      move:function(k,d){ return cached('m:'+k+':'+d,function(){ return canOf(act.move(k,d)); }); },
      resize:function(k,d){ return cached('r:'+k+':'+d,function(){ return canOf(act.resize(k,d)); }); },
      swap:function(k,j){ return cached('s:'+k+':'+j,function(){ return canOf(act.swap(k,j)); }); },
      center:function(){ return cached('c',function(){ return canOf(act.center()); }); },
      undo:function(){ return realStep()>=0?{ok:true,reason:''}:{ok:false,reason:text('nothing_to_undo')}; }
    },
    commit:commit, undo:undo, audit:audit,
    preview:function(mat){ return act.add(mat); },
    text:text
  };
})();

(function(){
  'use strict';
  var NS=window.__NB_IH__=window.__NB_IH__||{}, core=NS.core; if(!core) return;
  var CH='(choose)', TH=6, GOLD='nb-ih-sel';
  var st={ msg:'', sr:'', broken:false, drag:null, done:false, msgEl:null };
  function N5(){ return window.__NB5__||null; }
  function I(k,v){ var n=N5(); return n&&typeof n.T==='function'?n.T('inlays',k,v):''; }
  function X(k,v){ return core.text(k,v); }
  function fm(x){ return String(Math.round(Number(x)*1000)/1000); }
  function look(m){ var n=N5(); try{ return n&&n.look?n.look(m)||'':''; }catch(e){ return ''; } }
  function S(){ try{ return typeof state!=='undefined'?state:null; }catch(e){ return null; } }
  function col(){ return document.getElementById('controlsCol'); }
  function el(t,c,x){ var e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e; }
  function at(e,o){ for(var k in o) if(o[k]!=null&&o[k]!=='') e.setAttribute(k,o[k]); return e; }
  function nm(m){ return m===CH?'?':m; }
  function staff(){ try{ return typeof _staffMode!=='undefined'&&!!_staffMode&&typeof bindStaffPrice==='function'; }catch(e){ return false; } }
  function minOf(n){ try{ var b=BUILDER, x=(DATA.m[n]||{}).mi||{}, v=parseFloat(x.solid_inlay||x.inlay_swarf||b.material_default_min_width); return Math.max(isNaN(v)?0:v,b.strip_width.min); }catch(e){ return 0; } }
  function on(){ return !st.broken&&!!core.on(); }
  function rm(c){ [].slice.call(c.querySelectorAll(':scope>.nb-ih')).forEach(function(e){ if(e.__nbih&&e.__nbih.ro) e.__nbih.ro.disconnect(); e.remove(); }); }
  function openOf(list){ var s=S(), o=[]; (list||[]).forEach(function(x){ var l=o[o.length-1]; if(l&&l.material===x.material) l.width+=x.width; else o.push({material:x.material,width:x.width}); });
    if(s&&o.length&&o[o.length-1].material===s.baseMetal) o.pop(); return o; }
  function same(a,b){ return a.length===b.length&&a.every(function(s,i){ return s.material===b[i].material&&Math.abs(s.width-b[i].width)<1e-9; }); }

  function msgEl(){ if(!st.msgEl){ var m=at(el('div','nb-ih nb-ih-msg'),{'aria-live':'polite'}); m.append(el('span','nb-ih-mt'),el('span','nb-ih-sr')); st.msgEl=m; } return st.msgEl; }
  function say(t,sr){ st.msg=t||''; st.sr=sr||''; var m=msgEl(); if(m.firstChild.textContent!==st.msg) m.firstChild.textContent=st.msg; if(m.lastChild.textContent!==st.sr) m.lastChild.textContent=st.sr; }
  function sigNow(){ var s=S(); try{ return s?JSON.stringify([s.baseMetal,s.ringWidth,s.profile,s.finish,s.sleeve,s.precutStyle,s.strips]):null; }catch(e){ return null; } }
  function mark(){ st.lastSig=sigNow(); }

  function parts(m){ var o=[], p=0, n=m.inlays.length;
    m.inlays.forEach(function(it,i){ if(it.x>p+1e-9) o.push({mat:m.base,w:it.x-p,x:p,k:-1,g:i}); o.push({mat:it.mat,w:it.w,x:it.x,k:it.k}); p=it.x+it.w; });
    if(m.W>p+1e-9||!o.length) o.push({mat:m.base,w:m.W-p,x:p,k:-1,g:n});
    return o; }
  function metalOn(){ try{ var t=BUILDER.ui_texts.inlays; return ['metal_here','no_room_here'].every(function(k){ return typeof t[k]==='string'&&!!t[k].trim(); }); }catch(e){ return false; } }
  function gapsOf(m){ var g=[], p=0; m.inlays.forEach(function(i){ g.push(i.x-p); p=i.x+i.w; }); g.push(m.W-p); return g; }
  function msOf(m,g){ var n=m.inlays.length; return { g:g, lm:g>0?m.inlays[g-1].mat:null, rm:g<n?m.inlays[g].mat:null }; }
  function msFind(m){
    var s=st.ms; if(!s||!m||m.blank||!metalOn()) return -1;
    var G=gapsOf(m), n=m.inlays.length, best=-1;
    for(var g=0;g<=n;g++){ if(!(G[g]>1e-9)) continue; if((g?m.inlays[g-1].mat:null)!==s.lm||(g<n?m.inlays[g].mat:null)!==s.rm) continue; if(best<0||Math.abs(g-s.g)<Math.abs(best-s.g)) best=g; }
    return best;
  }
  var msU=typeof WeakMap==='function'?new WeakMap():{ set:function(){}, get:function(){} };
  function UQ(){ try{ return typeof undoStack!=='undefined'?undoStack:null; }catch(e){ return null; } }
  function pc(x,W){ return (x/W*100)+'%'; }

  function mkBar(m,k,live,msp){
    var mz=!!live&&!m.blank&&metalOn();
    var blk=el('div','nb-ih nb-ih-blk'), pin=el('div','nb-ih-pin'), wrap=el('div','nb-ih-wrap'),
      bar=at(el('div','nb-ih-bar'),{role:'group','aria-label':I('band_label')}), ml=at(el('div','nb-ih-ml'),{'aria-hidden':mz?null:'true'}),
      tip=at(el('div','nb-ih-tip'),{'aria-hidden':'true'}), nums=at(el('div','nb-ih-nums'),{'aria-hidden':'true'}),
      ends=at(el('div','nb-ih-ends'),{'aria-hidden':'true'}), lay=el('div','nb-ih-lay');
    tip.hidden=true; bar.style.background=look(m.base); bar.append(ml);
    ends.append(el('span',null,I('role_left_edge')),el('span',null,I('role_right_edge')));
    wrap.append(bar,tip); pin.append(wrap,nums); blk.append(pin,ends,lay);
    var els=m.inlays.map(function(it){ var b=at(el('div','nb-ih-in'+(it.mat===CH?' nb-ih-q':'')),{role:live?'button':null,'data-nbih':live?'b'+it.k:null});     if(it.mat===CH) b.textContent='?'; else b.style.background=look(it.mat); bar.append(b); return b; });
    var R={blk:blk,bar:bar,ml:ml,tip:tip,nums:nums,lay:lay,els:els,live:live,mz:mz,msp:msp>=0?msp:-1};
    blk.__nbih=R;
    if(window.ResizeObserver){ R.ro=new ResizeObserver(function(){ if(live&&blk.parentElement) top(blk.parentElement); fit(R); }); R.ro.observe(nums); var vp=live&&document.getElementById('v2-price'); if(vp) R.ro.observe(vp); if(live) ['aside.v2-preview','#nbPcSteps'].forEach(function(q){ var a=document.querySelector(q); if(a) R.ro.observe(a); }); }    
    upd(R,m,k);
    if(live){ bar.addEventListener('pointerdown',down); bar.addEventListener('pointermove',move); bar.addEventListener('pointerup',up); bar.addEventListener('pointercancel',up);
      bar.addEventListener('lostpointercapture',function(e){ var d=st.drag; if(d&&d.id===e.pointerId&&d.R===R) up(e); });
      bar.addEventListener('keydown',keys); }
    if(staff()&&live) parts(m).forEach(function(p){ var e=p.k>=0?els[p.k]:null; if(!e){ e=[].filter.call(ml.children,function(z){ return +z.getAttribute('data-x')===p.x; })[0]; }
      try{ if(e&&p.mat!==CH) bindStaffPrice(e,'title','strip',p.mat,p.w,p.mat+' '+fm(p.w)+'mm: '); }catch(x){} });
    return blk;
  }
  function upd(R,m,k,tipOn){
    var W=m.W, P=parts(m);
    var ms=R.msp>=0?R.msp:-1, t0=ms>=0?'m'+ms:m.inlays.length?'b'+(k<0?0:k):R.mz?'m0':'';
    R.ml.textContent=''; P.forEach(function(p){ if(p.k>=0) return; var e=el('div','nb-ih-mp'); e.style.left=pc(p.x,W); e.style.width=pc(p.w,W); e.style.background=look(p.mat); e.setAttribute('data-x',p.x); e.setAttribute('data-g',p.g);
      if(p.g===ms) e.classList.add(GOLD);
      if(R.mz){ e.classList.add('nb-ih-mz'); at(e,{role:'button','data-nbih':'m'+p.g,tabindex:t0==='m'+p.g?'0':'-1','aria-pressed':String(p.g===ms),'aria-label':I('piece_aria',{material:p.mat,width:fm(p.w)})||p.mat}); }
      R.ml.append(e); });
    m.inlays.forEach(function(it,i){ var b=R.els[i]; if(!b) return; b.style.left=pc(it.x,W); b.style.width=pc(it.w,W); b.classList.toggle(GOLD,i===k);
      if(R.live){ at(b,{'data-k':i,'data-nbih':'b'+i,tabindex:t0==='b'+i?'0':'-1','aria-pressed':String(i===k),'aria-label':I('piece_aria',{material:nm(it.mat),width:fm(it.w)})||nm(it.mat)}); } });
    R.nums.textContent=''; P.forEach(function(p){ var s=el('span',null,fm(p.w)); s.setAttribute('data-c',(p.x+p.w/2)/W*100); R.nums.append(s); });
    R.lay.textContent=''; P.forEach(function(p){ var x=el('span','nb-ih-pc'+(p.mat===CH?' nb-ih-pq':'')), i=el('i'); if(p.mat!==CH) i.style.background=look(p.mat); x.append(i,el('span',null,nm(p.mat)+' '),el('b',null,fm(p.w))); R.lay.append(x); });
    R.lw=-1;
    if(tipOn&&k>=0&&m.inlays[k]){ var it=m.inlays[k]; R.tip.hidden=false; R.tip.textContent=X('drag_tip',{mm:fm(it.x)}); var ww=R.bar.clientWidth, c=(it.x+it.w/2)/W*ww, tw=R.tip.offsetWidth; R.tip.style.left=Math.max(0,Math.min(ww-tw,c-tw/2))+'px'; }
    else R.tip.hidden=true;
    fit(R);
  }
  var RH=20;
  function fit(R){
    var n=R.nums; if(!n.isConnected){ requestAnimationFrame(function(){ if(n.isConnected) fit(R); }); return; }
    var W=n.clientWidth, rows=[-1e9,-1e9,-1e9], mx=0; if(!W||W===R.lw) return; R.lw=W;
    [].forEach.call(n.children,function(s){ var w=s.offsetWidth, c=parseFloat(s.getAttribute('data-c'))/100*W, l=Math.max(0,Math.min(W-w,c-w/2)), r=0;
      while(r<2&&l<rows[r]+6) r++; rows[r]=l+w; s.style.left=l+'px'; s.style.top=(r*RH)+'px'; if(r>mx) mx=r; });
    n.style.height=(RH*(mx+1))+'px';
    if(R.live&&R.blk.parentElement) pinH(R.blk.parentElement);
  }

  function btn(cls,key,txt,fn,aria){ var b=at(el('button','nb-ih-b'+(cls?' '+cls:''),txt),{type:'button','data-nbih':key,'aria-label':aria}); b.onclick=function(e){ e.preventDefault(); e.stopPropagation(); say(''); try{ fn(); }catch(x){ fail(x); } }; return b; }
  function grey(b,c){ if(c&&!c.ok){ b.setAttribute('aria-disabled','true'); b.classList.add('nb-ih-dis'); if(c.reason) b.title=c.reason; } return b; }
  function run(r,k){
    if(!r) return;
    if(r.ok){ var line=[r.line,r.stoppedAt!=null?r.reason:''].filter(Boolean).join(' '); say(line); var ok=core.commit(r); mark(); if(!ok) paint(); return; }
    if(r.code==='dialog') return pick(k);
    say(r.reason||''); core.audit(r);
  }
  function picked(r){ if(!r||!r.ok) return; var u=UQ(); if(r.at!=null&&st.msOpen&&u&&u.length) msU.set(u[u.length-1],st.msOpen); st.msOpen=null; st.ms=null;
    if(typeof r.sel==='number') core.sel=r.sel; say(r.line||''); mark(); paint(); }
  function pick(k){
    var P=NS.picker, r=null, g=k==null?msFind(core.model()):-1;
    st.msOpen=g>=0?st.ms:null;
    try{ r=k!=null?P.openChange(k,picked):g>=0?P.openAdd(picked,g):P.openAdd(picked); }catch(e){ if(window.console) console.error('inlay handling picker:',e); }
    if(r&&!r.ok) say(r.reason||'');
  }

  function mkTools(m){
    var row=el('div','nb-ih nb-ih-tools'), anyOk=core.can.any();
    row.append(grey(btn('nb-ih-main','add',X('add_inlay'),function(){ pick(null); }),anyOk),
      grey(btn('','undo',X('undo'),function(){ var u=UQ(), u0=u?u.slice():[], r=core.undo(); if(r.ok&&u){ var w=msU.get(u0[u.length]); if(w) st.ms=w; } mark(); say(r.ok?r.line:r.reason); }),core.can.undo()),
      grey(btn('','center',X('center'),function(){ var k=core.sel; run(core.act.center()); if(k>=0) core.sel=k; }),core.can.center()));
    return row;
  }
  function mkPanel(m,k){
    var p=at(el('div','nb-ih nb-ih-panel'),{role:'group'});
    if(k<0){ p.classList.add('nb-ih-empty'); p.append(el('div','nb-ih-where',X('empty_panel'))); return p; }
    var it=m.inlays[k], q=it.mat===CH, prev=m.inlays[k-1], next=m.inlays[k+1];
    p.setAttribute('aria-label',nm(it.mat));
    var h=el('div','nb-ih-h'), hl=el('span','nb-ih-hl'), sw=el('i','nb-ih-sw'+(q?' nb-ih-pq':'')), mn=q?'':X('from_min',{mm:fm(minOf(it.mat))});
    if(!q) sw.style.background=look(it.mat);
    var nb=btn('nb-ih-name','name',null,function(){ pick(k); },[nm(it.mat),I('change_material')].filter(Boolean).join(', ')); at(sw,{'aria-hidden':'true'}); nb.append(sw,el('span',null,nm(it.mat))); hl.append(nb);
    if(mn) hl.append(el('span','nb-ih-where',mn));
    h.append(hl,btn('nb-ih-link','rm',I('remove'),function(){ run(core.act.remove(k),k); })); p.append(h);
    var lb=function(t){ return el('span','nb-ih-lb',t); };
    var w=el('div','nb-ih-row'), box=at(el('input','nb-ih-val'),{type:'text',inputmode:'decimal','data-nbih':'wv','aria-label':I('width_aria'),autocomplete:'off'});
    box.value=fm(it.w);
    box.onkeydown=function(e){ e.stopPropagation(); if(e.key==='Enter'){ e.preventDefault(); box.blur(); } else if(e.key==='Escape') box.value=fm(it.w); };
    box.onchange=function(){ say(''); var v=parseFloat(String(box.value).replace(',','.')); if(!(v>0)){ box.value=fm(it.w); return; } var r=core.act.setWidth(k,v); if(!r.ok&&r.code==='same'){ box.value=fm(it.w); return; } if(!r.ok) box.value=fm(it.w); run(r,k); };
    w.append(lb(X('width_label')),grey(btn('nb-ih-sq','w-','−',function(){ run(core.act.resize(k,-1),k); },I('narrower')),core.can.resize(k,-1)),box,
      grey(btn('nb-ih-sq','w+','+',function(){ run(core.act.resize(k,1),k); },I('wider')),core.can.resize(k,1)),el('span','nb-ih-where','mm'));
    p.append(w);
    var mv=el('div','nb-ih-row');
    mv.append(lb(X('move_label')),grey(btn('nb-ih-sq','m-','←',function(){ run(core.act.move(k,-1),k); },I('move_left')),core.can.move(k,-1)),
      grey(btn('nb-ih-sq','m+','→',function(){ run(core.act.move(k,1),k); },I('move_right')),core.can.move(k,1)),el('span','nb-ih-where nb-ih-pos',X('from_left',{mm:fm(it.x)})));
    p.append(mv);
    if(prev||next){ var sr=el('div','nb-ih-row'); sr.append(lb(X('swap_label')));
      [[prev,k-1,'swap_left','sl'],[next,k+1,'swap_right','sr']].forEach(function(a){ if(!a[0]) return; var t=X(a[2],{material:nm(a[0].mat)}); if(!t) return;
        var b=btn('nb-ih-swap',a[3],null,function(){ var r=core.act.swap(k,a[1]); st.fk=r&&r.ok?(a[3]==='sr'?'sl':'sr'):null; run(r,k); });     b.append(at(el('span','nb-ih-ic','⇆'),{'aria-hidden':'true'}),document.createTextNode(' '+t)); sr.append(grey(b,core.can.swap(k,a[1]))); });
      p.append(sr); }
    return p;
  }
  function mkMetal(m,g){
    var w=gapsOf(m)[g], p=at(el('div','nb-ih nb-ih-panel nb-ih-mpanel'),{role:'group','aria-label':m.base}), h=el('div','nb-ih-h'), hl=el('span','nb-ih-hl'),
      nmE=el('span','nb-ih-mn'), sw=at(el('i','nb-ih-sw'),{'aria-hidden':'true'});
    sw.style.background=look(m.base); nmE.append(sw,el('span',null,m.base)); hl.append(nmE,el('span','nb-ih-where',fm(w)+'mm')); h.append(hl); p.append(h);
    var r1=el('div','nb-ih-row nb-ih-mh'); r1.append(el('span',null,I('metal_here'))); p.append(r1);
    var r2=el('div','nb-ih-row'); r2.append(grey(btn('nb-ih-main','padd',X('add_inlay'),function(){ pick(null); }),core.can.any())); p.append(r2);
    return p;
  }
  function selectMetal(g){ var m=core.model(); if(!m||g<0||g>m.inlays.length) return; st.ms=msOf(m,g); core.sel=-1; say(''); paint(); }

  function hideOld(c){
    [].forEach.call(c.querySelectorAll(':scope>p:not([class])'),function(e){ e.classList.add('nb-ih-x'); });
    [].forEach.call(c.querySelectorAll(':scope>.validation-msg.info'),function(e){ if(/remaining/i.test(e.textContent)) e.classList.add('nb-ih-x'); });
  }
  function box(e){ for(var p=e.parentElement;p&&p!==document.body&&p!==document.documentElement;p=p.parentElement){ var s=getComputedStyle(p); if(/auto|scroll|hidden/.test(s.overflowY+s.overflowX)) return p; } return null; }
  function top(c){
    var v=0, b=document.body;
    try{ var sp=box(c), s0=sp?sp.getBoundingClientRect().top+sp.clientTop:0, cr=c.getBoundingClientRect();
      ['aside.v2-preview','#nbPcSteps','.v2-header'].forEach(function(q){ var a=document.querySelector(q), cs=a&&getComputedStyle(a); if(!cs||cs.display==='none'||!a.offsetHeight) return;
        var r=a.getBoundingClientRect(); if(!(r.left<cr.right&&r.right>cr.left)) return;
        if(cs.position==='fixed') v=Math.max(v,r.bottom-s0); else if(cs.position==='sticky'&&box(a)===sp) v=Math.max(v,a.offsetHeight+(parseFloat(cs.top)||0)); });
      v=Math.round(v*100)/100;
      var bg='', e=c; for(;e&&e!==document.documentElement;e=e.parentElement){ var x=getComputedStyle(e).backgroundColor; if(x&&x!=='transparent'&&!/,\s*0\)$/.test(x)){ bg=x; break; } }
      c.style.setProperty('--nb-ih-top',v+'px'); if(bg) c.style.setProperty('--nb-ih-bg',tok(c,bg)||bg); }catch(e){}
    pinH(c);
  }
  var TOKS=['--nb-bg','--nb-card','--nb-soft','--nb-sel','--nb-soft2'];
  function tok(c,bg){
    var p=document.createElement('div'); p.style.display='none'; c.append(p);
    try{ for(var i=0;i<TOKS.length;i++){ p.style.backgroundColor='var('+TOKS[i]+')'; if(getComputedStyle(p).backgroundColor===bg) return 'var('+TOKS[i]+')'; } }finally{ p.remove(); }
    return '';
  }
  function pinH(c){
    try{ var b=c.querySelector(':scope>.nb-ih-blk'), pc=document.body.classList.contains('nb-pc'), pin=b&&b.querySelector('.nb-ih-pin'), lay=b&&b.querySelector('.nb-ih-lay'); if(!pin) return;
      var u=0; ['v2-price','nbStepBar'].forEach(function(id){ var p=document.getElementById(id), s=p&&getComputedStyle(p); if(s&&s.display!=='none'&&p.offsetHeight&&/fixed|sticky/.test(s.position)) u=Math.max(u,(parseFloat(s.bottom)||0)+p.offsetHeight); });
      var sp=box(c), H=sp?sp.clientHeight:innerHeight, v=parseFloat(c.style.getPropertyValue('--nb-ih-top'))||0, ph=pin.offsetHeight;
      var f0=b.querySelector('.nb-ih-ends')||lay;
      if(ph){ var free=H-v-u, full=lay?ph+(parseFloat(getComputedStyle(f0).marginTop)||0)+lay.getBoundingClientRect().bottom-f0.getBoundingClientRect().top+4:ph+4, md=pc&&free-full>=240?'pf':free-ph>=130?'pp':'np';
        ['pf','pp','np'].forEach(function(x){ c.classList.toggle('nb-ih-'+x,x===md); }); }
      var md2=c.classList.contains('nb-ih-np')?'np':c.classList.contains('nb-ih-pp')?'pp':pc?'pf':'pp', e=md2==='pf'?b:pin;
      var se=sp||document.documentElement, ss=getComputedStyle(se), pt=parseFloat(ss.scrollPaddingTop)||0, pb=parseFloat(ss.scrollPaddingBottom)||0;
      var t=md2==='np'?v:(parseFloat(getComputedStyle(e).top)||0)+e.offsetHeight; c.style.setProperty('--nb-ih-smt',Math.max(0,Math.ceil(t+8-pt))+'px');
      c.style.setProperty('--nb-ih-smb',Math.max(0,Math.ceil(u+8-pb))+'px');
      var sc=c.closest('.studio-controls'), ap=c.closest('.v2-app'), a0=(ap?parseFloat(getComputedStyle(ap).paddingBottom)||0:0)+(parseFloat(getComputedStyle(document.body).paddingBottom)||0), d=Math.ceil(u+12-a0);
      if(sc&&!pc){ sc.style.setProperty('--nb-ih-pb',Math.max(0,d)+'px'); sc.style.setProperty('--nb-ih-mb',Math.min(0,d)+'px'); sc.style.setProperty('--nb-ih-mh',Math.max(0,Math.floor(innerHeight-a0-(parseFloat(getComputedStyle(c).getPropertyValue('--nb-ih-top'))||0)))+'px'); }
      else if(sc) ['pb','mb','mh'].forEach(function(k){ sc.style.removeProperty('--nb-ih-'+k); });     }catch(x){}
  }
  function paint(key){
    var c=col(); if(!c||!on()){ if(c){ c.classList.remove('nb-ih-on'); rm(c); } return; }
    var m=core.model(); if(!m) return;
    if(key===undefined){ var a=document.activeElement; key=a&&c.contains(a)?a.getAttribute('data-nbih'):null; }
    c.classList.add('nb-ih-on'); hideOld(c); rm(c);
    var g=msFind(m); if(g<0) st.ms=null; else st.ms=msOf(m,g);
    var n=m.inlays.length, k=core.sel; if(g>=0) k=-1; else if(!(k>=0&&k<n)) k=n?0:-1; core.sel=k;
    var wc=c.querySelector(':scope>.width-control'), first=c.querySelector(':scope>.composer-actions')||c.firstChild,
      tools=mkTools(m), blk=mkBar(m,k,true,g), ms=msgEl(), pan=g>=0?mkMetal(m,g):mkPanel(m,k);
    if(wc) wc.after(tools); else if(first) first.before(tools); else c.append(tools);
    tools.after(blk); blk.after(ms); ms.after(pan);
    var sg=sigNow(); if(st.lastSig!=null&&sg!==st.lastSig){ st.msg=''; st.sr=''; } st.lastSig=sg;
    say(st.msg,st.sr);
    var r={l:pan}; ['.staff-item-prices','#v2-edge-note','.validation-msg:not(.nb-ih-x)'].forEach(function(s){ [].forEach.call(c.querySelectorAll(':scope>'+s),function(e){ r.l.after(e); r.l=e; }); });
    top(c); fit(blk.__nbih);
    var fk=st.fk; st.fk=null;
    var t=fk?(c.querySelector('[data-nbih="'+fk+'"]')||blk.__nbih.els[k]):key&&c.querySelector('[data-nbih="'+key+'"]'); if(t) try{ t.focus({preventScroll:true}); }catch(e){}
  }
  function select(k){ st.ms=null; core.sel=k; say(''); paint(); }
  function fail(e){
    if(window.console) console.error('inlay handling screen:',e);
    st.broken=true; st.drag=null; var c=col(); if(c){ c.classList.remove('nb-ih-on'); rm(c); }
    try{ __V2_ROUTER__.rerenderSection('compose'); }catch(x){}
  }

  function virt(d,fn){ var s=S(), keep=s.strips; s.strips=d.cur; try{ return fn(); } finally{ s.strips=keep; } }
  function down(e){
    if(st.drag||(e.pointerType==='mouse'&&e.button!==0)) return;
    var t=e.target.closest&&e.target.closest('.nb-ih-in');
    if(!t){ var mp=e.target.closest&&e.target.closest('.nb-ih-mp'); st.mt=mp?{ id:e.pointerId, x:e.clientX, y:e.clientY, g:+mp.getAttribute('data-g'), z:mp.classList.contains('nb-ih-mz') }:null; return; }
    var R=(t.closest('.nb-ih-blk')||{}).__nbih, m=core.model(), k=+t.getAttribute('data-k'); if(!R||!m||!m.inlays[k]) return;
    st.drag={ id:e.pointerId, R:R, k:k, x0:e.clientX, mm0:m.inlays[k].x, ppm:R.bar.clientWidth/m.W, on:false, cur:S().strips.map(function(x){ return {material:x.material,width:x.width}; }),
      last:null, model:m, why:null, els:R.els.slice() };
    try{ R.bar.setPointerCapture(e.pointerId); }catch(x){}
  }
  function move(e){
    var d=st.drag; if(!d||e.pointerId!==d.id) return;
    var dx=e.clientX-d.x0;
    if(!d.on){ if(Math.abs(dx)<TH) return; d.on=true; st.ms=null; d.R.msp=-1; core.sel=d.k; say(''); d.els[d.k].classList.add('nb-ih-drag'); }
    var want=d.mm0+dx/d.ppm, r=virt(d,function(){ return core.act.drag(d.k,want); });
    if(r.ok){ d.last=r; d.model=r.model; if(!d.pushed) d.sig0=r.sig; }
    var over=r.over||0;
    if(over){ var p=virt(d,function(){ return core.act.push(d.k,over); });
      if(p.ok){ var j=p.sel, A=d.els; if(!d.pushed) d.sig0=p.sig; d.pushed=true;
        if(p.model.inlays.length===A.length&&A[j]){ var t=A[d.k]; A[d.k]=A[j]; A[j]=t; } else { d.els=A=rebuild(d,p.model); }
        A.forEach(function(b,i){ b.classList.toggle('nb-ih-drag',i===j); });
        d.cur=p.strips.map(function(x){ return {material:x.material,width:x.width}; }); d.k=j; d.last=p; d.model=p.model; d.mm0=p.model.inlays[j].x; d.x0=e.clientX; d.why=null;
        say(p.line); }
      else if(p.reason&&!/^(not-far|edge|missing)$/.test(p.code)) d.why=p; }
    d.R.els=d.els; upd(d.R,d.model,d.k,true);
    var pos=document.querySelector('#controlsCol .nb-ih-pos'), it=d.model.inlays[d.k]; if(pos&&it) pos.textContent=X('from_left',{mm:fm(it.x)});
  }
  function rebuild(d,m){ var R=d.R; R.els.forEach(function(b){ b.remove(); }); return m.inlays.map(function(it){ var b=el('div','nb-ih-in'+(it.mat===CH?' nb-ih-q':'')); if(it.mat===CH) b.textContent='?'; else b.style.background=look(it.mat); R.bar.append(b); return b; }); }
  function up(e){
    var mt=st.mt; if(mt&&mt.id===e.pointerId){ st.mt=null;
      if(e.type==='pointerup'&&Math.abs(e.clientX-mt.x)<TH&&Math.abs(e.clientY-mt.y)<TH){ if(mt.z) selectMetal(mt.g); else { var m0=core.model(); if(m0&&m0.blank) say(X('blank_fixed',{base:m0.base})); } }
      return; }
    var d=st.drag; if(!d||e.pointerId!==d.id) return;
    st.drag=null; try{ d.R.bar.releasePointerCapture(d.id); }catch(x){}
    if(!d.on){ if(e.type==='pointerup') select(d.k); return; }
    var s=S(), L=d.last, it=d.model.inlays[d.k], line=st.msg;
    if(L&&!same(L.strips,openOf(s.strips))){
      var res={ ok:true, strips:L.strips, sig:d.sig0, sel:L.sel, line:'', changed:true };
      if(d.why) line=[line,d.why.reason].filter(Boolean).join(' ');
      say(line,it?[nm(it.mat)+':',X('from_left',{mm:fm(it.x)})].join(' '):'');
      if(d.why) core.audit(d.why);
      var ok=core.commit(res); mark(); if(!ok) paint();
      return; }
    say(d.why?d.why.reason:'',''); if(d.why) core.audit(d.why); core.sel=d.k; paint();
  }
  function drop(){ var d=st.drag; if(!d) return; st.drag=null; try{ d.R.bar.releasePointerCapture(d.id); }catch(x){} say(''); paint(); }

  function keys(e){
    var t=e.target; if(!t.classList||!(t.classList.contains('nb-ih-in')||t.classList.contains('nb-ih-mz'))) return;
    var R=(t.closest('.nb-ih-blk')||{}).__nbih; if(!R) return;
    var L=R.els.concat([].slice.call(R.ml.querySelectorAll('.nb-ih-mz'))).sort(function(a,b){ return parseFloat(a.style.left)-parseFloat(b.style.left); }),
      n=L.length, k=L.indexOf(t), j=k; if(k<0) return;
    if(e.key==='ArrowLeft') j=Math.max(0,k-1); else if(e.key==='ArrowRight') j=Math.min(n-1,k+1); else if(e.key==='Home') j=0; else if(e.key==='End') j=n-1;
    else if(e.key==='Enter'||e.key===' '){ e.preventDefault(); if(t.classList.contains('nb-ih-mz')) selectMetal(+t.getAttribute('data-g')); else select(+t.getAttribute('data-k')); return; } else return;
    e.preventDefault(); if(j!==k&&L[j]){ L.forEach(function(b,i){ b.setAttribute('tabindex',i===j?'0':'-1'); }); L[j].focus(); }
  }

  function draw(key){
    var c=col(); if(!c) return;
    if(st.drag) st.drag=null;
    if(!on()){ c.classList.remove('nb-ih-on'); rm(c); return; }
    paint(key);
  }
  function install(){
    if(st.done||typeof renderComposePanel!=='function') return; st.done=true;
    var inner=renderComposePanel;
    renderComposePanel=function(){ var a=document.activeElement, c=col(), key=a&&c&&c.contains(a)?a.getAttribute('data-nbih'):null, r=inner.apply(this,arguments);
      Promise.resolve().then(function(){ try{ draw(key); }catch(e){ fail(e); } }); return r; };
    document.addEventListener('keydown',function(e){ if(st.drag&&e.key==='Escape'){ e.preventDefault(); e.stopPropagation(); drop(); } },true);
    var rz=0, rz2=0, re=function(){ var c=col(), b=c&&c.querySelector(':scope>.nb-ih-blk'); if(b&&b.__nbih){ top(c); fit(b.__nbih); } },
      sz=function(){ if(!rz) rz=requestAnimationFrame(function(){ rz=0; re(); }); clearTimeout(rz2); rz2=setTimeout(re,150); };
    addEventListener('resize',sz); try{ if(window.visualViewport) visualViewport.addEventListener('resize',sz); }catch(e){}
    try{ new MutationObserver(function(){ re(); clearTimeout(rz2); rz2=setTimeout(re,150); }).observe(document.body,{attributes:true,attributeFilter:['class']}); }catch(e){}
    var th=function(){ var c=col(), b=c&&c.querySelector(':scope>.nb-ih-blk'); if(b&&b.__nbih) top(c); };
    try{ new MutationObserver(th).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme','class']}); }catch(e){}
    try{ var mq=matchMedia('(prefers-color-scheme: dark)'); mq.addEventListener?mq.addEventListener('change',th):mq.addListener(th); }catch(e){}
    try{ var R0=ringAudit.record; if(typeof R0==='function'&&!R0.__nbih){ var rw=function(t,n,p){ try{ if(t==='navigation'&&(n==='section_closed'||(n==='section_opened'&&p&&p.to!=='compose'))) clearMsg(); }catch(e){} return R0.apply(this,arguments); }; rw.__nbih=true; ringAudit.record=rw; } }catch(e){}
    taps();
  }
  function clearMsg(){ st.msg=''; st.sr=''; if(st.msgEl){ st.msgEl.firstChild.textContent=''; st.msgEl.lastChild.textContent=''; } }
  function taps(){
    var tp=null, pend=null, lastScroll=-1e9, now=function(){ return performance.now(); };
    addEventListener('scroll',function(){ lastScroll=now(); },{passive:true});
    document.addEventListener('pointerdown',function(e){ tp=null; if(e.pointerType!=='touch'||!e.target.closest) return;
      var b=e.target.closest('#controlsCol .nb-ih-b, #controlsCol .nb-ih-val'); if(b) tp={b:b,id:e.pointerId,x:e.clientX,y:e.clientY,t:now(),clicked:false,synth:0}; },true);
    document.addEventListener('pointercancel',function(e){ if(tp&&tp.id===e.pointerId) tp=null; },true);
    document.addEventListener('pointerup',function(e){ var p=tp; if(!p||p.id!==e.pointerId) return; tp=null;
      if(now()-p.t>700||Math.abs(e.clientX-p.x)>12||Math.abs(e.clientY-p.y)>12||lastScroll>p.t-250) return;
      pend=p; setTimeout(function(){ if(pend!==p||p.clicked||!p.b.isConnected||lastScroll>p.t-250) return; p.synth=now();
        try{ if(p.b.tagName==='INPUT') p.b.focus(); else p.b.click(); }catch(x){} },150); },true);
    document.addEventListener('click',function(e){ var p=pend; if(!p||!p.b.contains(e.target)) return;
      if(!e.isTrusted) return;
      if(p.synth){ if(now()-p.synth<800){ e.stopPropagation(); e.preventDefault(); } pend=null; return; }
      p.clicked=true; },true);
  }
  NS.screen={
    on:on, say:say, paint:function(){ paint(); }, select:select,
    bar:function(m,k,g){ return mkBar(m,k==null?-1:k,false,g==null?-1:g); }
  };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',install):install();
})();
(function(){
  'use strict';
  var NS=window.__NB_IH__=window.__NB_IH__||{};
  if(NS.picker) return;
  var CH='(choose)';
  var M=null;
  var OLD=null;
  function C(){ return NS.core||null; }
  function N(){ return window.__NB5__||null; }
  function S(){ try{ return typeof state!=='undefined'?state:null; }catch(e){ return null; } }
  function DA(){ try{ return typeof DATA!=='undefined'?DATA:null; }catch(e){ return null; } }
  function ov(){ return document.getElementById('addStripModal'); }
  function inn(){ return document.getElementById('addStripModalInner'); }
  function isOpen(){ var o=ov(); return !!(o&&o.classList.contains('open')); }
  function no(code,reason){ return {ok:false,code:code,reason:reason||''}; }
  function say(t){ try{ if(t) showRuleToast(t); }catch(e){} }
  function stop(e){ e.preventDefault(); e.stopPropagation(); }
  function matOf(c){ var e=c&&c.querySelector('.name'), t=e?e.textContent.trim():'', d=DA(); if(!d||!t) return null; if(d.m[t]) return t;
    for(var k=t.lastIndexOf(' (');k>0;k=t.lastIndexOf(' (',k-1)) if(d.m[t.slice(0,k)]) return t.slice(0,k); return null; }
  function stripIx(m,k){ var s=S(), it=m&&m.inlays[k]; if(!s||!it) return -1; var x=0;
    for(var i=0;i<s.strips.length;i++){ var t=s.strips[i]; if(t.material!==s.baseMetal&&Math.abs(x-it.x)<1e-6) return i; x+=t.width; } return -1; }
  function startX(si){ var s=S(), x=0; for(var i=0;i<si;i++) x+=s.strips[i].width; return x; }
  function done(fn,r){ if(typeof fn==='function') try{ fn(r); }catch(e){ if(window.console) console.error('inlay picker:',e); } }

  function openOld(si,fn){
    var s=S(); OLD={ snap:JSON.stringify(s.strips), x:startX(si), done:fn };
    try{ openEditStripModal(si); }catch(e){ OLD=null; return no('error',''); }
    if(!isOpen()){ OLD=null; return no('blank',''); }
    return {ok:true,mode:'old'};
  }
  function oldClosed(){
    var o=OLD; OLD=null; var s=S(), c=C(); if(!o||!s||!c||JSON.stringify(s.strips)===o.snap) return;
    var m=c.model(), k=-1; if(m) m.inlays.forEach(function(it,i){ if(k<0&&o.x>=it.x-1e-6&&o.x<it.x+it.w-1e-6) k=i; });
    done(o.done,{ ok:true, old:true, model:m, sel:k<0?(m&&m.inlays.length?0:-1):k, line:'' });
  }
  function widestQ(){ var s=S(), b=-1; s.strips.forEach(function(t,i){ if(t.material===CH&&(b<0||t.width>s.strips[b].width)) b=i; }); return b; }

  function ready(){ var c=C(); if(!c||!c.on()) return no('off',''); if(isOpen()) return no('busy',''); M=null; OLD=null; return null; }
  function openAdd(fn,at){
    var c=C(), x=ready(); if(x) return x;
    var m=c.model(); if(!m) return no('off','');
    if(m.blank){ var q=widestQ(); return q<0?no('room',c.text('no_room_any')):openOld(q,fn); }
    var any=c.can.any(); if(!any.ok) return no('room',any.reason);
    var s=S(), keep=s.strips, sel=s.selectedStrip;
    M={ kind:'add', k:-1, si:-1, cur:null, pick:null, reason:'', done:fn, at:at!=null&&at>=0?at:null };
    s.strips=[]; s.selectedStrip=-1;
    try{ openAddStripModal(); }catch(e){ M=null; }finally{ s.strips=keep; s.selectedStrip=sel; }
    if(!M||!isOpen()){ M=null; return no('error',''); }
    inn().classList.add('nb-ih-pick');
    return {ok:true,mode:'new'};
  }
  function openChange(k,fn){
    var c=C(), x=ready(); if(x) return x;
    var m=c.model(), it=m&&m.inlays[k], si=stripIx(m,k); if(!it||si<0) return no('missing','');
    if(m.blank) return openOld(si,fn);
    M={ kind:'change', k:k, si:si, cur:it.mat, curW:it.w, pick:null, reason:'', done:fn };
    try{ openEditStripModal(si); }catch(e){ M=null; }
    if(!M||!isOpen()){ M=null; return no('error',''); }
    inn().classList.add('nb-ih-pick');
    return {ok:true,mode:'new'};
  }

  function close(){ M=null; var m=inn(), o=ov(); if(m) m.classList.remove('nb-ih-pick'); if(o) o.classList.remove('open'); }
  function redraw(){ var s=inn()&&inn().querySelector('.mat-search'); if(s) s.dispatchEvent(new Event('input',{bubbles:true})); }
  function tryMat(n){
    var c=C(), s=S();
    if(M.kind==='add') return M.at!=null?c.act.add(n,M.at):c.act.add(n);
    if(n===M.cur) return {ok:true,same:true,model:c.model(),sel:M.k,line:''};
    return n===s.baseMetal?c.act.remove(M.k):c.act.change(M.k,n);
  }
  function pick(n){
    if(M.kind==='add'&&n===S().baseMetal) return;
    var r=tryMat(n);
    if(!r.ok){ M.pick=null; M.reason=r.reason||''; say(r.reason); redraw(); return; }
    M.pick={ mat:n, r:r }; M.reason=''; redraw();
  }
  function confirm(){
    var p=M.pick, fn=M.done;
    if(!p||p.r.same){ if(M.kind==='change') close(); return; }
    var r=tryMat(p.mat);
    if(!r.ok){ M.pick=null; M.reason=r.reason||''; say(r.reason); redraw(); return; }
    close();
    if(C().commit(r)) done(fn,r);
  }
  function blocked(n,card){
    if(card.classList.contains('nb-rim-off')) return {};
    try{ if(FLAT_ONLY_INLAYS.has(n)&&state.profile!==FLAT_ONLY_PROFILE) return {}; }catch(e){}
    var rb=null; try{ rb=stripRuleBlock(n); }catch(e){}
    if(!rb) return null;
    var t=(card.querySelector('.name')||{}).textContent||'';
    return / \(min /.test(t)?{self:rb.toast}:{};
  }
  function pause(m){ if(m.__v2applyingMinimum) return; m.__v2applyingMinimum=true; setTimeout(function(){ m.__v2applyingMinimum=false; },0); }
  function onClick(e){
    if(!M) return; var m=inn(), t=e.target; if(!m||!t||!t.closest||!m.contains(t)) return;
    var g=t.closest('.btn-gold'); if(g&&m.lastElementChild&&m.lastElementChild.contains(g)){ stop(e); confirm(); return; }
    var card=t.closest('.mat-card'); if(!card||t.closest('.swatch-zoom-btn')) return;
    var n=matOf(card); if(!n) return;
    var b=blocked(n,card);
    if(b){ pause(m); if(b.self){ stop(e); say(b.self); } return; }
    stop(e); pick(n);
  }
  var lastHead=null;
  function head(model,sel,mark,cap,g){
    var X=N(), sc=NS.screen, bx=X.el('div','nb-live nb-ih-head'), cp=X.el('div','nb-cap');
    cp.append(X.el('b',null,cap||X.T('inlay_dialog','new_strip')));
    if(lastHead&&lastHead.__nbih&&lastHead.__nbih.ro) try{ lastHead.__nbih.ro.disconnect(); }catch(e){}
    lastHead=sc&&typeof sc.bar==='function'?(g!=null?sc.bar(model,mark?sel:-1,g):sc.bar(model,mark?sel:-1)):null;
    bx.append(cp); if(lastHead) bx.append(lastHead);
    return bx;
  }
  function dress(m){
    if(!M) return null;
    var c=C(), h3=m.querySelector(':scope>h3'), t=h3?h3.textContent:'';
    if(!c||!(M.kind==='add'?/^Add an Inlay Strip/.test(t):new RegExp('^Edit Strip '+(M.si+1)+'(\\D|$)').test(t))){ M=null; m.classList.remove('nb-ih-pick'); return null; }
    m.classList.add('nb-ih-pick');
    var inp=m.querySelector('.width-picker input[type=number]'), blk=inp&&inp.closest('.width-picker').parentNode;
    if(blk&&blk!==m) blk.style.display='none';
    [].forEach.call(m.querySelectorAll(':scope>.validation-msg.info,.v2-width-note'),function(x){ x.style.display='none'; });
    var p=M.pick, r=p?p.r:null, ft=m.lastElementChild, g=ft&&ft.querySelector('.btn-gold');
    if(p) [].forEach.call(m.querySelectorAll('.mat-card'),function(x){ var on=matOf(x)===p.mat; x.classList.toggle('selected',on); x.setAttribute('aria-pressed',String(on)); });
    if(g) g.disabled=M.kind==='add'?!p:false;
    var model=(r&&r.model)||c.model(), gone=!!(p&&p.mat===S().baseMetal), sel=r?r.sel:M.k, it=model&&model.inlays[sel],
      w=r&&M.kind==='add'?r.width:gone?M.curW:(it?it.w:0), name=p?p.mat:M.cur, X=N();
    if(!model) return null;
    return { mat:p?p.mat:null, w:w, ready:!!p, head:head(model,sel,M.kind==='add'?!!p:!gone,name?name+' · '+X.f(w)+' mm':'',M.kind==='add'&&!p&&M.at!=null?M.at:null),
      status:M.reason||(p?X.T('inlay_dialog','ready',{material:p.mat,width:X.f(w)}):'') };
  }

  function start(){
    var o=ov(); if(!o) return;
    o.addEventListener('click',onClick,true);
    new MutationObserver(function(){ if(isOpen()) return; if(M){ M=null; var m=inn(); if(m) m.classList.remove('nb-ih-pick'); } if(OLD) oldClosed(); }).observe(o,{attributes:true,attributeFilter:['class']});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
  NS.picker={ openAdd:openAdd, openChange:openChange, dress:dress,
    mode:function(){ return M?{kind:M.kind,k:M.k,si:M.si,mat:M.pick?M.pick.mat:null,reason:M.reason}:OLD?{kind:'old'}:null; } };
})();
(function(){
  var X=window.__NB_HC__; if(!X||X.send||typeof X.fetch!=='function') return;
  var TS='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit', nf=X.fetch, S=X.state;
  var H={ q:{}, p:{}, pass:null, pexp:0, pp:null, ld:null, want:null, mo:null };
  function hc(){ var s=null; try{ s=SERVICES; }catch(e){} var h=s&&s.human_check; return (h&&h.enabled===true&&typeof h.site_key==='string'&&h.site_key)?h:null; }
  function tx(k){ var h=hc(), t=h&&h.texts&&h.texts[k]; return (typeof t==='string'&&t.trim())?t:''; }
  function num(v,d){ v=Number(v); return (isFinite(v)&&v>0)?v:d; }
  function $(id){ return document.getElementById(id); }
  function box(id,cls){ var e=$(id); if(!e){ e=document.createElement('div'); e.id=id; e.className=cls; } return e; }
  var css=document.createElement('style'); css.id='nbHcCss';
  css.textContent='.nb-hc-host{position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:2147483000;visibility:hidden}.nb-hc-host .nb-hc-on{visibility:visible}.nb-hc.nb-hc-on{margin:8px 0}.nb-hc-msg{margin:6px 0 0;font-size:14px;font-weight:600;color:#b42318;text-align:center}.nb-hc-msg:empty{display:none}.nb-hc-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}';
  (document.head||document.documentElement).appendChild(css);
  H.q.el=box('nbHcQuote','nb-hc'); H.p.el=box('nbHcPop','nb-hc');
  var M=box('nbHcMsg','nb-hc-msg'); M.setAttribute('aria-live','polite');
  function host(){ var h=$('nbHcHost'); if(!h){ h=box('nbHcHost','nb-hc-host'); document.body.appendChild(h); } return h; }
  function on(W,v){ var e=W.el, t=tx('label'); e.classList.toggle('nb-hc-on',!!v);
    if(v&&t){ e.setAttribute('role','group'); e.setAttribute('aria-label',t); } else { e.removeAttribute('role'); e.removeAttribute('aria-label'); }
    var h=$('nbHcHost'); if(v&&h&&h.contains(e)) lift(h); }
  function lift(h){ var b=$('nbStepBar'), r=b&&b.getClientRects().length?b.getBoundingClientRect():null, y=12;
    if(r&&r.top<window.innerHeight&&r.bottom>0) y=Math.max(12,Math.round(window.innerHeight-r.top+12));
    h.style.bottom=Math.min(y,Math.max(12,window.innerHeight-80))+'px'; }
  function msg(t){ M.classList.remove('nb-hc-sr'); if(M.textContent!==t) M.textContent=t; }
  function place(){
    var b=$('quoteSubmitBtn'), s=b&&b.nextElementSibling, Q=H.q.el;
    if(!s){ if(!document.contains(Q)) host().appendChild(Q); }
    else if(Q.parentNode!==s.parentNode){ var a=s.nextElementSibling; if(a&&a.classList.contains('nb-next')) s=a; s.parentNode.insertBefore(Q,s.nextSibling); }
    if(Q.nextSibling!==M) Q.parentNode.insertBefore(M,Q.nextSibling);
  }
  function load(){
    if(!H.ld) H.ld=new Promise(function(ok){ if(window.turnstile) return ok(window.turnstile);
      var s=document.createElement('script'); s.src=TS; s.async=true; s.onload=function(){ ok(window.turnstile||null); }; s.onerror=function(){ ok(null); };
      (document.head||document.documentElement).appendChild(s); });
    return H.ld;
  }
  function solve(W,action){
    if(W.pr) return W.pr;
    var h=hc(); if(!h) return Promise.resolve('unavailable');
    W.pr=load().then(function(t){ return new Promise(function(done){
      if(!t) return done('unavailable');
      var ms=num(h.wait_seconds,10)*1000;
      var fin=function(v){ if(W.f!==fin) return; W.f=null; clearTimeout(W.tm); on(W,0); done(typeof v==='string'&&v?v:'unavailable'); };
      W.arm=function(){ clearTimeout(W.tm); W.tm=setTimeout(function(){ fin('unavailable'); },ms); };
      W.f=fin; W.act=action; W.arm();
      try{ draw(W,t,h); }catch(e){ fin(''); }
    }); }).then(function(v){ W.pr=null; return v; });
    return W.pr;
  }
  function draw(W,t,h){
    if(W.id!=null&&W.at!==W.el.parentNode){ try{ t.remove(W.id); }catch(e){} W.id=null; }
    if(W.id==null){ W.at=W.el.parentNode; W.id=t.render(W.el,{ sitekey:h.site_key, action:W.act, appearance:'interaction-only', execution:'execute', 'refresh-expired':'auto', 'response-field':false,
      callback:function(k){ if(W.f) W.f(k); }, 'error-callback':function(){ if(W.f) W.f(''); return true; },
      'before-interactive-callback':function(){ clearTimeout(W.tm); on(W,1); }, 'after-interactive-callback':function(){ on(W,0); if(W.f) W.arm(); } }); }
    else t.reset(W.id);
    t.execute(W.id);
  }
  function quoteToken(force){
    var h=hc(), Q=H.q; if(!h) return Promise.resolve('unavailable');
    if(!force&&Q.tok&&!Q.used&&Date.now()-Q.t<num(h.token_max_age_seconds,270)*1000) return Promise.resolve(Q.tok);
    Q.tok=null; place();
    return solve(Q,'quote').then(function(v){ if(v!=='unavailable'){ Q.tok=v; Q.t=Date.now(); Q.used=false; } return v; });
  }
  function resetQ(){ var Q=H.q; Q.used=true; Q.tok=null; try{ if(Q.id!=null&&window.turnstile) turnstile.reset(Q.id); }catch(e){} }
  function seat(){ var P=H.p, to=S.pop||host(), t=window.turnstile, h=hc(); if(P.el.parentNode===to) return;
    try{ if(P.id!=null&&t) t.remove(P.id); }catch(e){} P.id=null; on(P,0); to.insertBefore(P.el,to.firstChild);
    if(P.f&&t&&h) try{ draw(P,t,h); }catch(e){ P.f(''); } }
  function pass(force){
    var h=hc(); if(!h||typeof h.pass_url!=='string'||!h.pass_url) return Promise.resolve(null);
    if(!force&&H.pass&&Date.now()<H.pexp) return Promise.resolve(H.pass);
    if(H.pp) return H.pp;
    H.pass=null; seat();
    var go=function(n){ return solve(H.p,'popup').then(function(k){
      return nf.call(window,h.pass_url,{ method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ human:k }) }).then(function(r){
        return r.json().catch(function(){ return {}; }).then(function(j){ j=j||{};
          if(r.ok&&j.ok===true&&typeof j.pass==='string'&&j.pass&&j.pass.length<=1024){ H.pass=j.pass; H.pexp=Date.now()+Math.max(60,num(j.expiresIn,1800)-60)*1000; return j.pass; }
          if(r.status===403&&j.error==='human_check_failed'&&j.retry!==false&&!n) return go(1);
          return null; }); },function(){ return null; }); }); };
    H.pp=go(0).then(function(v){ H.pp=null; seat(); return v; });
    return H.pp;
  }
  function after(t){
    H.want=t||null; clearTimeout(H.wt); H.wt=setTimeout(function(){ H.want=null; },4000);
    var b=$('quoteSubmitBtn'), s=b&&b.nextElementSibling; if(!s||!t) return;
    if(!H.mo) H.mo=new MutationObserver(fix);
    H.mo.disconnect(); H.mo.observe(s,{ childList:true, characterData:true, subtree:true });
  }
  function fix(){ var b=$('quoteSubmitBtn'), s=b&&b.nextElementSibling, t=H.want; if(!s||!t||!s.textContent||s.textContent===t) return; H.want=null; H.mo.disconnect(); s.textContent=t; if(M.textContent===t) M.classList.add('nb-hc-sr'); }
  function fresh(){
    var old=null; try{ old=state.estimateToken; sendEstimateRequest(); }catch(e){ return Promise.resolve(null); }
    return new Promise(function(ok){ var n=0, iv=setInterval(function(){ var k=null; try{ k=state.estimateToken; }catch(e){} if((k&&k!==old)||++n>=100){ clearInterval(iv); ok(k&&k!==old?k:null); } },100); });
  }
  function send(self,input,init){
    if(!hc()) return nf.call(self,input,init);
    var body; try{ body=JSON.parse(init.body); }catch(e){ return nf.call(self,input,init); }
    var again=0, go=function(){ return nf.call(self,input,Object.assign({},init,{ body:JSON.stringify(body) })); };
    msg('');
    var step=function(r){
      if(!r||(!r.ok&&r.status!==409&&r.status!==403)) return r;
      return r.clone().json().catch(function(){ return {}; }).then(function(j){ j=j||{};
        if(r.ok) return r;
        if(r.status===409&&j.error==='estimate_needed'&&!again++) return fresh().then(function(k){ if(!k) return r; body.estimateToken=k; return go().then(step); });
        if(r.status===403&&j.error==='human_check_failed'){
          if(j.retry!==false&&!again++) return quoteToken(true).then(function(k){ body.human=k; return go().then(step); });
          var f=tx('failed'); msg(f); after(f);
        }
        return r; });
    };
    return quoteToken(false).then(function(k){ body.human=k; H.q.used=true; return go(); }).then(step).then(function(r){ resetQ(); return r; },function(e){ resetQ(); throw e; });
  }
  X.enabled=function(){ return !!hc(); };
  X.quoteToken=function(){ return quoteToken(false); };
  X.pass=pass;
  X.mount=function(el){ S.pop=el||null; seat(); };
  X.unmount=function(){ S.pop=null; seat(); };
  X.hc=H; X.send=send;
  var sum=$('acc-body-summary'), qt=null;
  function prime(){ if(qt) return; qt=setTimeout(function(){ qt=null; var s=null; try{ s=state; }catch(e){} if(!hc()||!$('quoteSubmitBtn')||(s&&s._quoteSubmitted)) return; place(); var Q=H.q; if(!Q.pr&&!(Q.tok&&!Q.used)) quoteToken(false); },120); }
  if(sum&&window.MutationObserver) new MutationObserver(prime).observe(sum,{ childList:true });
  prime();
  if(S.pop) seat();
})();
if(typeof window.__nbLateReady==="function")window.__nbLateReady("data/redesign-inlays.js");
