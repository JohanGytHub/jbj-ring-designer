/* 2026-11-21 REDESIGN (WP1): late file data/solid-band.js - written by tools/build.mjs from common/109p-css-25-new-builder-solid-band.css + common/369n-router-23-solid-band.js (comments left out); do not edit by hand */
(function(){if(document.getElementById("nbSbLateCss"))return;var s=document.createElement('style');s.id="nbSbLateCss";s.textContent="#nbSbDlg{z-index:100001;background:rgba(14,17,26,.58)}\n#nbSbDlg [hidden]{display:none!important}\n#nbSbDlg .nb-sb-box{position:relative;display:flex;flex-direction:column;width:min(660px,100%);height:min(860px,calc(var(--nb-sb-vh,100dvh) - 48px));overflow:hidden;overflow:clip;\n  border-radius:16px;background:var(--nb-card);color:var(--nb-ink);box-shadow:0 18px 50px rgba(0,0,0,.4);font:400 15px/1.45 var(--font-body);container-type:inline-size;animation:nbSbUp .28s ease}\n@keyframes nbSbUp{from{transform:translateY(40px);opacity:.4}to{transform:none;opacity:1}}\n#nbSbDlg button,#nbSbDlg select,#nbSbDlg input{font-family:inherit;color:inherit}\n#nbSbDlg :is(button,select,input):focus-visible{outline:3px solid var(--nb-accent);outline-offset:2px}\n#nbSbDlg .nb-sb-grab{display:none}\n#nbSbDlg .nb-sb-head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px 10px 18px;border-bottom:1px solid var(--nb-line)}\n#nbSbDlg .nb-sb-h{margin:0;font:600 18px/1.3 var(--font-body);letter-spacing:-.01em;color:var(--nb-ink)}\n#nbSbDlg .nb-sb-x{flex:none;width:44px;height:44px;border-radius:12px;border:1px solid var(--nb-line2);background:var(--nb-card);font-size:22px;line-height:1;cursor:pointer}\n#nbSbDlg .nb-sb-bar{flex:none;position:relative;height:3px;overflow:hidden;background:var(--nb-sel)}\n#nbSbDlg .nb-sb-bar[hidden]{display:block!important;visibility:hidden}\n#nbSbDlg .nb-sb-bar::before{content:'';position:absolute;top:0;bottom:0;left:-40%;width:40%;border-radius:3px;background:var(--nb-accent);animation:nbSbBar 1.3s ease-in-out infinite}\n#nbSbDlg .nb-sb-bar[hidden]::before{display:none}\n#nbSbDlg .nb-sb-body{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;padding:14px 18px 18px;display:grid;gap:20px;align-content:start}\n#nbSbDlg.nb-sb-busy .nb-sb-body{cursor:progress}\n#nbSbDlg .nb-sb-intro{margin:0;font-size:14px;color:var(--nb-ink2)}\n#nbSbDlg .nb-sb-sec{display:grid;gap:8px;min-width:0;border-radius:var(--nb-r-md)}\n#nbSbDlg .nb-sb-sech{display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap}\n#nbSbDlg .nb-sb-sh{margin:0;font:600 16px/1.3 var(--font-body);color:var(--nb-ink)}\n#nbSbDlg .nb-sb-n{display:inline-grid;place-items:center;width:24px;height:24px;margin-right:6px;border-radius:50%;background:var(--nb-soft2);color:var(--nb-ink2);font-size:12.5px;font-weight:600;vertical-align:1px}\n#nbSbDlg .nb-sb-sec.done .nb-sb-n{background:var(--nb-ok);color:var(--nb-card)}\n#nbSbDlg .nb-sb-sec.openf .nb-sb-n{background:var(--nb-accent);color:var(--nb-on-accent)}\n#nbSbDlg .nb-sb-state{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--nb-muted)}\n#nbSbDlg .nb-sb-state.ok{color:var(--nb-ok)}\n#nbSbDlg .nb-sb-state.ok::before{content:'✓'}\n#nbSbDlg .nb-sb-state.need{color:var(--nb-accent)}\n#nbSbDlg .nb-sb-sec.busy>:not(.nb-sb-sech){opacity:.55;pointer-events:none}\n#nbSbDlg .nb-sb-sec.nb-sb-nolist>:not(.nb-sb-sech):not(.nb-sb-skel){display:none}\n#nbSbDlg .nb-sb-skel{display:flex;flex-wrap:wrap;gap:8px}\n#nbSbDlg .nb-sb-skel i{flex:1 1 90px;height:44px;border-radius:12px;background:linear-gradient(90deg,var(--nb-soft) 0%,var(--nb-soft2) 50%,var(--nb-soft) 100%);background-size:200% 100%;animation:nbSbShim 1.2s linear infinite}\n@keyframes nbSbShim{to{background-position:-200% 0}}\n#nbSbDlg .nb-sb-lock{display:flex;align-items:center;gap:8px;margin:0;padding:10px 12px;border-radius:var(--nb-r-sm);background:var(--nb-soft);color:var(--nb-muted);font-size:13.5px}\n#nbSbDlg .nb-sb-lock::before{content:'';flex:none;width:14px;height:14px;box-sizing:border-box;border:2px solid currentColor;border-radius:3px 3px 4px 4px;box-shadow:inset 0 -5px 0 -2px currentColor}\n#nbSbDlg .nb-sb-msg{margin:0;padding:9px 11px;border-radius:9px;background:var(--nb-err-bg);color:var(--nb-err);font-size:14px;font-weight:600;line-height:1.35}\n#nbSbDlg .nb-sb-more{display:flex;align-items:center;gap:8px;margin:-8px 0 0;padding:8px 12px;border-radius:var(--nb-r-sm);background:var(--nb-sel);color:var(--nb-ink2);font-size:13.5px;font-weight:600}\n#nbSbDlg .nb-sb-more .nb-sb-spin{width:14px;height:14px}\n#nbSbDlg .nb-sb-field{display:grid;gap:6px;min-width:0;align-content:start}\n#nbSbDlg .nb-sb-label{font-size:14px;font-weight:600;color:var(--nb-ink)}\n#nbSbDlg .nb-sb-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n#nbSbDlg .nb-sb-pair{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;align-items:start}\n#nbSbDlg .nb-sb-pair.one{grid-template-columns:minmax(0,1fr)}\n#nbSbDlg .nb-sb-tiles{min-width:0}\n#nbSbDlg .nb-sb-tile{display:grid;gap:3px;justify-items:center;align-content:center;min-width:0;min-height:48px;padding:6px 4px 7px;border:1.5px solid var(--nb-line2);border-radius:12px;background:var(--nb-card);color:var(--nb-ink);text-align:center;cursor:pointer;transition:border-color .15s,background .15s;-webkit-tap-highlight-color:transparent}\n#nbSbDlg .nb-sb-tile:hover:not(:disabled){border-color:var(--nb-accent2)}\n#nbSbDlg .nb-sb-tile[aria-checked=\"true\"],#nbSbDlg .nb-sb-chip[aria-checked=\"true\"],#nbSbDlg .nb-sb-group[aria-pressed=\"true\"]{border-color:var(--nb-accent);background:var(--nb-sel);box-shadow:inset 0 0 0 1px var(--nb-accent)}\n#nbSbDlg .nb-sb-tile:disabled{cursor:default}\n#nbSbDlg .nb-sb-tt{display:flex;flex-direction:column;min-width:0}\n#nbSbDlg .nb-sb-tn{font-size:12.5px;font-weight:600;line-height:1.2;overflow-wrap:normal;word-break:normal;hyphens:none}\n#nbSbDlg .nb-sb-ts{font-size:12px;font-weight:400;line-height:1.2;color:var(--nb-muted)}\n#nbSbDlg .nb-sb-pic svg{display:block;width:100%;height:100%}\n#nbSbDlg .nb-sb-pic .b{fill:var(--nb-sb-mt,#cfd3da);stroke:rgba(0,0,0,.28);stroke-width:.8}\n#nbSbDlg .nb-sb-pic .h{fill:rgba(255,255,255,.55)}\n#nbSbDlg .nb-sb-pic .d{fill:rgba(0,0,0,.22)}\n#nbSbDlg .nb-sb-pic .g{fill:rgba(0,0,0,.35)}\n#nbSbDlg .nb-sb-pic .i{fill:var(--nb-card)}\n#nbSbDlg .nb-sb-pic .l,#nbSbDlg .nb-sb-pic .l2{fill:none;stroke:rgba(0,0,0,.45);stroke-width:1}\n#nbSbDlg .nb-sb-pic .l2{stroke:var(--nb-ink2);stroke-width:1.4}\n#nbSbDlg .nb-sb-m-white{--nb-sb-mt:#d9dbe0}\n#nbSbDlg .nb-sb-m-yellow{--nb-sb-mt:#d8b45a}\n#nbSbDlg .nb-sb-m-rose{--nb-sb-mt:#dba48f}\n#nbSbDlg .nb-sb-m-grey{--nb-sb-mt:#9ea3aa}\n#nbSbDlg .nb-sb-m-dark{--nb-sb-mt:#4b4f55}\n#nbSbDlg .nb-sb-tiles-metal{display:flex;flex-wrap:wrap;gap:8px}\n#nbSbDlg .nb-sb-mchip{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 14px;border-radius:999px;text-align:left}\n#nbSbDlg .nb-sb-mchip .nb-sb-tn{font-size:14px}\n#nbSbDlg .nb-sb-mdot{flex:none;width:20px;height:20px;border-radius:50%;border:1px solid rgba(0,0,0,.25);box-sizing:border-box}\n#nbSbDlg .nb-sb-tiles-profile{display:flex;gap:8px;overflow-x:auto;margin:0 -18px;padding:2px 18px 6px;scroll-padding-inline:18px;scroll-snap-type:x proximity;scrollbar-width:thin}\n#nbSbDlg .nb-sb-pcard{flex:0 0 116px;justify-items:stretch;gap:4px;padding:6px 6px 8px;border-radius:var(--nb-r-md);text-align:left;scroll-snap-align:start}\n#nbSbDlg .nb-sb-pcard .nb-sb-pic{height:46px;padding:4px 6px;border-radius:10px;background:var(--nb-soft);box-sizing:border-box}\n#nbSbDlg .nb-sb-pcard[aria-checked=\"true\"] .nb-sb-pic{background:transparent}\n#nbSbDlg :is(.nb-sb-pcard,.nb-sb-scard,.nb-sb-fin) .nb-sb-tn{font-size:14px;line-height:1.25}\n@container (min-width:560px){#nbSbDlg .nb-sb-tiles-profile{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));overflow:visible;margin:0;padding:0}}\n#nbSbDlg .nb-sb-tiles-style{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n@container (min-width:560px){#nbSbDlg .nb-sb-tiles-style{grid-template-columns:repeat(4,minmax(0,1fr))}}\n#nbSbDlg .nb-sb-scard{justify-items:stretch;align-content:start;gap:4px;padding:10px;border-radius:var(--nb-r-md);text-align:left}\n#nbSbDlg .nb-sb-scard .nb-sb-pic{display:block;aspect-ratio:3/1;border-radius:8px;overflow:hidden}\n#nbSbDlg .nb-sb-pair-size{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)}\n#nbSbDlg .nb-sb-sw{position:relative;display:flex;align-items:center;min-height:48px;min-width:0;padding:8px 28px 8px 10px;box-sizing:border-box;border:1.5px solid var(--nb-line2);border-radius:12px;background:var(--nb-card)}\n#nbSbDlg .nb-sb-sw::after{content:'';position:absolute;right:11px;top:50%;width:8px;height:8px;margin-top:-6px;border-right:2px solid var(--nb-muted);border-bottom:2px solid var(--nb-muted);transform:rotate(45deg);pointer-events:none}\n#nbSbDlg .nb-sb-swv{min-width:0;font:600 16px/1.25 var(--font-body);white-space:normal;overflow-wrap:anywhere}\n#nbSbDlg .nb-sb-sw.ph .nb-sb-swv{color:var(--nb-muted);font-weight:500}\n#nbSbDlg .nb-sb-sw .nb-sb-select{position:absolute;inset:-1px;width:calc(100% + 2px);height:calc(100% + 2px);margin:0;padding:0;border:0;opacity:0;background:var(--nb-card);color:var(--nb-ink);font-size:16px;cursor:pointer;-webkit-appearance:none;appearance:none}\n#nbSbDlg .nb-sb-sw.dis{background:var(--nb-soft2)}\n#nbSbDlg .nb-sb-sw.dis .nb-sb-swv{color:var(--nb-muted)}\n#nbSbDlg .nb-sb-sw:focus-within{outline:3px solid var(--nb-accent);outline-offset:2px}\n#nbSbDlg .nb-sb-loading .nb-sb-sw::after{width:12px;height:12px;margin-top:-8px;border:2px solid var(--nb-soft2);border-top-color:var(--nb-accent);border-radius:50%;transform:none;animation:nbSbSpin .8s linear infinite;box-sizing:border-box}\n#nbSbDlg .nb-sb-tiles-fit{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}\n#nbSbDlg :is(.nb-sb-tiles-fit,.nb-sb-tiles-weight) .nb-sb-pic{width:40px;height:24px}\n#nbSbDlg .nb-sb-tiles-fit .nb-sb-tn{font-size:12px;white-space:nowrap;letter-spacing:-.01em}\n#nbSbDlg .nb-sb-groups{display:grid;gap:8px;padding:10px;border-radius:var(--nb-r-md);background:var(--nb-warn-bg)}\n#nbSbDlg .nb-sb-k{font-size:13.5px;font-weight:600;color:var(--nb-warn)}\n#nbSbDlg .nb-sb-grow{display:flex;flex-wrap:wrap;gap:8px}\n#nbSbDlg .nb-sb-group{min-width:44px;min-height:44px;padding:0 14px;border:1.5px solid var(--nb-line2);border-radius:999px;background:var(--nb-card);font-size:14px;font-weight:600;cursor:pointer}\n#nbSbDlg .nb-sb-pair-width{grid-template-columns:minmax(0,1fr);gap:14px}\n@container (min-width:520px){#nbSbDlg .nb-sb-pair-width{grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)}#nbSbDlg .nb-sb-pair-width.one{grid-template-columns:minmax(0,1fr)}}\n#nbSbDlg .nb-sb-tiles-width{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}\n@container (min-width:520px){#nbSbDlg .nb-sb-tiles-width{grid-template-columns:repeat(5,minmax(0,1fr))}#nbSbDlg .nb-sb-pair-width.one .nb-sb-tiles-width{grid-template-columns:repeat(8,minmax(0,1fr))}}\n#nbSbDlg .nb-sb-tiles-width .nb-sb-tile{align-content:end;gap:5px;min-height:56px;padding:8px 4px 6px}\n#nbSbDlg .nb-sb-wbar{display:block;width:70%;border-radius:2px;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0) 45%,rgba(0,0,0,.25)),var(--nb-sb-mt,#d9dbe0)}\n#nbSbDlg .nb-sb-tiles-width .nb-sb-tn{font-size:14px;line-height:1;font-variant-numeric:tabular-nums}\n#nbSbDlg .nb-sb-tiles-weight{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}\n@container (min-width:520px){#nbSbDlg .nb-sb-tiles-weight{grid-template-columns:minmax(0,1fr)}#nbSbDlg .nb-sb-tiles-weight .nb-sb-tile{grid-template-columns:44px minmax(0,1fr);justify-items:start;align-items:center;padding:6px 8px;text-align:left}}\n#nbSbDlg .nb-sb-tiles-finish{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n@container (min-width:520px){#nbSbDlg .nb-sb-tiles-finish{grid-template-columns:repeat(3,minmax(0,1fr))}}\n#nbSbDlg .nb-sb-fin{grid-template-columns:52px minmax(0,1fr);justify-items:start;align-items:center;gap:8px;padding:6px;border-radius:var(--nb-r-md);text-align:left}\n#nbSbDlg .nb-sb-swatch{position:relative;flex:none;display:block;width:52px;height:36px;border-radius:7px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(0,0,0,.18);background-color:var(--nb-sb-mt,#d9dbe0)}\n#nbSbDlg .nb-sb-swatch img{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover}\n#nbSbDlg .nb-sb-fx-pol{background-image:linear-gradient(135deg,rgba(255,255,255,.9) 0%,rgba(255,255,255,0) 38%,rgba(0,0,0,.22) 58%,rgba(255,255,255,.55) 100%)}\n#nbSbDlg .nb-sb-fx-brush{background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.32) 0 1px,rgba(0,0,0,.07) 1px 2px),linear-gradient(135deg,rgba(255,255,255,.35),rgba(0,0,0,.14))}\n#nbSbDlg .nb-sb-fx-frost{background-image:radial-gradient(rgba(255,255,255,.5) 18%,transparent 20%),radial-gradient(rgba(0,0,0,.12) 18%,transparent 20%),linear-gradient(135deg,rgba(255,255,255,.22),rgba(0,0,0,.12));background-size:4px 4px,5px 5px,100% 100%;background-position:0 0,2px 2px,0 0}\n#nbSbDlg .nb-sb-fx-hammer{background-image:radial-gradient(circle at 28% 30%,rgba(255,255,255,.6),transparent 26%),radial-gradient(circle at 70% 38%,rgba(255,255,255,.45),transparent 24%),radial-gradient(circle at 46% 74%,rgba(255,255,255,.4),transparent 25%),radial-gradient(circle at 80% 78%,rgba(0,0,0,.16),transparent 24%),linear-gradient(135deg,rgba(255,255,255,.2),rgba(0,0,0,.15))}\n#nbSbDlg .nb-sb-fx-stone{background-image:radial-gradient(rgba(0,0,0,.2) 22%,transparent 25%),radial-gradient(rgba(255,255,255,.38) 22%,transparent 25%),linear-gradient(135deg,rgba(255,255,255,.18),rgba(0,0,0,.14));background-size:6px 6px,7px 7px,100% 100%;background-position:0 0,3px 3px,0 0}\n#nbSbDlg .nb-sb-fx-flor{background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.14) 0 1px,transparent 1px 3px),repeating-linear-gradient(-45deg,rgba(255,255,255,.32) 0 1px,transparent 1px 3px)}\n#nbSbDlg .nb-sb-eng{display:grid;gap:12px;padding:10px 12px;border:1px solid var(--nb-line);border-radius:var(--nb-r-md);background:var(--nb-card)}\n#nbSbDlg .nb-sb-eng.open{border-color:var(--nb-line2)}\n#nbSbDlg .nb-sb-enghead{display:grid;grid-template-columns:44px minmax(0,1fr) auto;align-items:center;gap:10px}\n#nbSbDlg .nb-sb-engpic{display:grid;place-items:center;height:32px;padding:4px 2px;border-radius:10px;background:var(--nb-soft);box-sizing:border-box;--nb-sb-mt:#d8b45a}\n#nbSbDlg .nb-sb-engl{font-size:15px;line-height:1.25}\n#nbSbDlg .nb-sb-engbody{display:grid;gap:12px}\n#nbSbDlg .nb-sb-btn{min-height:44px;padding:0 16px;border-radius:12px;border:1px solid var(--nb-line2);background:var(--nb-card);font-size:15px;font-weight:600;line-height:1.2;cursor:pointer}\n#nbSbDlg .nb-sb-engadd{border:1.5px solid var(--nb-accent);color:var(--nb-accent)}\n#nbSbDlg .nb-sb-engadd[aria-expanded=\"false\"]::before{content:'+ '}\n#nbSbDlg .nb-sb-eng.open .nb-sb-engadd{border-color:var(--nb-line2);color:var(--nb-ink2)}\n#nbSbDlg .nb-sb-engadd:disabled{opacity:.55}\n#nbSbDlg .nb-sb-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;padding:4px;border-radius:12px;background:var(--nb-soft2)}\n#nbSbDlg .nb-sb-tab{min-height:44px;padding:8px 4px;border:0;border-radius:9px;background:transparent;font-size:14px;font-weight:600;line-height:1.2;cursor:pointer}\n#nbSbDlg .nb-sb-tab[aria-selected=\"true\"]{background:var(--nb-card);box-shadow:var(--nb-shadow);color:var(--nb-accent)}\n#nbSbDlg .nb-sb-pan{display:grid;gap:12px}\n#nbSbDlg .nb-sb-input{width:100%;min-width:0;min-height:46px;padding:10px 12px;box-sizing:border-box;border:1.5px solid var(--nb-line2);border-radius:10px;background:var(--nb-card);font:400 16px/1.3 var(--font-body)}\n#nbSbDlg .nb-sb-input:focus{outline:none;border-color:var(--nb-accent);box-shadow:0 0 0 3px var(--nb-sel)}\n#nbSbDlg .nb-sb-input:disabled{background:var(--nb-soft2);color:var(--nb-muted)}\n#nbSbDlg .nb-sb-cnt{display:flex;align-items:baseline;justify-content:space-between;gap:8px}\n#nbSbDlg .nb-sb-count{flex:none;margin-left:auto;font-size:12.5px;color:var(--nb-muted);white-space:nowrap;font-variant-numeric:tabular-nums}\n#nbSbDlg .nb-sb-cut{margin:0;font-size:13px;font-weight:600;color:var(--nb-warn)}\n#nbSbDlg .nb-sb-tiles-font{display:flex;gap:8px;overflow-x:auto;margin:0 -12px;padding:2px 12px 6px;scrollbar-width:thin}\n#nbSbDlg .nb-sb-tiles-font .nb-sb-tile{flex:0 0 124px;justify-items:stretch;align-content:start;padding:6px 8px 8px;text-align:left}\n#nbSbDlg .nb-sb-tiles-font .nb-sb-pic{display:flex;align-items:center;justify-content:center;height:34px;border-radius:8px;background:var(--nb-soft);overflow:hidden}\n#nbSbDlg .nb-sb-tiles-font .nb-sb-tile[aria-checked=\"true\"] .nb-sb-pic{background:var(--nb-soft2)}\n#nbSbDlg .nb-sb-tiles-font .nb-sb-pic img{height:24px;width:auto;max-width:100%;object-fit:contain}\n#nbSbDlg .nb-sb-tiles-font .nb-sb-tn{font-size:13px}\n#nbSbDlg .nb-sb-aa{font-size:22px;line-height:1;color:var(--nb-ink)}\n#nbSbDlg .nb-sb-pic.has-img :is(.nb-sb-aa,.nb-sb-strip){display:none}\n#nbSbDlg .nb-sb-tiles-pat{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n@container (min-width:520px){#nbSbDlg .nb-sb-tiles-pat{grid-template-columns:repeat(4,minmax(0,1fr))}}\n#nbSbDlg .nb-sb-tiles-pat .nb-sb-tile{justify-items:stretch;align-content:start;gap:4px;padding:5px 5px 7px}\n#nbSbDlg .nb-sb-tiles-pat .nb-sb-pic{display:block;position:relative;aspect-ratio:4/1;border-radius:6px;overflow:hidden;--nb-sb-mt:#cfc6b0}\n#nbSbDlg .nb-sb-tiles-pat .nb-sb-pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}\n#nbSbDlg .nb-sb-tiles-pat .nb-sb-tn{font-size:12px}\n#nbSbDlg .nb-sb-strip{display:block;width:100%;height:100%}\n#nbSbDlg .nb-sb-chips{display:flex;flex-wrap:wrap;gap:8px}\n#nbSbDlg .nb-sb-chip{display:inline-flex;align-items:center;gap:8px;min-width:44px;min-height:44px;padding:0 14px;border:1.5px solid var(--nb-line2);border-radius:999px;background:var(--nb-card);font-size:14px;font-weight:600;line-height:1.2;cursor:pointer}\n#nbSbDlg .nb-sb-dot{flex:none;width:20px;height:20px;box-sizing:border-box;border:1px solid rgba(0,0,0,.25);border-radius:50%}\n#nbSbDlg .nb-sb-dot-none{border-color:var(--nb-muted);background:linear-gradient(135deg,transparent 45%,var(--nb-muted) 45%,var(--nb-muted) 55%,transparent 55%)}\n#nbSbDlg .nb-sb-actions{flex:none;display:grid;gap:8px;padding:10px 14px calc(10px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--nb-line);background:var(--nb-card)}\n#nbSbDlg .nb-sb-status{display:flex;align-items:center;min-height:44px;font-size:13.5px;color:var(--nb-muted)}\n#nbSbDlg .nb-sb-wait{display:flex;align-items:center;gap:8px;color:var(--nb-ink);font-weight:600}\n#nbSbDlg .nb-sb-todo{min-height:44px;padding:0;border:0;background:none;color:var(--nb-muted);font-size:13.5px;text-align:left;cursor:pointer}\n#nbSbDlg .nb-sb-todo b{color:var(--nb-ink);font-weight:600;text-decoration:underline;text-underline-offset:3px}\n#nbSbDlg .nb-sb-ok{color:var(--nb-ok);font-weight:600}\n#nbSbDlg .nb-sb-ok::before{content:'✓ '}\n#nbSbDlg .nb-sb-btns{display:flex;align-items:center;justify-content:space-between;gap:10px}\n#nbSbDlg .nb-sb-cancel{padding:0 14px}\n#nbSbDlg .nb-sb-primary{border:0;background:var(--nb-accent);color:var(--nb-on-accent);white-space:nowrap}\n#nbSbDlg .nb-sb-primary:disabled{background:var(--nb-soft2);color:var(--nb-muted);cursor:default}\n#nbSbDlg .nb-sb-spin:not(.nb-spin){flex:none;width:18px;height:18px;box-sizing:border-box;border-radius:50%;border:2px solid var(--nb-soft2);border-top-color:var(--nb-accent);border-right-color:var(--nb-accent);animation:nbSbSpin .8s linear infinite}\n#nbSbDlg .nb-sb-state .nb-sb-spin{width:14px;height:14px}\n#nbSbDlg.nb-sb-first .nb-sb-state.busy{visibility:hidden}\n@keyframes nbSbSpin{to{transform:rotate(360deg)}}\n@keyframes nbSbBar{to{left:100%}}\n@media (prefers-reduced-motion:reduce){#nbSbDlg .nb-sb-box{animation:none}#nbSbDlg .nb-sb-spin{animation-duration:2.4s}#nbSbDlg .nb-sb-bar::before{animation:none;left:0;width:100%;opacity:.55}#nbSbDlg .nb-sb-skel i{animation:none}}\n@media (max-width:767.98px){\n  #nbSbDlg .nb-sb-box{width:100%;height:calc(var(--nb-sb-vh,100dvh) * .94);border-radius:20px 20px 0 0;box-shadow:0 -10px 40px rgba(0,0,0,.25)}\n  #nbSbDlg .nb-sb-grab{display:block;flex:none;width:40px;height:5px;margin:8px auto 0;border-radius:3px;background:var(--nb-line2)}\n}\n@media (max-height:500px){\n  #nbSbDlg{padding:6px}\n  #nbSbDlg .nb-sb-box{height:calc(var(--nb-sb-vh,100dvh) - 12px);border-radius:14px}\n  #nbSbDlg .nb-sb-grab{display:none}\n  #nbSbDlg .nb-sb-head{padding:2px 8px 2px 16px}\n  #nbSbDlg .nb-sb-h{font-size:16px}\n  #nbSbDlg .nb-sb-actions{grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:6px 10px;padding:4px 12px calc(4px + env(safe-area-inset-bottom,0px))}\n  #nbSbDlg .nb-sb-status{grid-column:1;grid-row:1;min-width:0}\n  #nbSbDlg .nb-sb-btns{grid-column:2;grid-row:1}\n  #nbSbDlg .nb-sb-actions>.nb-sb-msg{grid-column:1/-1;grid-row:2}\n}\n.nb-sb-hide{display:none!important}\n#acc-body-summary .nb-sb-card .nb-sb-kick{font-size:12px;font-weight:600;line-height:1.3;letter-spacing:.08em;text-transform:uppercase;color:var(--nb-accent)}\nbody.nb-sb-sum #ringPreview,body.nb-sb-sum #dragCaption,body.nb-sb-sum #crossSectionHost,body.nb-sb-sum .v2-preview .stage-label{display:none!important}\n.nb-sb-view[hidden]{display:none!important}\n.nb-sb-view{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:100%;flex:1 1 auto;min-height:0;padding:8px 0}\n.nb-sb-view .nb-sb-photos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;width:min(100%,720px)}\n.nb-sb-view .nb-sb-photo{display:block;width:100%;height:auto;aspect-ratio:1;object-fit:contain;border-radius:10px;background:#fff;border:1px solid rgba(255,255,255,.18)}\n.nb-sb-view .nb-sb-note{margin:0;font-size:13px;line-height:1.35;color:#e8ebf2;text-align:center}\n@media(max-width:767.98px){\n  .nb-sb-view{padding:4px 0}\n  .nb-sb-view .nb-sb-photos{gap:6px;max-height:100%}\n  .nb-sb-view .nb-sb-photo{max-height:calc(100% - 4px)}\n  .nb-sb-view .nb-sb-note{font-size:12px}\n}\n";(document.head||document.documentElement).appendChild(s);})();
(function(){
  'use strict';
  var SB_PROFILES=['Flat','Round','Bevel'];
  var SKIP=['compose','sleeve','finish','size'];
  var NEED_TEXTS=['title','size_label','width_label','finish_label','engraving_label','font_label','confirm','cancel','wait','not_available',
    'profile_label','metal_label','style_label','weight_label','outside_label','colour_label','colour_none','width_unit','wait_long',
    'fit_label','engraving_add','engraving_remove','tab_text','tab_pattern','message_label','pattern_label',
    'todo','all_set','field_locked','field_choose','group_choose','group_chosen','field_loading','size_placeholder','size_first','optional','engraving_heading','summary_kicker','chars_left'];        
  var ORDER=['profile','metal','fit','style','weight','size','width','finish','inside','outside'];
  var CHOICE=['profile','metal','fit','style','weight'];
  var SB={ result:null, key:null, failedKey:null, miss:null, missKey:null, last:null, keep:false, sz:{}, lastKey:null, hist:false, skipPop:false,
           open:false, seq:0, busy:false, lockAt:-1, pendingIdx:null, fromChange:false, opener:null, abort:null,
           f:null, good:null, ch:null, op:null, gone:{}, want:null, lastField:null, msgAt:null, shareDesign:null };
  var nativeGo=null, prevFetch=null, dlg=null, booted=false, tries=0, V={};

  function st(){ try{ return (typeof state!=='undefined'&&state)?state:null; }catch(e){ return null; } }
  function builder(){ try{ return (typeof BUILDER!=='undefined'&&BUILDER)?BUILDER:null; }catch(e){ return null; } }
  function services(){ try{ return (typeof SERVICES!=='undefined'&&SERVICES)?SERVICES:null; }catch(e){ return null; } }
  function steps(){ try{ return (typeof STEPS!=='undefined'&&STEPS&&STEPS.length)?STEPS:null; }catch(e){ return null; } }
  function el(tag,cls,text){ var e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e; }
  function cfg(){
    var b=builder(), c=b&&b.solid_band;
    if(!c||typeof c!=='object'||c.enabled!==true) return null;
    var t=Number(c.timeout_seconds); if(!isFinite(t)||t<=0) return null;
    var wl=Number(c.wait_long_seconds); if(!isFinite(wl)||wl<=0) return null;
    if(!c.texts||typeof c.texts!=='object') return null;
    for(var i=0;i<NEED_TEXTS.length;i++){ var v=c.texts[NEED_TEXTS[i]]; if(typeof v!=='string'||!v.trim()) return null; }
    return c;
  }
  function txt(k){ var c=cfg(), v=c&&c.texts&&c.texts[k]; return (typeof v==='string'&&v.trim())?v:''; }
  function newBuilder(){ var b=document.body; return !!(b&&(b.classList.contains('nb-pc')||b.classList.contains('nb-easy'))); }
  function on(){ return !!(cfg()&&newBuilder()&&services()); }
  function base(){
    var sv=services(), u=sv&&sv.estimate_url; if(typeof u!=='string'||!u) return '';
    if(/\/estimate$/.test(u)) return u.replace(/\/estimate$/,'');
    try{ return new URL(u).origin; }catch(e){ return ''; }
  }
  function sizeState(){ try{ return (window.__V2_SIZE__&&window.__V2_SIZE__.state)||null; }catch(e){ return null; } }
  function unknownCfg(){ var b=builder(), u=b&&b.unknown_size; return (u&&typeof u.label==='string'&&u.label&&Array.isArray(u.groups)&&u.groups.length)?u:null; }
  function precious(name){ try{ return typeof isPrecious==='function'&&!!isPrecious(name); }catch(e){ return false; } }
  function candidate(){ var s=st(); return !!(on()&&s&&s.baseMetal&&precious(s.baseMetal)&&s.wantsInlays===false&&SB_PROFILES.indexOf(s.profile)>=0); }
  function baseKey(){ var s=st(); return s?[s.baseMetal,s.profile,s.wantsInlays===false?0:1].join('|'):''; }
  function sizeKey(){ var s=st(), n=sizeState(); if(n&&n.unknown) return 'U'; return s?String(s.ringSize):''; }
  function fullKey(){ var s=st(); return s?(baseKey()+'|'+s.ringWidth+'|'+sizeKey()):''; }
  function active(){ return !!(SB.result&&SB.key&&SB.key===fullKey()&&candidate()); }
  function idxOf(id){ var s=steps(); if(!s) return -1; for(var i=0;i<s.length;i++){ if(s[i].id===id) return i; } return -1; }
  function curIdx(){ var s=st(); var i=s&&s._openSection?idxOf(s._openSection):-1; return i>=0?i:((s&&s.step)||0); }
  function missKey(){ var s=st(); return s?[s.baseMetal,s.profile].join('|'):''; }
  function code(json){ var p=json&&Array.isArray(json.problems)?json.problems[0]:null; var c=p&&typeof p==='object'?p.code:p; return (typeof c==='string'&&/^[a-z_]{1,40}$/.test(c))?c:'error'; }

  function sync(fromFetch){ if(!SB.result||active()) return; discard(fromFetch); }
  function discard(fromFetch){
    var had=!!SB.result;
    SB.result=null; SB.key=null;
    paintSteps(); paintSummary();
    if(had&&!fromFetch) reEstimate();
  }
  function reEstimate(){
    try{ if(typeof clearEstimate==='function') clearEstimate(); }catch(e){}
    try{ if(typeof updatePrice==='function') updatePrice(); }catch(e){}
  }

  function setHidden(node,want){ if(node&&node.hidden!==want) node.hidden=want; }
  function paintSteps(){
    var act=active(), on1=act||(SB.keep&&candidate()&&!blocked()), b=document.body; if(!b) return;
    if(b.classList.contains('nb-sb-on')!==act) b.classList.toggle('nb-sb-on',act);
    var s=st();
    SKIP.forEach(function(id){
      var tab=document.querySelector('.tool-tab[data-sec="'+id+'"]');
      if(id==='compose'){ setHidden(tab,on1||!!(s&&s.wantsInlays===false)); }
      else setHidden(tab,on1);
      var p=document.getElementById('acc-panel-'+id);
      if(p&&p.classList.contains('nb-sb-hide')!==on1) p.classList.toggle('nb-sb-hide',on1);
    });
    paintView();
    try{ if(window.__V2_STEPBAR__) window.__V2_STEPBAR__.refresh(); }catch(e){}
    try{ if(window.__V2_PC__) window.__V2_PC__.refresh(); }catch(e){}
  }
  function mapIdx(idx){
    var s=steps(); if(!s) return idx; var from=curIdx(), dir=idx>=from?1:-1, i=idx;
    while(s[i]&&SKIP.indexOf(s[i].id)>=0) i+=dir;
    if(!s[i]) i=from;
    return i;
  }
  function forwardPastWidth(idx){ var w=idxOf('width'); return w>=0&&idx>w&&curIdx()<=w; }

  function wrapGo(){
    if(nativeGo||typeof window.goToStep!=='function') return;
    nativeGo=window.goToStep;
    var wrapped=function(idx){
      if(SB.open) return;
      try{
        sync(false);
        if(on()){
          if(active()){ idx=mapIdx(idx); }
          else if(!SB.open&&forwardPastWidth(idx)&&candidate()&&!blocked()&&gate(idx)) return;
        }
      }catch(e){ if(window.console) console.error('solid band:',e); }
      return nativeGo.apply(this,[idx]);
    };
    wrapped.__nbSolidBand=true;
    window.goToStep=wrapped;
  }
  function onNavClick(ev){
    var t=ev.target&&ev.target.closest?ev.target.closest('.tool-tab[data-sec], .acc-head[data-sec]'):null;
    if(!t||!on()) return;
    if(SB.open){ ev.preventDefault(); ev.stopImmediatePropagation(); return; }
    try{
      sync(false);
      var idx=idxOf(t.getAttribute('data-sec')); if(idx<0) return;
      if(active()){ if(SKIP.indexOf(t.getAttribute('data-sec'))>=0){ ev.preventDefault(); ev.stopImmediatePropagation(); } return; }
      if(!SB.open&&forwardPastWidth(idx)&&candidate()&&!blocked()){
        var e=prefetch(); if(e&&e.st==='fail'){ markFail(e.code); return; }
        ev.preventDefault(); ev.stopImmediatePropagation();
        openPopup(idx,false);
      }
    }catch(e){ if(window.console) console.error('solid band:',e); }
  }

  function wrapFetch(){
    if(prevFetch||typeof window.fetch!=='function') return;
    prevFetch=window.fetch;
    window.fetch=function(input,init){
      var sent=false, orig=init, isQuote=false;
      try{
        var sv=services(), url=(typeof input==='string')?input:((input&&input.url)||'');
        isQuote=!!(sv&&url===sv.quote_url);
        if(sv&&url&&(url===sv.estimate_url||url===sv.quote_url)&&init&&typeof init.body==='string'){
          sync(true);
          if(active()){
            var r=SB.result, body=JSON.parse(init.body);
            body.solidBand=true; body.solidBandLookupId=r.lookupId; body.solidBandDesign=r.design;
            if(isQuote&&r.srvMiss) body.solidBandMiss=r.srvMiss;
            if(isQuote) body.solidBandShown={ title:r.title, details:r.details };
            if(!isQuote&&SB.hp) body.humanPass=SB.hp;    
            if(isQuote&&typeof body.shareUrl==='string') body.shareUrl=shareLink(body.shareUrl);
            init=Object.assign({},init,{ body:JSON.stringify(body) });
            sent=true;
          } else if(SB.miss){
            if(SB.missKey===missKey()){ var mb=JSON.parse(init.body); mb.solidBandMiss=SB.miss; init=Object.assign({},init,{ body:JSON.stringify(mb) }); }
            else { SB.miss=null; SB.missKey=null; }
          }
        }
      }catch(e){}
      var out=prevFetch.apply(this,[input,init].concat(Array.prototype.slice.call(arguments,2)));
      if(!sent||!out||typeof out.then!=='function') return out;
      var self=this;
      return out.then(function(response){
        if(response&&response.ok&&!isQuote) return response.clone().json().then(function(j){
          var X=window.__NB_HC__, hn=!!(j&&j.ok&&!j.estimateToken&&j.solidBandMiss==='human_needed'&&!SB.hn&&X&&X.enabled());
          try{ estimateAnswer(j); }catch(e){}
          return hn?new Response(JSON.stringify({ ok:false, validationErrors:[] }),{ status:400, headers:{ 'Content-Type':'application/json' } }):response;
        },function(){ return response; });
        if(!response||response.status!==409) return response;
        return response.clone().json().then(function(j){
          if(j&&j.error==='solid_band_unavailable'&&!isQuote){
            if(SB.result){ SB.result.unavailable=true; paintSummary(); }
            return new Response(JSON.stringify({ ok:false, validationErrors:[] }),{ status:400, headers:{ 'Content-Type':'application/json' } });
          }
          if(!j||j.error!=='solid_band_off') return response;
          serverOff(isQuote);
          return (isQuote?retryQuote(input,orig):prevFetch.call(self,input,orig)).catch(function(){ return response; });
        },function(){ return response; });
      });
    };
  }
  function estimateAnswer(j){
    var r=SB.result; if(!r||!j||!active()) return;
    r.srvMiss=(typeof j.solidBandMiss==='string'&&/^[a-z_]{1,40}$/.test(j.solidBandMiss))?j.solidBandMiss:null;
    var X=window.__NB_HC__;
    if(r.srvMiss!=='human_needed') SB.hn=0;
    else if(!SB.hn&&X&&X.enabled()){ SB.hn=1; X.pass(!!SB.hp).then(function(p){ if(!p) return; SB.hp=p; try{ sendEstimateRequest(); }catch(e){} }); }
    if(j.ok&&r.unavailable){ r.unavailable=false; paintSummary(); }
    var id=j.solidBandLookupId;
    if(typeof id!=='string'||!/^[0-9a-f]{32}$/.test(id)||id===r.lookupId) return;
    r.lookupId=id;
    if(j.solidBandCustomer&&typeof j.solidBandCustomer.title==='string') takeCustomer(r,j.solidBandCustomer);
    else r.images=r.images.map(function(m){ return { path:m.path.replace(/^\/ring-images\/[0-9a-f]{32}\//,'/ring-images/'+id+'/'), label:m.label }; });
    paintSummary();
  }
  function takeCustomer(r,c){
    r.title=c.title;
    r.details=(Array.isArray(c.details)?c.details:[]).filter(function(x){ return x&&typeof x.label==='string'&&typeof x.value==='string'; }).map(function(x){ return { label:x.label, value:x.value }; });
    r.images=(Array.isArray(c.images)?c.images:[]).filter(function(m){ return m&&typeof m.path==='string'&&/^\/ring-images\/[0-9a-f]{32}\/(front|top|side)\.jpg$/.test(m.path); }).map(function(m){ return { path:m.path, label:(typeof m.label==='string')?m.label:'' }; });
    r.precious=c.precious!==false;
  }
  function retryQuote(input,orig){
    var s=st(), sv=services(), body=JSON.parse(orig.body), d=designPayload();
    return prevFetch.call(window,sv.estimate_url,{ method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify(d) }).then(function(r){ return r.json(); }).then(function(j){
      if(!j||!j.ok||!j.estimateToken) throw new Error('estimate');
      body.estimateToken=j.estimateToken;
      if(typeof j.total==='number'&&isFinite(j.total)) body.total=j.total;
      body.engraving=s.engraving||''; body.font=s.engravingFont||'';
      return prevFetch.call(window,input,Object.assign({},orig,{ body:JSON.stringify(body) }));
    });
  }
  function serverOff(quiet){
    if(!SB.result) return;
    if(SB.open) closePopup(false);
    SB.failedKey=baseKey();
    discard(false);
    var sum=!quiet&&st()&&st()._openSection==='summary';
    if(sum) try{ window.__V2_ROUTER__.rerenderSection('summary'); }catch(e){}
  }

  function enc(o){ try{ return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }catch(e){ return ''; } }
  function dec(s){ try{ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; return JSON.parse(decodeURIComponent(escape(atob(s)))); }catch(e){ return null; } }
  function shareLink(u){
    try{
      if(typeof u!=='string'||!active()||u.indexOf('?design=')<0||/[?&]sb=/.test(u)) return u;
      var m=enc(SB.result.design); return m?(u+'&sb='+m):u;
    }catch(e){ return u; }
  }
  function wrapShare(){
    try{
      var clip=navigator.clipboard;
      if(clip&&typeof clip.writeText==='function'){ var w=clip.writeText; clip.writeText=function(t){ return w.call(clip,shareLink(t)); }; }
    }catch(e){}
    try{
      var p=window.prompt;
      if(typeof p==='function') window.prompt=function(m,v){ return (arguments.length>1)?p.call(window,m,shareLink(v)):p.call(window,m); };
    }catch(e){}
  }
  function readShare(){
    try{ var q=new URLSearchParams(window.location.search); var d=q.get('design')&&q.get('sb')?dec(q.get('sb')):null; if(d&&typeof d==='object') SB.shareDesign=d; }catch(e){}
  }

  function call(route,design,own,again){
    var c=cfg(), ms=Number(c.timeout_seconds)*1000, ctl=null, timer=null, late=false, X=window.__NB_HC__, hcOn=!!(X&&X.enabled()), net={ ok:false, problems:[{ code:'network' }] };
    try{ ctl=new AbortController(); }catch(e){}
    if(!own) SB.abort=ctl;
    return (hcOn?X.pass(!!again):Promise.resolve(null)).then(function(p){
      if(ctl&&ctl.signal.aborted) return net;
      var b={ design:design }; if(p){ SB.hp=p; b.humanPass=p; }
      var request=prevFetch.call(window,base()+route,{ method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify(b), signal:ctl?ctl.signal:undefined });
      var deadline=new Promise(function(resolve,reject){ timer=setTimeout(function(){ late=true; reject(new Error('timeout')); try{ if(ctl) ctl.abort(); }catch(e){} },ms); });
      return Promise.race([request,deadline]).then(function(response){
        return response.json().catch(function(){ return null; }).then(function(json){ clearTimeout(timer); return (response.ok&&json&&json.ok===true)?json:{ ok:false, problems:(json&&Array.isArray(json.problems))?json.problems:[], _http:response.status }; });
      },function(err){ clearTimeout(timer); return { ok:false, problems:[{ code:(late||(err&&err.message==='timeout'))?'timeout':'network' }] }; });
    }).then(function(j){
      var k=(j&&j.ok!==true)?code(j):'';
      if(k==='human_needed'&&!again&&hcOn&&!(ctl&&ctl.signal.aborted)) return call(route,design,own,1);
      return (k==='human_needed'||k==='limit_reached')?net:j;
    });
  }

  function prefetch(){
    if(!candidate()||blocked()) return null;
    var s=st(), k=missKey(), e=SB.sz[k]; if(e){ if(e.st==='ok') preOptions(e,e.options); return e; }
    e=SB.sz[k]={ st:'wait' };
    call('/solid-band/choices',{ baseMetal:s.baseMetal, baseProfile:s.profile },true).then(function(json){
      var o=json.ok&&json.outcome==='choices'&&validChoices(json.options)?json.options:null;
      if(o&&(o.sizes.length||o.unknown_size===true)){ e.st='ok'; e.options=o; } else { e.st='fail'; e.code=o?'size_not_offered':code(json); }
      if(e.st==='ok') preOptions(e,o);
      if(SB.open&&SB.waitFirst===k){ SB.waitFirst=null; if(e.st==='ok') firstAnswer(o); else firstFail(e.code); }
    });
    return e;
  }
  function optDesign(f,wd){ var d={ profile:f.profile, metal:f.metal, style:f.style, weight:f.weight }; if(f.fit) d.fit=f.fit;
     if(f.size==='U') d.ringSizeUnknown=true; else d.ringSize=Number(f.size); if(wd!==''&&wd!=null) d.ringWidth=Number(wd); return d; }
  function preOptions(e,o){
    if(SB.result||SB.open) return;
    var w=wantFromJbj(); if(!w.size) return;
    if(!(w.size==='U'?(o.unknown_size===true&&unknownCfg()):o.sizes.some(function(n){ return String(n)===w.size; }))) return;
    var d=optDesign({ profile:o.profile, metal:o.metal, fit:o.fit||'', style:o.style, weight:o.weight, size:w.size },w.width), key=JSON.stringify(d);
    if(e.optDone===key) return;
    e.optDone=key; e.opt={ key:key, at:Date.now(), p:call('/solid-band/options',d,true) };
  }
  function takePre(d){
    var e=SB.sz[missKey()], o=e&&e.opt; if(!o) return null;
    e.opt=null;
    return (o.key===JSON.stringify(d)&&Date.now()-o.at<600000)?o.p:null;
  }
  function markFail(c){ SB.miss=c||'error'; SB.missKey=missKey(); SB.failedKey=baseKey(); }
  function forgetFails(){ SB.failedKey=null; for(var k in SB.sz){ if(SB.sz[k].st==='fail') delete SB.sz[k]; } }
  function blocked(){ return SB.failedKey===baseKey(); }
  function gate(idx){ var e=prefetch(); if(e&&e.st==='fail'){ markFail(e.code); return false; } openPopup(idx,false); return true; }

  function vl(list){ return Array.isArray(list)&&list.every(function(x){ return x&&typeof x.value==='string'&&typeof x.label==='string'&&x.value&&x.label; }); }
  function validChoices(o){ return !!(o&&vl(o.profiles)&&vl(o.metals)&&vl(o.styles)&&vl(o.weights)&&Array.isArray(o.sizes)&&o.sizes.every(function(n){ return typeof n==='number'&&isFinite(n); })); }
  function validOptions(o){
    if(!o||!Array.isArray(o.widths)||!o.widths.length||!o.widths.every(function(w){ return typeof w==='number'&&isFinite(w); })||!vl(o.finishes)||!o.finishes.length) return false;
    var e=o.engraving; if(e&&e.available===true&&!(vl(e.fonts)&&e.fonts.length)) return false;
    return true;
  }
  function loc(k){ var e=SB.op&&SB.op.engraving; if(!e||e.available!==true) return null; if(k==='inside') return e; var o=e.outside; return (o&&o.available===true&&vl(o.fonts)&&o.fonts.length)?o:null; }
  function chars(){ var e=SB.op&&SB.op.engraving; return (e&&typeof e.chars==='string')?e.chars:''; }
  function goneSig(gk){ var f=copyF(SB.f||blankF()), m=/^(inside|outside)_(font|colour|text|pattern)$/.exec(gk);     delete f.group; delete f.inside.cut; delete f.outside.cut; if(m) delete f[m[1]][m[2]==='colour'?'fill':m[2]]; else delete f[gk]; return JSON.stringify(f); }
  function goneHas(f,v){ var l=SB.gone[f]; if(!l||!l.length) return false; var sg=goneSig(f); return l.some(function(e){ return e.v===String(v)&&e.sig===sg; }); }
  function listOf(f){
    var c=SB.ch, o=SB.op, out=[];
    if(f==='profile') out=c?c.profiles:[]; else if(f==='metal') out=c?c.metals:[]; else if(f==='style') out=c?c.styles:[]; else if(f==='weight') out=c?c.weights:[];
    else if(f==='fit') out=c?(vl(c.fits)&&c.fits.length?c.fits:(c.fit?[{ value:c.fit, label:c.fit }]:[])):[];
    else if(f==='size'){ if(c){ out=c.sizes.slice().sort(function(a,b){ return a-b; }).map(function(n){ return { value:String(n), label:String(n) }; }); var u=unknownCfg(); if(u&&c.unknown_size===true) out.push({ value:'U', label:u.label }); } }
    else if(f==='width') out=o?o.widths.map(function(n){ return { value:String(n), label:n+txt('width_unit') }; }):[];
    else if(f==='finish') out=o?o.finishes:[];
    return out.filter(function(x){ return !goneHas(f,x.value); });
  }
  function offered(f,v){ return v!=null&&v!==''&&listOf(f).some(function(x){ return x.value===String(v); }); }
  function fontOk(k,v){ var l=loc(k); return !!(l&&v&&l.fonts.some(function(x){ return x.value===v; })&&!goneHas(k+'_font',v)); }
  function fillOk(k,v){ var l=loc(k); return !!(l&&v&&vl(l.fills)&&l.fills.some(function(x){ return x.value===v; })&&!goneHas(k+'_colour',v)); }
  function fontMax(k){ var l=loc(k), v=SB.f[k].font; if(!l) return null; for(var i=0;i<l.fonts.length;i++){ if(l.fonts[i].value===v){ var m=Number(l.fonts[i].max_chars); return (isFinite(m)&&m>0)?Math.floor(m):null; } } return null; }
  function copyF(f){ return JSON.parse(JSON.stringify(f)); }
  function blankE(){ return { text:'', font:'', fill:'', pattern:'', open:false, tab:'text', cut:false }; }
  function blankF(){ return { profile:'', metal:'', fit:'', style:'', weight:'', size:'', group:null, width:'', finish:'', inside:blankE(), outside:blankE() }; }
  function patList(k){ var e=SB.op&&SB.op.engraving, l=e?(k==='inside'?e:e.outside):null; return (l&&vl(l.patterns||[])?l.patterns:[]).filter(function(x){ return !goneHas(k+'_pattern',x.value); }); }

  function askChoices(changed,upTo){
    var f=SB.f, d={}, ci=ORDER.indexOf(changed); if(upTo==null) SB.clearedAt=null;
    CHOICE.forEach(function(k){ if(f[k]&&(upTo==null||ORDER.indexOf(k)<=upTo)) d[k]=f[k]; });
    var seq=++SB.seq; lock(changed);
    call('/solid-band/choices',d).then(function(json){
      if(seq!==SB.seq||!SB.open) return;
      if(!json.ok||json.outcome!=='choices'||!validChoices(json.options)){
        var p=json&&Array.isArray(json.problems)?json.problems[0]:null, at=p&&p.field?ORDER.indexOf(FIELD[p.field]):-1;
        if(upTo==null&&ci>=0&&at>ci){ SB.prevLower={}; CHOICE.forEach(function(k){ if(ORDER.indexOf(k)>ci){ SB.prevLower[k]=f[k]; f[k]=''; } }); askChoices(changed,ci); return; }
        refused(json,changed); return;
      }
      takeChoices(json.options,changed);
    });
  }
  var REFRESH_STEPS=[3000,3000,5000,8000,13000,20000,30000];
  function combo(){ var f=SB.f, d={}; CHOICE.forEach(function(k){ if(f&&f[k]) d[k]=f[k]; }); return d; }
  function scheduleRefresh(o){
    clearTimeout(SB.rTimer);
    if(!o||o.lists_complete!==false){ SB.rTries=0; paintMore(); return; }
    var wait=REFRESH_STEPS[Math.min(SB.rTries||0,REFRESH_STEPS.length-1)]; SB.rTries=(SB.rTries||0)+1;
    var d=combo(), key=JSON.stringify(d);
    SB.rTimer=setTimeout(function(){
      if(!SB.open||JSON.stringify(combo())!==key) return;
      call('/solid-band/choices',d,true).then(function(json){
        if(!SB.open||JSON.stringify(combo())!==key) return;
        if(!json.ok||json.outcome!=='choices'||!validChoices(json.options)){ scheduleRefresh({ lists_complete:false }); return; }
        SB.ch=json.options; render(); scheduleRefresh(json.options);
      });
    },wait);
    paintMore();
  }
  function paintMore(){ var m=q('.nb-sb-more'); if(!m) return; var on=!!(SB.open&&SB.ch&&SB.ch.lists_complete===false); if(m.hidden!==!on) m.hidden=!on; var t=on?txt('lists_loading'):'', tx=m.querySelector('.nb-sb-moret'); if(tx&&tx.textContent!==t) tx.textContent=t; }
  function takeChoices(o,changed){
    var f=SB.f, w=SB.want, ci=ORDER.indexOf(changed);
    SB.ch=o; SB.rTries=0;
    var pl=SB.prevLower||{}, before={ style:f.style||pl.style||'', weight:f.weight||pl.weight||'', fit:f.fit||pl.fit||'' };    
    CHOICE.forEach(function(k){
      var i=ORDER.indexOf(k), single=listOf(k).length===1?listOf(k)[0].value:'';
      if(w){ if(SB.fromShare&&w[k]&&!offered(k,w[k])) lost(k); f[k]=offered(k,w[k])?w[k]:(offered(k,o[k])?o[k]:''); }
      else if(i>ci){ var pv=SB.prevLower&&SB.prevLower[k]; if(!f[k]&&pv&&offered(k,pv)) f[k]=pv; if(!offered(k,f[k])) f[k]=single||(offered(k,o[k])&&!f[k]?o[k]:''); }
    });
    SB.prevLower=null; scheduleRefresh(o);
    if(!w&&changed==='fit'&&before.style&&f.style!==before.style) SB.clearedAt=SB.clearedAt||'style';
    if(!w&&(changed==='profile'||changed==='style'||changed==='weight')&&before.fit&&f.fit!==before.fit) SB.clearedAt=SB.clearedAt||'fit';
    if(!w&&(changed==='fit'||changed==='style')&&before.weight&&f.weight!==before.weight) SB.clearedAt=SB.clearedAt||'weight';
    var sz=w?w.size:f.size;
    if(sz&&sz!=='U'&&o.lists_complete===false&&Array.isArray(o.sizes)&&!offered('size',sz)){ var qn=Number(sz); if(isFinite(qn)&&Math.abs(qn*2-Math.round(qn*2))>1e-9&&o.sizes.some(function(x){ return Math.abs(x-(qn-0.25))<1e-9; })) o.sizes=o.sizes.concat([qn]); }
    if(w&&SB.fromShare&&sz&&!offered('size',sz)) lost('size');
    if(!w&&sz&&!offered('size',sz)&&(changed==='style'||changed==='weight'||changed==='fit')) SB.clearedAt=SB.clearedAt||'size';    
    f.size=offered('size',sz)?String(sz):''; if(f.size!=='U') f.group=null; else if(w) f.group=w.group;
    SB.good=copyF(f);
    if(f.size&&f.profile&&f.metal&&f.style&&f.weight){ askOptions(changed); return; }
    SB.op=null; SB.want=null; unlock(); render(); restored(); cleared(); resetDone();
  }
  function askOptions(changed){
    var f=SB.f, wd=SB.want&&SB.want.width?SB.want.width:(f.width||SB.jbjWidth||''), d=optDesign(f,wd);
    var seq=++SB.seq; lock(changed);
    (takePre(d)||call('/solid-band/options',d)).then(function(json){
      if(seq!==SB.seq||!SB.open) return;
      if(!json.ok||json.outcome!=='options'||!validOptions(json.options)){ refused(json,changed); return; }
      takeOptions(json.options,changed);
    });
  }
  function takeOptions(o,changed){
    var f=SB.f, w=SB.want||{}, first=!SB.op;
    SB.op=o;
    var wd=w.width!=null&&w.width!==''?w.width:f.width;
    if(SB.want&&SB.fromShare){ if(wd&&!offered('width',wd)) lost('width'); if(w.finish&&!offered('finish',w.finish)) lost('finish'); }
    var mine=!first&&!SB.want&&changed==='weight';
    if(mine&&f.width&&!offered('width',f.width)) SB.clearedAt=SB.clearedAt||'width';
    f.width=offered('width',wd)?String(wd):(mine&&f.width?'':(offered('width',o.selected_width)?String(o.selected_width):''));
    var fin=w.finish||f.finish;
    f.finish=offered('finish',fin)?fin:((first||w.finish!=null)&&listOf('finish').length?listOf('finish')[0].value:'');
    ['inside','outside'].forEach(function(k){
      var l=loc(k), src=w[k]||f[k], pl=patList(k);
      if(!l&&!pl.length){ f[k]=blankE(); return; }
      if(SB.want&&SB.fromShare&&src.text&&src.font&&!fontOk(k,src.font)) lost(k+'.font');
      var font=l?(fontOk(k,src.font)?src.font:l.fonts.filter(function(x){ return !goneHas(k+'_font',x.value); }).map(function(x){ return x.value; })[0]||''):'';
      var pat=src.pattern&&pl.some(function(x){ return x.value===src.pattern; })?src.pattern:'';
      var text=l&&!pat?clean(src.text||'',k,font):'';
      f[k]={ text:text, font:font, fill:l&&!pat&&fillOk(k,src.fill)?src.fill:'', pattern:pat, open:!!(src.open||text||pat), tab:pat?'pattern':(src.tab==='pattern'&&pl.length?'pattern':'text'), cut:!!src.cut||(!!l&&!pat&&text.length<String(src.text||'').length) };
    });
    SB.want=null; SB.good=copyF(f); unlock(); render(); restored(); cleared(); resetDone();
  }
  function cleared(){ var at=SB.clearedAt; SB.clearedAt=null; if(at&&SB.open) showMsg(at,true); }
  function lost(path){ if(!SB.unrestored) SB.unrestored=path; }
  function restored(){ var p=SB.unrestored; SB.unrestored=null; SB.fromShare=false; if(p) showMsg(p,true); }
  function lookupDesign(){
    var f=SB.f, d={ profile:f.profile, metal:f.metal, style:f.style, weight:f.weight }; if(f.fit) d.fit=f.fit;
    if(f.size==='U') d.ringSizeUnknown=true; else d.ringSize=Number(f.size);
    d.ringWidth=Number(f.width); d.finishCode=f.finish;
    [['inside','engraving','patternInside'],['outside','engravingOutside','patternOutside']].forEach(function(p){
      var x=f[p[0]];
      if(x.pattern&&patList(p[0]).some(function(y){ return y.value===x.pattern; })){ d[p[2]]=x.pattern; return; }
      var t=final(x.text); if(!t||!loc(p[0])) return;
      var e={ text:t, font:x.font }; if(x.fill) e.fill=x.fill; d[p[1]]=e;
    });
    return d;
  }
  function confirm(){
    if(!ready()) return;
    var d=lookupDesign(), seq=++SB.seq; SB.lastField='confirm'; lock('confirm');
    call('/solid-band/lookup',d).then(function(json){
      if(seq!==SB.seq||!SB.open) return;
      var c=json&&json.customer;
      if(!json.ok||json.outcome!=='quoted'||typeof json.lookup_id!=='string'||!/^[0-9a-f]{32}$/.test(json.lookup_id)||!c||typeof c.title!=='string'||!Array.isArray(c.details)){ refused(json,'confirm'); return; }
      done(json,d);
    });
  }

  var FIELD={ profile:'profile', metal:'metal', detail:'style', weight:'weight', size:'size', width:'width', finish:'finish', fit:'fit', inside_pattern:'inside.pattern', outside_pattern:'outside.pattern',
    inside_text:'inside.text', inside_font:'inside.font', inside_colour:'inside.fill', outside_text:'outside.text', outside_font:'outside.font', outside_colour:'outside.fill' };
  function getV(path){ var p=path.split('.'); return p.length>1?SB.f[p[0]][p[1]]:SB.f[p[0]]; }
  function setV(path,v){ var p=path.split('.'); if(p.length>1) SB.f[p[0]][p[1]]=v; else SB.f[p[0]]=v; }
  function goneKey(path){ var p=path.split('.'); return p.length>1?(p[0]+(p[1]==='fill'?'_colour':'_'+p[1])):p[0]; }
  function refused(json,changed){
    var p=json&&Array.isArray(json.problems)?json.problems[0]:null, named=p&&typeof p.field==='string'?FIELD[p.field]:null;
    var path=named||(changed&&changed!=='confirm'?changed:null);
    SB.want=null;
    if(!SB.ch){ restart(code(json)); return; }
    if(path){
      var v=getV(path), gk=goneKey(path), isText=/\.text$/.test(path), gp=path.split('.'), back='';
      if(SB.good) back=gp.length>1?SB.good[gp[0]][gp[1]]:SB.good[gp[0]];
      if(named&&v&&!isText){ SB.gone[gk]=SB.gone[gk]||[]; var gs=goneSig(gk); if(!SB.gone[gk].some(function(e){ return e.v===String(v)&&e.sig===gs; })) SB.gone[gk].push({ v:String(v), sig:gs }); }
      if(path===changed){ if(back!==v&&(isText||!goneHas(gk,back))) setV(path,back); else if(named&&!isText) setV(path,''); }
      else if(!isText) setV(path,'');
      if(path==='size'&&!SB.f.size) SB.op=null;
    }
    if(!SB.resetting&&reset()) return;
    SB.resetting=false;
    unlock(); render(); showTop();
  }
  function restart(c){
    SB.last=null; SB.shareDesign=null;
    if(!SB.resetting&&reset()) return;
    SB.resetting=false;
    firstFail(c);
  }
  function reset(){
    var e=SB.sz[missKey()]; if(!e||e.st!=='ok'||!e.options) return false;
    SB.resetting=true; SB.last=null; SB.shareDesign=null; SB.fromShare=false; SB.unrestored=null; SB.clearedAt=null; SB.prevLower=null; SB.msgAt=null;
    SB.want=wantFromJbj(); SB.f=blankF(); SB.f.size=SB.want.size; SB.op=null; SB.good=null;
    SB.busy=false; SB.lockAt=-1; SB.firstWait=true; showTop(); firstAnswer(e.options);
    return true;
  }
  function resetDone(){ if(!SB.resetting) return; SB.resetting=false; showTop(); }
  function showTop(){
    if(!dlg) return;
    var all=dlg.querySelectorAll('.nb-sb-msg'); for(var i=0;i<all.length;i++){ all[i].textContent=''; all[i].hidden=true; }
    var m=q('.nb-sb-top'); if(!m) return;
    m.textContent=txt('not_available'); m.hidden=false;
    var b=q('.nb-sb-body'); if(b) b.scrollTop=0;
    var to=V.metal&&V.metal.group.querySelector('[role="radio"][tabindex="0"]:not([disabled])'); if(to) try{ to.focus({ preventScroll:true }); }catch(e){}
    if(b) b.scrollTop=0;
  }
  function showMsg(path,focus){
    if(!dlg) return;
    var at=String(path||'').split('.')[0], all=dlg.querySelectorAll('.nb-sb-msg');
    for(var i=0;i<all.length;i++){ all[i].textContent=''; all[i].hidden=true; }
    SB.msgAt=focus?at:null; if(at==='weight'&&V.weight) V.weight.wrap.hidden=false; if(at==='fit'&&V.fit) V.fit.wrap.hidden=false;
    if(!focus) return;
    var sub=String(path).split('.')[1], k=V[at], t=null, m=null;
    if(k&&sub==='font'){ t=k.font.querySelector('[role="radio"]')||k.font; m=k.font.closest('.nb-sb-field').querySelector('.nb-sb-msg'); }
    else if(k&&sub==='pattern'){ t=k.pats.querySelector('[role="radio"]'); m=k.pats.closest('.nb-sb-field').querySelector('.nb-sb-msg'); if(SB.f[at]){ SB.f[at].open=true; SB.f[at].tab='pattern'; render(); } }
    else if(k&&sub==='fill'){ t=k.chips.querySelector('.nb-sb-chip'); m=k.colours.querySelector('.nb-sb-msg'); }
    else if(k&&k.group){ t=k.group.querySelector('[role="radio"][aria-checked="true"]:not([disabled])')||k.group.querySelector('[role="radio"]:not([disabled])')||k.group; m=k.wrap.querySelector('.nb-sb-msg'); }    
    else if(k){ t=k.sel||k.input; m=t&&t.closest('.nb-sb-field').querySelector('.nb-sb-msg'); }
    if(!m) m=dlg.querySelector('.nb-sb-msg[data-for="'+(k?at:'confirm')+'"]');
    if(!m) return;
    m.textContent=txt('not_available'); m.hidden=false;
    if(!t) t=q('.nb-sb-primary');
    if(t&&!t.disabled) try{ t.focus(); }catch(e){}
    try{ m.scrollIntoView({ block:'nearest' }); }catch(e){}
    flash(m.closest('.nb-sb-sec'));
  }

  function q(sel){ return dlg?dlg.querySelector(sel):null; }
  function option(sel,value,label){ var o=document.createElement('option'); o.value=value; o.textContent=label; sel.appendChild(o); return o; }
  function calm(){ try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } }
  function flash(s){ if(!s) return; s.classList.remove('nb-flash'); void s.offsetWidth; s.classList.add('nb-flash'); }
  function cssq(v){ return String(v).replace(/\\/g,'\\\\').replace(/"/g,'\\"'); }
  function field(box,key,label,kind){
    var w=el('div','nb-sb-field nb-sb-f-'+key.replace('.','_')), id='nbSb_'+key.replace('.','_'), l=el('label','nb-sb-label',label); l.setAttribute('for',id); w.appendChild(l);
    var c=kind==='input'?el('input','nb-sb-input'):el('select','nb-sb-select'); c.id=id;
    if(kind==='input'){ c.type='text'; c.setAttribute('autocomplete','off'); c.setAttribute('autocapitalize','off'); c.setAttribute('spellcheck','false'); c.setAttribute('enterkeyhint','done'); w.appendChild(c); }
    else { var sw=el('div','nb-sb-sw'), sv=el('span','nb-sb-swv'); sv.setAttribute('aria-hidden','true'); sw.appendChild(sv); sw.appendChild(c); w.appendChild(sw); c.__view=sv; c.addEventListener('change',function(){ showSel(c); }); }
    var m=el('p','nb-sb-msg'); m.setAttribute('data-for',key.split('.')[0]); m.setAttribute('aria-live','polite'); m.hidden=true; w.appendChild(m);
    box.appendChild(w); return { wrap:w, label:l, sel:kind==='input'?null:c, input:kind==='input'?c:null };
  }
  var SEC={};
  function sec(box,key){
    var s=el('section','nb-sb-sec'); s.setAttribute('data-sec',key);
    var hd=el('div','nb-sb-sech'), h=el('h3','nb-sb-sh'), n=el('span','nb-sb-n'), t=el('span','nb-sb-stt'), b=el('span','nb-sb-state');
    n.setAttribute('aria-hidden','true'); t.id='nbSbH_'+key; h.appendChild(n); h.appendChild(t); hd.appendChild(h); hd.appendChild(b); s.appendChild(hd);
    var sk=el('div','nb-sb-skel'); sk.setAttribute('aria-hidden','true'); sk.innerHTML='<i></i><i></i><i></i>'; sk.hidden=true; s.appendChild(sk);
    box.appendChild(s); SEC[key]={ el:s, t:t, b:b, sk:sk, sig:'' }; return s;
  }
  function paintSec(k,title,val,rdy,busy,nolist,badge){
    var S=SEC[k]; if(!S) return;
    var cls=busy?'busy':!rdy?'locked':badge!=null?'':val?'done':'openf';
    ['busy','locked','done','openf'].forEach(function(c){ if(S.el.classList.contains(c)!==(c===cls)) S.el.classList.toggle(c,c===cls); });
    if(busy) S.el.setAttribute('aria-busy','true'); else S.el.removeAttribute('aria-busy');
    if(S.el.classList.contains('nb-sb-nolist')!==!!nolist) S.el.classList.toggle('nb-sb-nolist',!!nolist);
    S.sk.hidden=!nolist;
    if(S.t.textContent!==title) S.t.textContent=title;
    var kind=badge!=null&&!busy?'':busy?'busy':!rdy?'':val?'ok':'need';
    var bt=badge!=null&&!busy?badge:busy?txt('field_loading'):!rdy?txt('field_locked'):val?val:txt('field_choose'), sig=kind+'|'+bt;
    if(S.sig===sig) return; S.sig=sig;
    S.b.className='nb-sb-state'+(kind?' '+kind:''); S.b.textContent='';
    if(busy){ var sp=el('span','nb-sb-spin'); sp.setAttribute('aria-hidden','true'); S.b.appendChild(sp); }
    S.b.appendChild(document.createTextNode(bt));
  }
  function build(){
    if(dlg) return dlg;
    dlg=el('div','modal-overlay nb-sb-dlg'); dlg.id='nbSbDlg';
    var box=el('div','nb-sb-box'); box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-labelledby','nbSbTitle');
    var grab=el('span','nb-sb-grab'); grab.setAttribute('aria-hidden','true'); box.appendChild(grab);
    var head=el('div','nb-sb-head'), h=el('h2','nb-sb-h',txt('title')); h.id='nbSbTitle';
    var x=el('button','nb-sb-x','×'); x.type='button'; x.setAttribute('aria-label',txt('cancel')); x.addEventListener('click',function(){ decline(); });
    head.appendChild(h); head.appendChild(x); box.appendChild(head);
    var body=el('div','nb-sb-body'); box.appendChild(body);
    var top=el('p','nb-sb-msg nb-sb-top'); top.setAttribute('data-for','top'); top.setAttribute('role','alert'); top.hidden=true; body.appendChild(top);
    if(txt('intro')) body.appendChild(el('p','nb-sb-intro',txt('intro')));
    V.metal=tilesField(sec(body,'metal'),'metal',txt('metal_label'),'nb-sb-tiles-metal',true);
    V.profile=tilesField(sec(body,'profile'),'profile',txt('profile_label'),'nb-sb-tiles-profile',true);
    var more=el('div','nb-sb-more'); more.setAttribute('role','status'); more.setAttribute('aria-live','polite'); more.hidden=true;
    var msp=el('span','nb-sb-spin'); msp.setAttribute('aria-hidden','true'); more.appendChild(msp); more.appendChild(el('span','nb-sb-moret')); body.appendChild(more);
    var s3=sec(body,'size'), pair0=el('div','nb-sb-pair nb-sb-pair-size'); s3.appendChild(pair0); V.pair0=pair0;
    V.size=field(pair0,'size',txt('size_label'),'select');
    V.fit=tilesField(pair0,'fit',txt('fit_label'),'nb-sb-tiles-fit');
    var gw=el('div','nb-sb-groups'); gw.setAttribute('role','group'); gw.hidden=true; s3.appendChild(gw); V.groups=gw;
    V.style=tilesField(sec(body,'style'),'style',txt('style_label'),'nb-sb-tiles-style',true);
    var s5=sec(body,'width'), pair=el('div','nb-sb-pair nb-sb-pair-width'); s5.appendChild(pair); V.pair=pair;
    V.width=tilesField(pair,'width',txt('width_label'),'nb-sb-tiles-width');
    V.weight=tilesField(pair,'weight',txt('weight_label'),'nb-sb-tiles-weight');
    V.finish=tilesField(sec(body,'finish'),'finish',txt('finish_label'),'nb-sb-tiles-finish',true);
    var s7=sec(body,'eng'); s7.hidden=true;
    ['inside','outside'].forEach(function(k){
      var sec=el('div','nb-sb-eng nb-sb-eng-'+k); sec.hidden=true; s7.appendChild(sec);
      var head=el('div','nb-sb-enghead'), pic=el('span','nb-sb-pic nb-sb-engpic'); pic.setAttribute('aria-hidden','true'); pic.innerHTML=engSvg(k);
      var hl=el('span','nb-sb-label nb-sb-engl',txt(k==='inside'?'engraving_label':'outside_label')); hl.id='nbSbEngL_'+k;
      var add=el('button','nb-sb-btn nb-sb-engadd'); add.type='button'; add.setAttribute('aria-expanded','false'); add.setAttribute('aria-controls','nbSbEngB_'+k); add.setAttribute('aria-describedby',hl.id);
      head.appendChild(pic); head.appendChild(hl); head.appendChild(add); sec.appendChild(head);
      var eb=el('div','nb-sb-engbody'); eb.id='nbSbEngB_'+k; eb.hidden=true; sec.appendChild(eb);
      var tabs=el('div','nb-sb-tabs'); tabs.setAttribute('role','tablist'); tabs.setAttribute('aria-labelledby',hl.id); eb.appendChild(tabs);
      var tT=el('button','nb-sb-tab',txt('tab_text')), tP=el('button','nb-sb-tab',txt('tab_pattern'));
      [tT,tP].forEach(function(b,i){ var nm=i?'pattern':'text'; b.type='button'; b.setAttribute('role','tab'); b.id='nbSbTab_'+k+'_'+nm; b.setAttribute('aria-controls','nbSbPan_'+k+'_'+nm); b.setAttribute('data-tab',nm); tabs.appendChild(b);
        b.addEventListener('click',function(){ SB.f[k].tab=nm; render(); try{ b.focus(); }catch(e){} }); });
      tabs.addEventListener('keydown',function(ev){ if(ev.key!=='ArrowLeft'&&ev.key!=='ArrowRight') return; ev.preventDefault(); var o=SB.f[k].tab==='pattern'?tT:tP; if(!o.hidden) o.click(); });
      var panT=el('div','nb-sb-pan'); panT.id='nbSbPan_'+k+'_text'; panT.setAttribute('role','tabpanel'); panT.setAttribute('aria-labelledby',tT.id); eb.appendChild(panT);
      var panP=el('div','nb-sb-pan'); panP.id='nbSbPan_'+k+'_pattern'; panP.setAttribute('role','tabpanel'); panP.setAttribute('aria-labelledby',tP.id); panP.hidden=true; eb.appendChild(panP);
      var t=field(panT,k+'.text',txt('message_label'),'input');
      var cut=el('p','nb-sb-cut'); cut.id='nbSbCut_'+k; cut.setAttribute('role','status'); cut.setAttribute('aria-live','polite'); cut.hidden=true;
      var cnt=el('span','nb-sb-count'); cnt.id='nbSbCount_'+k; cnt.setAttribute('aria-hidden','true');
      var csr=el('span','nb-sb-vh nb-sb-countsr'); csr.id='nbSbCountSr_'+k; csr.setAttribute('aria-live','polite'); t.input.setAttribute('aria-describedby',csr.id);
      var crow=el('div','nb-sb-cnt'); crow.appendChild(cut); crow.appendChild(cnt); crow.appendChild(csr); t.wrap.insertBefore(crow,t.wrap.querySelector('.nb-sb-msg'));
      var fo=tilesField(panT,k+'.font',txt('font_label'),'nb-sb-tiles-font');
      var cw=el('div','nb-sb-field nb-sb-colours'), cl=el('span','nb-sb-label',txt('colour_label')); cl.id='nbSbColL_'+k; cw.appendChild(cl);
      var row=el('div','nb-sb-chips'); row.setAttribute('role','radiogroup'); row.setAttribute('aria-labelledby',hl.id+' '+cl.id);     cw.appendChild(row);
      var cm=el('p','nb-sb-msg'); cm.setAttribute('data-for',k); cm.setAttribute('aria-live','polite'); cm.hidden=true; cw.appendChild(cm);
      panT.appendChild(cw);
      var pa=tilesField(panP,k+'.pattern',txt('pattern_label'),'nb-sb-tiles-pat');
      fo.group.setAttribute('aria-labelledby',hl.id+' '+fo.label.id); pa.group.setAttribute('aria-labelledby',hl.id+' '+pa.label.id);
      V[k]={ sec:sec, input:t.input, count:cnt, countSr:csr, cut:cut, font:fo.group, fontT:fo, chips:row, colours:cw, add:add, body:eb, tabs:tabs, tT:tT, tP:tP, panT:panT, panP:panP, pats:pa.group, patT:pa };
      add.addEventListener('click',function(){
        var x=SB.f[k];
        if(x.open) SB.f[k]=Object.assign(blankE(),{ font:x.font }); else { x.open=true; x.tab=x.tab||'text'; }
        SB.lastField=k; showMsg('',false); render();
        var to=SB.f[k].open?(SB.f[k].tab==='pattern'?V[k].pats.querySelector('[role="radio"][tabindex="0"]'):V[k].input):add; if(to) try{ to.focus(); }catch(e){}
      });
      t.input.addEventListener('input',function(){ SB.f[k].cut=false; var v=clean(t.input.value,k,SB.f[k].font); if(v!==t.input.value) t.input.value=v; SB.f[k].text=v; if(v) SB.f[k].pattern=''; SB.lastField=k; showMsg('',false); render(); });
      t.input.addEventListener('beforeinput',function(ev){
        var it=ev.inputType||'', d=null;
        if(it==='insertFromPaste'||it==='insertFromDrop') d=ev.dataTransfer?ev.dataTransfer.getData('text/plain'):ev.data;
        else if(it==='insertText'&&ev.data&&ev.data.length>1) d=ev.data;
        if(d==null) return;
        ev.preventDefault();
        var i=t.input, a=i.selectionStart==null?i.value.length:i.selectionStart, b=i.selectionEnd==null?a:i.selectionEnd;
        var v=clean(i.value.slice(0,a)+d+i.value.slice(b),k,SB.f[k].font);
        i.value=v; SB.f[k].text=v; SB.f[k].cut=false; if(v) SB.f[k].pattern=''; SB.lastField=k; showMsg('',false); render();
      });
      t.input.addEventListener('blur',function(){ var v=final(t.input.value); if(v!==t.input.value){ t.input.value=v; SB.f[k].text=v; render(); } });
      t.input.addEventListener('focus',function(){ setTimeout(function(){ try{ t.input.scrollIntoView({ block:'center' }); }catch(e){} },300); });
    });
    var foot=el('div','nb-sb-actions');
    var stl=el('div','nb-sb-status');
    var wait=el('div','nb-sb-wait nb-wait'); wait.setAttribute('role','status'); wait.setAttribute('aria-live','polite'); wait.hidden=true;
    var spin=el('span','nb-sb-spin nb-spin'); spin.setAttribute('aria-hidden','true'); wait.appendChild(spin); wait.appendChild(el('span','nb-sb-waitt nb-wait-t')); stl.appendChild(wait);
    var todo=el('button','nb-sb-todo'); todo.type='button'; todo.hidden=true; stl.appendChild(todo);
    todo.addEventListener('click',function(){
      var S=SEC[todo.__at], s=S&&S.el; if(!s) return;
      try{ s.scrollIntoView({ block:'start', behavior:calm()?'auto':'smooth' }); }catch(e){}
      flash(s); var c=s.querySelector('select:not([disabled]), [role="radio"][tabindex="0"]:not([disabled]), .nb-sb-group:not([disabled])'); if(c) try{ c.focus({ preventScroll:true }); }catch(e){}
    });
    var okl=el('div','nb-sb-ok'); okl.setAttribute('role','status'); okl.setAttribute('aria-live','polite'); okl.hidden=true; stl.appendChild(okl);
    foot.appendChild(stl); V.status={ todo:todo, ok:okl };
    var bar=el('div','nb-sb-bar'); bar.setAttribute('aria-hidden','true'); bar.hidden=true; box.insertBefore(bar,body);
    var cancel=el('button','nb-sb-btn nb-sb-cancel',txt('cancel')); cancel.type='button'; cancel.addEventListener('click',function(){ decline(); });
    var ok=el('button','nb-sb-btn nb-sb-primary',txt('confirm')); ok.type='button'; ok.addEventListener('click',confirm);
    var cm2=el('p','nb-sb-msg'); cm2.setAttribute('data-for','confirm'); cm2.setAttribute('aria-live','polite'); cm2.hidden=true;
    var btns=el('div','nb-sb-btns'); btns.appendChild(cancel); btns.appendChild(ok);
    foot.appendChild(cm2); foot.appendChild(btns); box.appendChild(foot);
    dlg.appendChild(box);
    dlg.addEventListener('click',function(ev){ if(ev.target===dlg) decline(); });
    V.size.sel.addEventListener('change',function(){ var v=V.size.sel.value; SB.f.size=v; SB.f.group=null; SB.lastField='size'; showMsg('',false); if(v) askOptions('size'); else { SB.op=null; render(); } });
    document.body.appendChild(dlg);
    return dlg;
  }
  function clean(v,k,font){
    var extra=chars().replace(/[\\\]\[^-]/g,'\\$&'), re=new RegExp('[^A-Za-z0-9 '+extra+']','g');
    v=String(v||'').replace(/[\r\n\t]+/g,' ').replace(re,'').replace(/ {2,}/g,' ').replace(/^ +/,'');
    var keep=SB.f[k].font; SB.f[k].font=font; var m=fontMax(k); SB.f[k].font=keep;
    return (m!=null&&v.length>m)?v.slice(0,m):v;
  }
  function final(v){ return String(v||'').replace(/ {2,}/g,' ').trim(); }
  function showSel(sel){
    var o=sel.options[sel.selectedIndex], v=sel.__view, tx=o?o.textContent:'';
    if(v&&v.textContent!==tx) v.textContent=tx;
    var p=sel.parentNode; if(p&&p.classList.contains('nb-sb-sw')){ if(p.classList.contains('dis')!==sel.disabled) p.classList.toggle('dis',sel.disabled); if(p.classList.contains('ph')!==!sel.value) p.classList.toggle('ph',!sel.value); }
  }
  function fillSel(sel,f,val,lockd){
    var list=listOf(f), sig=JSON.stringify(list)+'|'+val;
    if(sel.__sig!==sig){ sel.__sig=sig; sel.textContent=''; option(sel,'',txt('size_placeholder')); list.forEach(function(x){ option(sel,x.value,x.label); }); }
    sel.value=val||''; if(sel.value!==(val||'')) sel.value='';
    sel.disabled=!!lockd; showSel(sel);
  }
  function labelOf(k,v){ var r=''; if(v==null||v==='') return r; listOf(k).forEach(function(x){ if(x.value===String(v)) r=x.label; }); return r; }
  function pickChoice(k,v){ if(!v||!offered(k,v)||SB.f[k]===v) return; SB.f[k]=v; SB.lastField=k; showMsg('',false); askChoices(k); }
  function render(){
    if(!dlg) return;
    var f=SB.f, li=SB.lockAt, isL=function(k){ return SB.busy&&li>=0&&ORDER.indexOf(k)>=li; };
    var upOk=f.profile&&f.metal&&f.style&&f.weight, ch=!!SB.ch, o=!!(SB.op&&f.size), tone=metalTone(f.metal);
    fillTiles(V.metal,listOf('metal'),f.metal,isL('metal')||!ch,function(x,h){ h.className='nb-sb-pic nb-sb-mdot'; paintMetal(h,x.value); },function(v){ pickChoice('metal',v); },'nb-sb-mchip');
    fillTiles(V.profile,listOf('profile'),f.profile,isL('profile')||!ch,function(x,h){ h.className='nb-sb-pic nb-sb-m-'+tone; h.innerHTML=profileSvg(x.value); },function(v){ pickChoice('profile',v); },'nb-sb-pcard');
    var fits=listOf('fit');
    V.fit.wrap.hidden=!(ch&&(fits.length>1||SB.msgAt==='fit'));
    if(V.pair0.classList.contains('one')!==V.fit.wrap.hidden) V.pair0.classList.toggle('one',V.fit.wrap.hidden);
    if(V.size.label.classList.contains('nb-sb-vh')!==V.fit.wrap.hidden) V.size.label.classList.toggle('nb-sb-vh',V.fit.wrap.hidden);
    fillTiles(V.fit,fits,f.fit,isL('fit')||!ch,function(x,h){ h.className='nb-sb-pic nb-sb-m-'+tone; h.innerHTML=fitSvg(x.value); },function(v){ if(v===SB.f.fit) return; SB.f.fit=v; SB.lastField='fit'; showMsg('',false); askChoices('fit'); });
    fillTiles(V.style,listOf('style'),f.style,isL('style')||!ch,function(x,h){ h.className='nb-sb-pic nb-sb-m-'+tone; h.innerHTML=styleSvg(x.value); },function(v){ pickChoice('style',v); },'nb-sb-scard');
    var ws=listOf('weight');
    V.weight.wrap.hidden=!(ch&&(ws.length>1||SB.msgAt==='weight'));
    if(V.pair&&V.pair.classList.contains('one')!==V.weight.wrap.hidden) V.pair.classList.toggle('one',V.weight.wrap.hidden);
    if(V.width.label.classList.contains('nb-sb-vh')!==V.weight.wrap.hidden) V.width.label.classList.toggle('nb-sb-vh',V.weight.wrap.hidden);
    fillTiles(V.weight,ws,f.weight,isL('weight')||!ch,function(x,h){ h.className='nb-sb-pic nb-sb-m-'+tone; h.innerHTML=weightSvg(x.value); },function(v){ if(v===SB.f.weight) return; SB.f.weight=v; SB.lastField='weight'; showMsg('',false); askChoices('weight'); });
    fillSel(V.size.sel,'size',f.size,isL('size')||!ch||!upOk);
    fillTiles(V.width,listOf('width'),f.width,isL('width')||!SB.op||!f.size,function(x,h){ h.className='nb-sb-wbar nb-sb-m-'+tone; h.style.height=Math.max(3,Math.round(Number(x.value)*2.2))+'px'; },function(v){ if(v===SB.f.width) return; SB.f.width=v; SB.lastField='width'; showMsg('',false); askOptions('width'); });
    lockLine(V.width,!(SB.op&&f.size));
    fillTiles(V.finish,listOf('finish'),f.finish,isL('finish')||!SB.op||!f.size,function(x,h){ paintSwatch(h,x); },function(v){ if(v===SB.f.finish) return; SB.f.finish=v; SB.lastField='finish'; showMsg('',false); render(); },'nb-sb-fin');
    lockLine(V.finish,!o);
    paintGroups();
    var words=(cfg()||{}).font_words||{}, anyEng=false;
    ['inside','outside'].forEach(function(k){
      var l=SB.op&&f.size?loc(k):null, pl=SB.op&&f.size?patList(k):[], v=V[k], x=f[k], lk=isL(k);
      v.sec.hidden=!l&&!pl.length; if(v.sec.hidden) return; anyEng=true;
      var open=!!x.open;
      var at=txt(open?'engraving_remove':'engraving_add'); if(v.add.textContent!==at) v.add.textContent=at;
      v.add.setAttribute('aria-expanded',open?'true':'false'); v.add.disabled=lk; v.sec.classList.toggle('open',open);
      if(v.body.hidden!==!open) v.body.hidden=!open;
      if(!open) return;
      var tab=(x.tab==='pattern'&&pl.length)||!l?'pattern':'text';
      v.tabs.hidden=!(l&&pl.length); v.tT.hidden=!l; v.tP.hidden=!pl.length;
      [[v.tT,'text'],[v.tP,'pattern']].forEach(function(p){ var on=p[1]===tab; p[0].setAttribute('aria-selected',on?'true':'false'); p[0].tabIndex=on?0:-1; p[0].classList.toggle('on',on); p[0].disabled=lk; });
      v.panT.hidden=tab!=='text'; v.panP.hidden=tab!=='pattern';
      if(l){
        if(v.input.value!==x.text) v.input.value=x.text;
        var m=fontMax(k); if(m!=null) v.input.maxLength=m; else v.input.removeAttribute('maxlength');
        v.input.disabled=lk;
        var cn=m==null?String(x.text.length):(x.text.length+'/'+m); if(v.count.textContent!==cn) v.count.textContent=cn;
        speakCount(v,m==null||!txt('chars_left')?'':(Math.max(0,m-x.text.length)+' '+txt('chars_left')));
        var ct=x.cut?txt('text_shortened'):''; if(v.cut.textContent!==ct) v.cut.textContent=ct; v.cut.hidden=!ct;
        var fl=l.fonts.filter(function(y){ return !goneHas(k+'_font',y.value); }).map(function(y){ return { value:y.value, label:y.label, sub:words[y.label]||'', sample:y.sample }; });
        fillTiles(v.fontT,fl,x.font,lk,fontPic,function(val){ var t0=SB.f[k].text; SB.f[k].font=val; SB.f[k].text=clean(SB.f[k].text,k,val); SB.f[k].cut=SB.f[k].text.length<t0.length;     SB.lastField=k; showMsg('',false); render(); });
        var fills=(vl(l.fills)?l.fills:[]).filter(function(y){ return !goneHas(k+'_colour',y.value); });
        v.colours.hidden=!final(x.text)||!fills.length;
        if(!final(x.text)&&x.fill) x.fill='';
        var csig=JSON.stringify(fills)+'|'+x.fill+'|'+lk;
        if(v.chips.__sig!==csig){
          v.chips.__sig=csig; v.chips.textContent='';
          [{ value:'', label:txt('colour_none') }].concat(fills).forEach(function(y){
            var b=el('button','nb-sb-chip'+(x.fill===y.value?' on':'')); b.type='button'; b.setAttribute('role','radio'); b.setAttribute('aria-checked',x.fill===y.value?'true':'false'); b.setAttribute('data-fill',y.value); b.disabled=lk;
            var dot=el('span','nb-sb-dot'); dot.setAttribute('aria-hidden','true');
            if(y.value){ var c=y.value.toLowerCase(); try{ if(window.CSS&&CSS.supports&&CSS.supports('color',c)) dot.style.background=c; else dot.className+=' nb-sb-dot-x'; }catch(e){} } else dot.className+=' nb-sb-dot-none';
            b.appendChild(dot); b.appendChild(el('span','nb-sb-chipt',y.label));
            b.addEventListener('click',function(){ SB.f[k].fill=y.value; SB.lastField=k; showMsg('',false); render(); var n=q('.nb-sb-eng-'+k+' .nb-sb-chip[data-fill="'+cssq(y.value)+'"]'); if(n) try{ n.focus(); }catch(e){} });
            v.chips.appendChild(b);
          });
        }
      }
      if(pl.length) fillTiles(v.patT,pl,x.pattern,lk,patternPic,function(val){ SB.f[k].pattern=val; SB.f[k].text=''; SB.f[k].fill=''; SB.lastField=k; showMsg('',false); render(); });
    });
    var first=!!(SB.busy&&SB.firstWait); dlg.classList.toggle('nb-sb-first',first);
    ['profile','metal','fit','style','weight','size','width','finish'].forEach(function(k){ var w=V[k]&&V[k].wrap, l=!!(SB.busy&&isL(k)&&!first); if(w&&w.classList.contains('nb-sb-loading')!==l){ w.classList.toggle('nb-sb-loading',l); if(l) w.setAttribute('aria-busy','true'); else w.removeAttribute('aria-busy'); } });
    var fitOn=!V.fit.wrap.hidden, wOn=!V.weight.wrap.hidden, u=unknownCfg(), sv='', wv='';
    if(f.size&&f.size!=='U') sv=labelOf('size',f.size); else if(f.size==='U'&&u&&f.group!=null) u.groups.forEach(function(g){ if(g.index===f.group) sv=g.label; });
    if(sv&&fitOn&&f.fit) sv+=' · '+labelOf('fit',f.fit);
    if(o&&f.width){ wv=labelOf('width',f.width); if(wv&&wOn&&f.weight) wv+=' · '+labelOf('weight',f.weight); }
    paintSec('metal',txt('metal_label'),labelOf('metal',f.metal),ch,isL('metal'),!ch);
    paintSec('profile',txt('profile_label'),labelOf('profile',f.profile),ch,isL('profile'),!ch);
    paintSec('size',txt('size_label')+(fitOn?' & '+txt('fit_label'):''),sv,ch,isL('fit')||isL('size'),!ch);
    paintSec('style',txt('style_label'),labelOf('style',f.style),ch,isL('style'),!ch);
    paintSec('width',txt('width_label')+(wOn?' & '+txt('weight_label'):''),wv,ch,isL('weight')||isL('width'),!ch);
    paintSec('finish',txt('finish_label'),o?labelOf('finish',f.finish):'',o,isL('finish'),false);
    SEC.eng.el.hidden=!(o&&anyEng);
    paintSec('eng',txt('engraving_heading'),'',o,o&&(isL('inside')||isL('outside')),false,txt('optional'));
    var no=0; ['metal','profile','size','style','width','finish','eng'].forEach(function(k){ var S=SEC[k]; if(!S||S.el.hidden) return; no++; var nb=S.el.querySelector('.nb-sb-n'), t=S.el.classList.contains('done')?'✓':String(no); if(nb.textContent!==t) nb.textContent=t; });
    paintWait(); paintMore(); paintStatus();
    dlg.classList.toggle('nb-sb-busy',SB.busy);
    var ok=q('.nb-sb-primary'); if(ok) ok.disabled=!ready();
  }
  function speakCount(v,t){ var s=v.countSr; if(!s||s.__want===t) return; s.__want=t; clearTimeout(s.__tm); s.__tm=setTimeout(function(){ if(s.textContent!==s.__want) s.textContent=s.__want; },900); }
  function lockLine(T,on){ var p=T.lock; if(!p) return; if(p.hidden!==!on) p.hidden=!on; var t=on?txt('size_first'):''; if(p.textContent!==t) p.textContent=t; }
  function missing(){
    var f=SB.f, m=[]; if(!SB.ch||!f) return m;
    var add=function(k,t){ if(t) m.push([k,t]); };
    if(!f.metal) add('metal',txt('metal_label'));
    if(!f.profile) add('profile',txt('profile_label'));
    if(!f.size) add('size',txt('size_label')); else if(f.size==='U'&&unknownCfg()&&f.group==null) add('size',txt('size_label'));
    if(listOf('fit').length&&!f.fit) add('size',txt('fit_label'));
    if(!f.style) add('style',txt('style_label'));
    if(!f.width) add('width',txt('width_label'));
    if(!f.weight) add('width',txt('weight_label'));
    if(!f.finish) add('finish',txt('finish_label'));
    return m;
  }
  function paintStatus(){
    var S=V.status; if(!S) return;
    var m=SB.busy?[]:missing(), rd=!SB.busy&&ready(), td=S.todo;
    if(td.hidden!==!m.length) td.hidden=!m.length;
    if(m.length){
      var l=m.map(function(x){ return x[1]; }).join(', '), sig=txt('todo')+'|'+l; td.__at=m[0][0];
      if(td.__sig!==sig){ td.__sig=sig; td.textContent=''; td.appendChild(document.createTextNode(txt('todo')+' ')); td.appendChild(el('b','',l)); }
    }
    var t=rd?txt('all_set'):''; if(S.ok.hidden!==!rd) S.ok.hidden=!rd; if(S.ok.textContent!==t) S.ok.textContent=t;
  }
  function paintGroups(){
    var gw=V.groups, u=unknownCfg(); if(!gw) return;
    var show=!!(u&&SB.f.size==='U'), sig=show+'|'+SB.f.group+'|'+SB.busy; if(gw.__sig===sig) return; gw.__sig=sig;
    gw.hidden=!show; gw.textContent=''; if(!show) return;
    gw.setAttribute('aria-label',txt('group_chosen'));
    gw.appendChild(el('span','nb-sb-k',SB.f.group==null?txt('group_choose'):txt('group_chosen')));
    var row=el('div','nb-sb-grow');
    u.groups.forEach(function(g){
      var b=el('button','nb-sb-group'+(SB.f.group===g.index?' on':''),g.label); b.type='button'; b.disabled=SB.busy;
      b.setAttribute('aria-pressed',SB.f.group===g.index?'true':'false'); b.setAttribute('data-nb-sb-group',String(g.index));
      b.addEventListener('click',function(){ SB.f.group=g.index; render(); var nb=q('.nb-sb-group[data-nb-sb-group="'+g.index+'"]'); if(nb) try{ nb.focus(); }catch(e){} });
      row.appendChild(b);
    });
    gw.appendChild(row);
  }
  function waitStart(changed){
    var now=Date.now(), ms=Number((cfg()||{}).wait_long_seconds)*1000, cont=changed!=='confirm'&&SB.wT0&&(SB.wTimer||now-(SB.wEnd||0)<100);
    if(!cont){ SB.wT0=now; SB.waitLong=false; }
    clearTimeout(SB.wTimer); SB.wTimer=null;
    if(SB.waitLong) return;
    SB.wTimer=setTimeout(function(){ SB.wTimer=null; if(SB.busy){ SB.waitLong=true; paintWait(); } },Math.max(0,ms-(now-SB.wT0)));
  }
  function waitStop(){ clearTimeout(SB.wTimer); SB.wTimer=null; SB.wEnd=Date.now(); paintWait(); }
  function paintWait(){
    var w=q('.nb-sb-wait'), b=q('.nb-sb-bar'); if(!w) return;
    var t=SB.busy?txt(SB.waitLong?'wait_long':'wait'):'', tx=w.querySelector('.nb-sb-waitt');
    if(w.hidden!==!SB.busy) w.hidden=!SB.busy;
    if(b&&b.hidden!==!SB.busy) b.hidden=!SB.busy;
    if(tx&&tx.textContent!==t) tx.textContent=t;
    w.classList.toggle('long',!!(SB.busy&&SB.waitLong));
  }

  function tilesField(box,key,label,cls,hideLabel){
    var k2=key.replace('.','_'), w=el('div','nb-sb-field nb-sb-f-'+k2+' nb-sb-tf'), l=el('span','nb-sb-label'+(hideLabel?' nb-sb-vh':''),label); l.id='nbSbL_'+k2; w.appendChild(l);
    var g=el('div','nb-sb-tiles '+(cls||'')); g.id='nbSb_'+k2; g.setAttribute('role','radiogroup'); g.setAttribute('aria-labelledby',l.id); g.tabIndex=-1; g.value=''; g.disabled=false; w.appendChild(g);
    var lk=el('p','nb-sb-lock'); lk.hidden=true; w.appendChild(lk);
    var m=el('p','nb-sb-msg'); m.setAttribute('data-for',key.split('.')[0]); m.setAttribute('aria-live','polite'); m.hidden=true; w.appendChild(m);
    box.appendChild(w);
    var T={ wrap:w, label:l, sel:g, group:g, lock:lk, onPick:null };
    g.addEventListener('focus',function(ev){ if(ev.target!==g) return; var r=g.querySelector('[role="radio"][tabindex="0"]:not([disabled])')||g.querySelector('[role="radio"]:not([disabled])'); if(r) try{ r.focus(); }catch(e){} });
    g.addEventListener('keydown',function(ev){
      var it=Array.prototype.slice.call(g.querySelectorAll('[role="radio"]:not([disabled])')), i=it.indexOf(document.activeElement); if(i<0) return;
      var k=ev.key, n=-1, c, j;
      if(k==='ArrowRight'||k==='ArrowDown') n=(i+1)%it.length; else if(k==='ArrowLeft'||k==='ArrowUp') n=(i-1+it.length)%it.length;
      else if(k==='Home') n=0; else if(k==='End') n=it.length-1;
      else if(k&&k.length===1&&/\S/.test(k)&&!ev.ctrlKey&&!ev.metaKey&&!ev.altKey){ c=k.toLowerCase(); for(j=1;j<=it.length;j++){ var tn=it[(i+j)%it.length].querySelector('.nb-sb-tn'); if(tn&&String(tn.textContent).trim().toLowerCase().charAt(0)===c){ n=(i+j)%it.length; break; } } }
      if(n<0) return;
      ev.preventDefault(); it.forEach(function(b,x){ b.tabIndex=x===n?0:-1; }); try{ it[n].focus(); }catch(e){}
    });
    return T;
  }
  function fillTiles(T,list,val,lockd,pic,onPick,cls){
    var g=T.group, sig=JSON.stringify(list)+'|'+(SB.f&&SB.f.metal), i, b, on;
    T.onPick=onPick; g.value=val||''; g.disabled=!!lockd; if(T.wrap.classList.contains('dis')!==!!lockd) T.wrap.classList.toggle('dis',!!lockd);
    if(g.__sig!==sig){
      var sl=g.scrollLeft; g.__sig=sig; g.textContent='';
      list.forEach(function(x){
        var bt=el('button','nb-sb-tile'+(cls?' '+cls:'')); bt.type='button'; bt.setAttribute('role','radio'); bt.setAttribute('data-value',x.value);
        if(pic){ var p=el('span','nb-sb-pic'); p.setAttribute('aria-hidden','true'); pic(x,p); bt.appendChild(p); }
        var t=el('span','nb-sb-tt'); t.appendChild(el('span','nb-sb-tn',x.label)); if(x.sub) t.appendChild(el('span','nb-sb-ts',x.sub)); bt.appendChild(t);
        bt.addEventListener('click',function(){ if(bt.disabled||!T.onPick) return; T.onPick(x.value); if(!bt.disabled&&bt.isConnected) try{ bt.focus(); }catch(e){} });
        g.appendChild(bt);
      });
      if(sl) g.scrollLeft=sl;
    }
    var bs=g.children, has=false, fa=document.activeElement, fin=(fa&&fa.parentNode===g&&!lockd)?fa:null;
    for(i=0;i<bs.length;i++) if(bs[i].getAttribute('data-value')===String(val)) has=true;
    for(i=0;i<bs.length;i++){
      b=bs[i]; on=b.getAttribute('data-value')===String(val);
      if(b.classList.contains('on')!==on) b.classList.toggle('on',on);
      if(b.getAttribute('aria-checked')!==(on?'true':'false')) b.setAttribute('aria-checked',on?'true':'false');
      b.tabIndex=fin?(b===fin?0:-1):((on||(!has&&i===0))?0:-1);
      if(b.disabled!==!!lockd) b.disabled=!!lockd;
    }
  }

  function svgStr(vb,inner){ return '<svg viewBox="'+vb+'" focusable="false" aria-hidden="true">'+inner+'</svg>'; }
  var MC={ y10:'#e3c97a', y14:'#d9b456', y18:'#d4a536', y22:'#cf9a1f', r10:'#e7b4a0', r14:'#dfa48c', r18:'#d6927a', w:'#dcdde0', pw:'#d4d5d6', plat:'#cfd2d6', pall:'#c9ccd0', ag:'#e6e8ec', co:'#8e959e', ti:'#9a9ea3', zr:'#3f4247' };
  function metalKey(code){
    var c=String(code||'').toUpperCase(), m=/^(\d{1,2})K(Y|R|W|PW|X1)/.exec(c);
    if(/YGP/.test(c)) return 'y14';
    if(m){ if(m[2]==='Y') return 'y'+(m[1]>=22?22:m[1]>=18?18:m[1]>=14?14:10); if(m[2]==='R') return 'r'+(m[1]>=18?18:m[1]>=14?14:10); if(m[2]==='PW') return 'pw'; return 'w'; }
    if(/PLAT/.test(c)) return 'plat'; if(/PALL/.test(c)) return 'pall'; if(/STER|CONT|SILV/.test(c)) return 'ag'; if(/COBALT/.test(c)) return 'co'; if(/TITAN/.test(c)) return 'ti'; if(/ZIRC/.test(c)) return 'zr';
    return 'w';
  }
  function metalColour(code){ return MC[metalKey(String(code||'').split('_')[0])]; }
  function metalTone(m){ var k=metalKey(String(m||'').split('_')[0]); return k.charAt(0)==='y'?'yellow':k.charAt(0)==='r'?'rose':k==='co'||k==='ti'?'grey':k==='zr'?'dark':'white'; }
  function finFamily(code){ var c=String(code||'').toUpperCase(); if(c===''||c==='POLISHED') return 'pol'; if(/HAMMER/.test(c)) return 'hammer'; if(/ROCK|STONE/.test(c)) return 'stone'; if(/FLORENTINE/.test(c)) return 'flor'; if(/SATIN|SILK|BRUSH/.test(c)) return 'brush'; return 'frost'; }
  var PROF={ 'flat':'M4 6h32v10q-16 6-32 0z', 'half round':'M4 16q16-16 32 0q-16 6-32 0z', 'concave':'M4 6q16 8 32 0v10q-16 6-32 0z', 'full round':'M6 12a14 8 0 1 0 28 0a14 8 0 1 0-28 0z',
    'knife':'M4 16L20 4L36 16q-16 6-32 0z', 'reverse knife':'M4 5L20 11L36 5v11q-16 6-32 0z', 'round tapered':'M9 16q11-13 22 0q-11 5-22 0z', 'square':'M9 4h22v16h-22z', 'flat tapered':'M7 8h26v8q-13 5-26 0z', 'european-style':'M4 6h32v10q-16 2-32 0z' };
  function profileSvg(name){ var d=PROF[String(name||'').toLowerCase()]||'M4 6h32v12h-32z'; return svgStr('0 0 40 24','<path class="b" d="'+d+'"/><path class="h" d="M8 8h10v2h-10z"/>'); }
  function styleSvg(name){
    var n=String(name||'').toLowerCase(), s='<rect class="b" x="0" y="3" width="60" height="14" rx="2"/>', i;
    if(/bevel/.test(n)) s+='<rect class="d" x="0" y="3" width="60" height="3"/><rect class="d" x="0" y="14" width="60" height="3"/>';
    if(/step/.test(n)) s+='<rect class="h" x="0" y="6" width="60" height="8"/>'+(/double step/.test(n)?'<rect class="h" x="0" y="8" width="60" height="4"/>':'');
    if(/round edge/.test(n)&&!/groov/.test(n)) s+='<rect class="h" x="0" y="4" width="60" height="2"/><rect class="h" x="0" y="14" width="60" height="2"/>';
    if(/groov/.test(n)) s+='<path class="l" d="M0 6.5h60M0 13.5h60"/>';
    if(/center/.test(n)) s+='<path class="l" d="M0 10h60"/>';
    if(/rope/.test(n)) for(i=0;i<60;i+=4) s+='<path class="l" d="M'+i+' 17l4-14"/>';
    if(/trapez/.test(n)) s='<path class="b" d="M4 3h52l4 14h-60z"/>';
    if(/milgrain|bead/.test(n)){
      var wide=/wide/.test(n), step=wide?5:3.5, r=wide?1.4:0.9, rows=/bead/.test(n)&&!/milgrain/.test(n)?[10]:(/double/.test(n)?[4.6,6.8,13.2,15.4]:[4.8,15.2]);
      rows.forEach(function(y){ for(i=step/2;i<60;i+=step) s+='<circle class="g" cx="'+i.toFixed(1)+'" cy="'+y+'" r="'+(rows.length===1?1.8:r)+'"/>'; });
    }
    return svgStr('0 0 60 20',s);
  }
  var WEIGHT_H={ 'ultra-lightweight':4, 'lightweight':6, 'standard weight':8, 'heavyweight':11 };
  function weightSvg(name){ var h=WEIGHT_H[String(name||'').toLowerCase()]||8; return svgStr('0 0 40 24','<rect class="b" x="4" y="'+(12-h/2)+'" width="32" height="'+h+'" rx="'+Math.min(3,h/2)+'"/>'); }
  function fitSvg(name){ return svgStr('0 0 40 24',/comfort/i.test(name)?'<path class="b" d="M4 5h32v10q-16 7-32 0z"/>':'<path class="b" d="M4 5h32v13h-32z"/>'); }
  function engSvg(where){ return svgStr('0 0 40 24','<ellipse class="b" cx="20" cy="12" rx="17" ry="9"/><ellipse class="i" cx="20" cy="12" rx="12" ry="5.5"/>'+(where==='inside'?'<path class="l2" d="M12 12h3M17 12h3M22 12h3"/>':'<path class="l2" d="M8 6.5h3M13 5h3M19 4.6h3M25 5h3"/>')); }
  function paintMetal(holder,code){
    var two=String(code||'').split('_');
    holder.style.backgroundColor=metalColour(two[0]);
    holder.style.backgroundImage=two[1]?('linear-gradient(90deg,transparent 50%,'+metalColour(two[1])+' 50%),'+'linear-gradient(135deg,rgba(255,255,255,.75) 0%,rgba(255,255,255,0) 40%,rgba(0,0,0,.18) 62%,rgba(255,255,255,.4) 100%)'):'';
  }
  function paintSwatch(span,item){
    var cls='nb-sb-swatch nb-sb-fx-'+finFamily(item&&item.value)+' nb-sb-m-'+metalTone(SB.f&&SB.f.metal);
    if(span.className!==cls) span.className=cls;
    var src=item&&typeof item.swatch==='string'&&/^\/ring-images\/finish\/[a-z0-9-]{1,60}\.jpg$/.test(item.swatch)?base()+item.swatch:'';
    imgIn(span,src,36,36);
  }
  function imgIn(span,src,w,h){
    var img=span.querySelector('img');
    if(!src){ if(img) img.remove(); return; }
    if(img&&img.getAttribute('src')===src) return;
    if(!img){ img=document.createElement('img'); img.alt=''; img.decoding='async'; img.width=w; img.height=h; img.addEventListener('error',function(){ img.remove(); span.classList.remove('has-img'); }); span.appendChild(img); }
    img.setAttribute('src',src); span.classList.add('has-img');
  }
  function fontPic(x,holder){
    var src=typeof x.sample==='string'&&/^\/ring-images\/font\/[a-z0-9-]{1,60}\.gif$/.test(x.sample)?base()+x.sample:'';
    if(!holder.firstChild){ var aa=el('span','nb-sb-aa','Aa'); var n=String(x.label||'').toLowerCase(); aa.style.fontFamily=/script|edward|lucida|corinth/.test(n)?'cursive':/typewriter|bulletin/.test(n)?'monospace':/old english/.test(n)?'fantasy':/mono/.test(n)?'system-ui':'Georgia,serif'; aa.style.fontStyle=/script|edward|corinth/.test(n)?'italic':''; holder.appendChild(aa); }
    imgIn(holder,src,120,12);
  }
  function patternPic(x,holder){
    var src=typeof x.sample==='string'&&/^\/ring-images\/pattern\/[a-z0-9-]{1,60}\.gif$/.test(x.sample)?base()+x.sample:'';
    if(!holder.firstChild){ var h=0; for(var i=0;i<String(x.value).length;i++) h=(h*31+String(x.value).charCodeAt(i))%997; var s='<rect class="b" x="0" y="0" width="60" height="14"/>', st=4+h%5;
      for(var j=0;j<60;j+=st) s+=(h%3===0?'<circle class="g" cx="'+j+'" cy="7" r="2"/>':h%3===1?'<path class="l" d="M'+j+' 12l'+(st/2)+'-10l'+(st/2)+' 10"/>':'<path class="l" d="M'+j+' 2v10"/>');
      var d=el('span','nb-sb-strip'); d.innerHTML=svgStr('0 0 60 14',s); holder.appendChild(d); }
    imgIn(holder,src,120,24);
  }
  function ready(){
    var f=SB.f; if(!SB.open||SB.busy||!SB.ch||!SB.op) return false;
    if(!f.profile||!f.metal||!f.style||!f.weight||!f.size||!f.width||!f.finish) return false;
    if(listOf('fit').length&&!f.fit) return false;
    if(f.size==='U'&&unknownCfg()&&f.group==null) return false;
    return ['inside','outside'].every(function(k){ return !final(f[k].text)||!loc(k)||!!f[k].font; });
  }
  function lock(changed){
    var a=document.activeElement; if(dlg&&a&&dlg.contains(a)){ var g=a.closest('[role="radiogroup"]'); SB.refocus={ el:a, g:g?g.id:'', v:a.getAttribute('data-value') }; }
    SB.busy=true; SB.lockAt=changed==='confirm'?ORDER.length:Math.max(0,ORDER.indexOf(changed));
    waitStart(changed); render();    
  }
  function unlock(){
    SB.firstWait=false;
    SB.busy=false; SB.lockAt=-1; waitStop();
    var r=SB.refocus; SB.refocus=null;
    setTimeout(function(){
      if(!SB.open||!dlg||SB.busy||dlg.contains(document.activeElement)) return;
      var l=focusables(), to=null;
      if(r){ to=r.el; if((!to||!dlg.contains(to))&&r.g&&r.v!=null) to=dlg.querySelector('#'+r.g+' [data-value="'+cssq(r.v)+'"]'); }
      if(!to||to.disabled||to.offsetParent===null) to=l[0]; if(to) try{ to.focus(); }catch(e){}
    },0);
  }
  function focusables(){
    if(!dlg) return [];
    return Array.prototype.filter.call(dlg.querySelectorAll('button, select, input'),function(n){ return !n.disabled&&!n.hidden&&n.offsetParent!==null&&n.tabIndex>=0; });
  }
  function onKey(ev){
    if(ev.key==='Escape'){ ev.preventDefault(); ev.stopPropagation(); decline(); return; }
    if(ev.key==='Enter'&&ev.target&&ev.target.tagName==='INPUT'){ ev.preventDefault(); try{ ev.target.blur(); }catch(e){} return; }
    if(ev.key!=='Tab') return;
    var list=focusables(); if(!list.length){ ev.preventDefault(); return; }
    var first=list[0], last=list[list.length-1], a=document.activeElement;
    if(ev.shiftKey&&(a===first||!dlg.contains(a))){ ev.preventDefault(); last.focus(); }
    else if(!ev.shiftKey&&(a===last||!dlg.contains(a))){ ev.preventDefault(); first.focus(); }
  }
  function onFocusIn(ev){ if(SB.open&&dlg&&!dlg.contains(ev.target)){ var l=focusables(); if(l.length) try{ l[0].focus(); }catch(e){} } }
  function onVV(){
    var v=window.visualViewport, box=q('.nb-sb-box'); if(!v||!box) return;
    dlg.style.setProperty('--nb-sb-vh',Math.floor(v.height)+'px');
    dlg.style.top=Math.max(0,Math.floor(v.offsetTop))+'px'; dlg.style.height=Math.floor(v.height)+'px'; dlg.style.bottom='auto';
  }
  function vvOn(b){
    var v=window.visualViewport; if(!v) return;
    if(b){ v.addEventListener('resize',onVV); v.addEventListener('scroll',onVV); onVV(); }
    else { v.removeEventListener('resize',onVV); v.removeEventListener('scroll',onVV); if(dlg){ dlg.style.top=''; dlg.style.height=''; dlg.style.bottom=''; dlg.style.removeProperty('--nb-sb-vh'); } }
  }

  function wantFromJbj(){
    var s=st(), n=sizeState(), w=blankF();
    if(n&&n.unknown&&unknownCfg()){ w.size='U'; w.group=n.group!=null?n.group:null; } else if(s&&s.ringSize!=null) w.size=String(s.ringSize);
    if(s&&s.ringWidth!=null) w.width=String(s.ringWidth);
    return w;
  }
  function wantFromDesign(d){
    var w=blankF(); if(!d||typeof d!=='object') return w;
    CHOICE.forEach(function(k){ if(typeof d[k]==='string') w[k]=d[k]; });
    if(d.ringSizeUnknown===true) w.size='U'; else if(d.ringSize!=null) w.size=String(d.ringSize);
    if(d.ringWidth!=null) w.width=String(d.ringWidth); if(typeof d.finishCode==='string') w.finish=d.finishCode;
    [['inside','engraving','patternInside'],['outside','engravingOutside','patternOutside']].forEach(function(p){ var e=d[p[1]]; if(e&&typeof e.text==='string') w[p[0]]={ text:e.text, font:e.font||'', fill:e.fill||'', pattern:'', open:true, tab:'text', cut:false }; else if(typeof d[p[2]]==='string'&&d[p[2]]) w[p[0]]={ text:'', font:'', fill:'', pattern:d[p[2]], open:true, tab:'pattern' }; });
    return w;
  }
  function openPopup(idx,fromChange,fresh){
    if(SB.open||!on()) return;
    build();
    SB.pendingIdx=(idx==null)?null:idx; SB.fromChange=!!fromChange; SB.opener=document.activeElement;
    SB.gone={}; SB.ch=null; SB.op=null; SB.good=null; SB.msgAt=null; SB.lastField=null; SB.resetting=!!fresh;
    SB.firstWait=true;
    if(fresh){ SB.last=null; SB.shareDesign=null; }
    try{ var lt=window.__V2_SB_LATE__&&window.__V2_SB_LATE__.state; if(lt&&lt.heldAt&&lt.releasedAt&&Date.now()-lt.releasedAt<3000){ SB.wT0=lt.heldAt; SB.waitLong=!!lt.long; SB.wEnd=Date.now(); lt.heldAt=null; } }catch(e){}
    var full=!!(SB.last&&!SB.last.partial);
    SB.fromShare=!full&&!!SB.shareDesign; SB.unrestored=null;
    SB.want=full?copyF(SB.last):(SB.shareDesign?wantFromDesign(SB.shareDesign):wantFromJbj());
    if(SB.last&&SB.last.partial){ var pl=SB.last; ['size','group','width','finish'].forEach(function(k){ if(pl[k]!==''&&pl[k]!=null) SB.want[k]=pl[k]; }); SB.want.inside=copyF(pl.inside); SB.want.outside=copyF(pl.outside); }
    if(!SB.fromShare){ var jb=wantFromJbj(); if(!SB.want.size&&jb.size){ SB.want.size=jb.size; SB.want.group=jb.group; } if(!SB.want.width&&jb.width) SB.want.width=jb.width; }
    SB.f=blankF(); SB.f.size=SB.want.size; SB.jbjWidth=wantFromJbj().width;
    SB.open=true; SB.busy=false;
    dlg.classList.add('open'); showMsg('',false); if(fresh) showTop();
    try{ if(window.__NB_HC__) window.__NB_HC__.mount(q('.nb-sb-actions')); }catch(e){}    
    try{ history.pushState({ nbSb:1 },''); SB.hist=true; }catch(e){ SB.hist=false; }
    document.addEventListener('focusin',onFocusIn,true); document.addEventListener('keydown',onKey,true); vvOn(true);
    setTimeout(function(){ var f=V.metal&&V.metal.group.querySelector('[role="radio"][tabindex="0"]:not([disabled])'); if(SB.open) try{ (f||q('.nb-sb-x')).focus(); }catch(e){} },0);
    if(full||SB.fromShare){ SB.f.profile=SB.want.profile; SB.f.metal=SB.want.metal; SB.f.fit=SB.want.fit||''; SB.f.style=SB.want.style; SB.f.weight=SB.want.weight; askChoices(null); return; }
    var e=prefetch()||{};
    if(e.st==='ok') firstAnswer(e.options); else if(e.st==='fail') firstFail(e.code); else { SB.waitFirst=missKey(); lock('profile'); }
  }
  function firstAnswer(o){
    SB.want.profile=o.profile; SB.want.metal=o.metal; SB.want.style=o.style; SB.want.weight=o.weight; SB.want.fit=o.fit||'';
    SB.busy=false; waitStop(); takeChoices(o,null);
  }
  function firstFail(c){
    var idx=SB.pendingIdx;
    markFail(c); closePopup(false); SB.want=null; paintSteps();
    if(idx!=null) try{ nativeGo.call(window,idx); }catch(e){}
  }
  function decline(){
    if(!SB.open) return;
    var fromChange=SB.fromChange, w=idxOf('width');
    if(SB.f&&(SB.f.profile||SB.f.size)) SB.last=copyF(SB.f);
    closePopup(true);
    SB.miss=null; SB.missKey=null; SB.shareDesign=null;
    if(fromChange&&SB.result){ SB.keep=true; discard(false); }
    paintSteps();
    if(w>=0&&curIdx()!==w) try{ nativeGo.call(window,w); }catch(e){}
  }
  function closePopup(byCustomer){
    if(!SB.open) return;
    SB.open=false; SB.seq++; SB.busy=false; SB.lockAt=-1; SB.waitFirst=null; clearTimeout(SB.rTimer); waitStop();
    SB.resetting=false;
    try{ if(SB.abort) SB.abort.abort(); }catch(e){}
    SB.abort=null;
    if(dlg) dlg.classList.remove('open','nb-sb-busy');
    try{ if(window.__NB_HC__) window.__NB_HC__.unmount(); }catch(e){}
    document.removeEventListener('focusin',onFocusIn,true); document.removeEventListener('keydown',onKey,true); vvOn(false);
    if(SB.hist){ SB.hist=false; SB.skipPop=true; try{ history.back(); }catch(e){ SB.skipPop=false; } }
    var back=SB.opener; SB.opener=null;
    if(back&&back.focus&&document.contains(back)) try{ back.focus(); }catch(e){}
    if(byCustomer){
      var ok=function(e){ return !!(e&&e!==document.body&&document.contains(e)&&e.offsetParent!==null&&!e.disabled); };
      var land=function(last){
        if(ok(document.activeElement)) return;
        if(!last&&back&&back!==document.body&&document.contains(back)&&!ok(back)) return;
        var c=[back,document.getElementById('nbStepNext'),document.querySelector('#acc-body-width .profile-card.selected'),document.querySelector('#acc-body-width button, #acc-body-width [tabindex="0"]'),document.querySelector('#acc-panel-width .acc-head')];
        for(var i=0;i<c.length;i++) if(ok(c[i])){ try{ c[i].focus(); }catch(e){} if(document.activeElement===c[i]) return; }
      };
      setTimeout(function(){ land(false); },80); setTimeout(function(){ land(true); },450);
    }
  }

  function done(json,d){
    var s=st(), f=SB.f, fromChange=SB.fromChange, r={ lookupId:json.lookup_id, design:d };
    takeCustomer(r,json.customer);
    SB.last=copyF(f); SB.shareDesign=null;
    closePopup(false);
    s._touched=s._touched||{}; s._touched.width=true; s._touched.size=true;
    var n=sizeState(), sizes=[], widths=[];
    try{ sizes=(typeof RING_SIZES!=='undefined'&&RING_SIZES)?RING_SIZES:[]; widths=(typeof WIDTHS!=='undefined'&&WIDTHS)?WIDTHS:[]; }catch(e){}
    if(widths.indexOf(d.ringWidth)>=0) s.ringWidth=d.ringWidth;
    if(f.size==='U'){
      try{ window.__V2_SIZE__.chooseUnknown(); }catch(e){}
      if(f.group!=null) try{ window.__V2_SIZE__.chooseGroup(f.group); }catch(e){}
    } else {
      if(n){ n.unknown=false; n.group=null; n.groupNeeded=false; n.range=null; n.totalNeedsGroup=false; }
      if(sizes.indexOf(d.ringSize)>=0) s.ringSize=d.ringSize; else if(s.ringSize==null){ var b=builder(); if(b&&b.ring_size) s.ringSize=b.ring_size.default; }
    }
    SB.result=r; SB.key=fullKey(); SB.miss=null; SB.missKey=null; SB.failedKey=null; SB.keep=false;
    paintSteps();
    reEstimate();
    if(fromChange){ try{ window.__V2_ROUTER__.rerenderSection('summary'); }catch(e){} paintSummary(); return; }
    try{ nativeGo.call(window,idxOf('summary')); }catch(e){ try{ window.__V2_ROUTER__.openSection('summary'); }catch(x){} }
  }

  function sectionByTitle(h,title){ var s=h.querySelectorAll('.summary-section'); for(var i=0;i<s.length;i++){ var t=s[i].querySelector('h4'); if(t&&String(t.textContent||'').trim().indexOf(title)===0) return s[i]; } return null; }
  function mark(node,want){ if(node&&node.classList.contains('nb-sb-hide')!==want) node.classList.toggle('nb-sb-hide',want); }
  function hasPattern(r){ var d=r&&r.design; return !!(d&&(d.patternInside||d.patternOutside)); }
  function hasEngraving(r){ var d=r&&r.design; return !!(d&&((d.engraving&&d.engraving.text)||(d.engravingOutside&&d.engravingOutside.text))); }
  function paintView(){
    var b=document.body, s=st(); if(!b) return;
    var want=!!(active()&&s&&s._openSection==='summary');
    if(b.classList.contains('nb-sb-sum')!==want) b.classList.toggle('nb-sb-sum',want);
    var host=document.querySelector('.v2-preview'), view=document.getElementById('nbSbView');
    if(!want){ if(view) view.hidden=true; return; }
    if(!host) return;
    var r=SB.result, sig=r.lookupId+'|'+hasEngraving(r);
    if(!view){ view=el('div','nb-sb-view'); view.id='nbSbView'; var rp=document.getElementById('ringPreview'); if(rp&&rp.parentNode===host) host.insertBefore(view,rp.nextSibling); else host.appendChild(view); }
    view.hidden=false;
    if(view.getAttribute('data-nb-sb')===sig) return;
    view.setAttribute('data-nb-sb',sig); view.textContent='';
    var ph=el('div','nb-sb-photos'), bs=base();
    r.images.forEach(function(m){ var img=el('img','nb-sb-photo'); img.alt=m.label; img.decoding='async'; img.width=300; img.height=300; img.src=bs+m.path; ph.appendChild(img); });
    view.appendChild(ph);
    var pn=hasPattern(r)?txt('photo_note_pattern'):hasEngraving(r)?txt('photo_note'):''; if(pn) view.appendChild(el('p','nb-sb-note',pn));
  }
  var painting=false;
  function paintSummary(){
    if(painting) return; painting=true;
    try{
      paintView();
      var h=document.getElementById('acc-body-summary'); if(!h) return;
      if(!SB.result&&!h.querySelector('.nb-sb-card, .nb-sb-hide')) return;
      var on1=active(), card=h.querySelector('.nb-sb-card');
      ['Configuration','Band Composition','Inside Laser Engraving'].forEach(function(t){ mark(sectionByTitle(h,t),on1); });
      mark(h.querySelector('.nb-receipt'),on1);
      mark(h.querySelector('.nb-details.nb-eng'),on1);
      mark(h.querySelector('.eng-font-wrap'),on1);
      var fm=h.querySelector('.email-form'), h4=fm&&fm.querySelector(':scope > h4'), ip=fm&&(fm.querySelector(':scope > p.nb-rd-intro')||(function(){ var x=h4&&h4.nextElementSibling; while(x&&x.tagName!=='P'&&x.classList.contains('nb-rd-fhead')) x=x.nextElementSibling; return x&&x.tagName==='P'?x:null; })());
      if(ip) mark(ip,!!(on1&&SB.result&&SB.result.precious===false));
      if(!on1){ if(card) card.remove(); return; }
      var r=SB.result, sig=r.lookupId+'|'+(r.unavailable?1:0)+'|'+r.title;
      if(r.unavailable&&!r.reopened&&!SB.open&&st()&&st()._openSection==='summary'){ r.reopened=true; setTimeout(function(){ if(SB.result===r&&r.unavailable&&!SB.open&&active()) openPopup(null,true,true); },0); }
      if(!card||card.getAttribute('data-nb-sb')!==sig){
        if(card) card.remove();
        card=el('div','nb-sb-card'); card.setAttribute('data-nb-sb',sig);
        if(txt('summary_kicker')) card.appendChild(el('span','nb-sb-kick',txt('summary_kicker')));
        card.appendChild(el('h3','nb-sb-title',r.title));
        if(r.unavailable){ var u=el('p','nb-sb-unavail',txt('not_available')); u.setAttribute('role','alert'); card.appendChild(u); }
        var dl=el('dl','nb-sb-details');
        r.details.forEach(function(d){ var row=el('div','nb-sb-row'); row.appendChild(el('dt','',d.label)); row.appendChild(el('dd','',d.value)); dl.appendChild(row); });
        card.appendChild(dl);
        if(txt('change')){ var c=el('button','nb-sb-change',txt('change')); c.type='button'; c.addEventListener('click',function(){ openPopup(null,true); }); card.appendChild(c); }
      }
      var desc=h.querySelector(':scope > .panel-desc'), title=h.querySelector(':scope > .panel-title');
      var anchor=desc||title, want=anchor?anchor.nextSibling:h.firstChild;
      if(card.parentNode!==h||(card!==want&&card.previousSibling!==anchor)) h.insertBefore(card,want);
    }catch(e){ if(window.console) console.error('solid band summary:',e); }
    finally{ painting=false; }
  }

  function boot(){
    var s=st();
    var waiting=!builder()||!s||!s._openSection||!window.__V2_ROUTER__||!window.__V2_SIZE__||typeof window.goToStep!=='function'||(!window.goToStep.__nbThreeSteps&&tries<200);
    if(waiting){ if(++tries<600) setTimeout(boot,50); return; }
    if(booted) return; booted=true;
    if(!cfg()) return;
    readShare(); wrapGo(); wrapFetch(); wrapShare();
    window.addEventListener('click',onNavClick,true);
    var redo=function(){ var k=missKey(); if(k!==SB.lastKey){ SB.lastKey=k; if(SB.last){ SB.last.partial=true; } if(SB.keep){ SB.keep=false; paintSteps(); } forgetFails(); } if(SB.result) sync(false); if(SB.keep) paintSteps(); prefetch(); };
    window.addEventListener('popstate',function(){ if(SB.skipPop){ SB.skipPop=false; return; } if(SB.open&&SB.hist){ SB.hist=false; decline(); } });
    var wb=document.getElementById('acc-body-width'); if(wb) wb.addEventListener('click',function(ev){ var b=ev.target&&ev.target.closest?ev.target.closest('button'):null; if(b&&String(b.textContent||'').trim()==='No, base metal only'){ forgetFails(); } setTimeout(redo,0); },true);
    var mb=document.getElementById('acc-body-metal'); if(mb) mb.addEventListener('click',function(){ setTimeout(redo,0); },true);
    ['acc-body-width','acc-body-metal'].forEach(function(id){ var e=document.getElementById(id); if(e) try{ new MutationObserver(redo).observe(e,{ childList:true, subtree:true }); }catch(x){} });
    var sum=document.getElementById('acc-body-summary'); if(sum) try{ new MutationObserver(function(){ sync(false); paintSummary(); }).observe(sum,{ childList:true, subtree:true }); }catch(x){}
    var rail=document.getElementById('studio-tool-rail'); if(rail) try{ new MutationObserver(function(){ if(SB.result||SB.keep) paintSteps(); }).observe(rail,{ attributes:true, subtree:true, attributeFilter:['hidden','class'] }); }catch(x){}
    SB.lastKey=missKey(); prefetch();
    if(SB.shareDesign&&candidate()) setTimeout(function(){ if(!SB.open&&!SB.result) openPopup(null,false); },0);
    window.__V2_SB__={ state:SB, active:active, candidate:candidate, discard:function(){ discard(false); }, open:function(){ openPopup(null,false); }, profiles:SB_PROFILES.slice() };
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();
if(typeof window.__nbLateReady==="function")window.__nbLateReady("data/solid-band.js");
