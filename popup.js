// PREFERENCE
// var url_list = chrome.extension.getURL("url_list.json");
var punk_ec_content_png = chrome.extension.getURL("punk_ec_content.png");

var url_list = ["https://ccj.kokusen.go.jp","http://www.opdsy.top","http://www.hoko-show.club/page/?id=1","http://www.shop-dinos.online/page/?id=11","http://www.man-live.co","http://www.uptax.top","http://www.botegatop.site","http://www.lveif.com","http://www.hqpwuj.top","http://www.toaufq.top","http://www.queen-style.online","http://www.rtgghv.com","http://www.tataly.top","http://www.amcomshop.co","http://www.justdo.jp","http://www.lvreig.net","http://www.jplvonline.com","http://www.japan-lvbags.com","http://www.jpbands2020.com","http://www.dokei2020.com","http://pumashopjapan.com","http://www.luxurydy.ru","http://www.man-live.ru","http://www.bagkakaku.com/index.htm","http://www.dokei2015.co","http://www.yeezyboosthut.com","http://www.burandsale.com","http://www.mikopi.com","http://www.ok-outlet.com","http://www.sportbrandad.com","http://www.tv-stores.xyz","http://www.pnvrlxe.p","http://www.new-games.top","http://www.japan2016.top","http://www.pobdgb.com","http://www.von713.com","http://www.meozamp.com","http://www.acuio.or","http://www.bagbag2016.co","http://www.ss-ss88.co","http://www.storecor.net","http://www.breeree.com","http://www.stinanvillejackso.com/index.php?m","http://teuess.com/index.php?main_page=accoun","http://www.bootsonlineshops.com","http://www.coachjapan.us","http://www.birkin30.com","http://www.acuio.org","http://www.xdvwzvrkijlyacew.com","http://www.kakabrands.org","http://www.nrelievedbrand.com","http://www.mjjbag78.com","http://www.shop-sis.com","http://www.jck35.com/index.htm","http://www.zitumon.com","http://www.vess-howlarts.com","http://www.wetsuitjapan.com","http://www.coachsweblabjp.com","http://www.bicycle-sekai.com","http://dgauda.com/index.ht","http://www.adidassneakersjapann.com","http://www.steadypaddling.com","http://www.evelynswonderland.com","http://www.hostalelcandil.com/about_u","http://www.methuenrestaurantweek.com/about_u","http://www.gizemevi.com","http://www.mxndboad.com","http://www.infxpzace.com","http://www.bwytea.com","http://www.lzkwzf.com","http://www.locondo-sneaker.com","http://www.abc-adidas.com","http://www.coachscheapsales.com","http://www.qoo10-time.com","http://www.sportslifes.jp","http://www.tgfbld.com","http://www.crowndist1.com","http://nevadacityhackathon.com","http://direct-sunglasses.com","http://berserkdiscountmall.com","http://www.strxdzory.com","http://www.pszsri.com","http://www.kqoolw.com/about_us.htm","http://www.rayban-glass.us","http://topbrands-eyewear.com","http://johnlobb.lakonect.org","http://myhandbagsshop.com","http://sasbite.com/index.php?main_page=logi","http://www.mwxzvn.com","http://www.ekiql.com","http://www.nmejrb.com","http://www.vizakkas.com","http://www.bd-buy.jp","http://www.laptopscreen.jp","http://www.guccisukijp.com","http://www.ctibrc.org/js/controls/J-er74.htm","http://www.armanicheap.com","http://www.yuibo.com","http://topone.shop-pro.jp","http://www.sneakerheadclub.com","http://www.hermesjapanstore.com","http://louisvuittonjapan.us","http://prop-store.jp","http://shop.shineclassics.com","http://darknagar.ru/Moncler-12265.ph","http://www.uggstore.jpn.co","http://www.uggbootsjapan.us","http://www.tokyotopgolf.net","http://www.japanduve-online.asia","http://www.garyjrrussell.com","http://www.maxaonline.inf","http://www.uateepts.com","http://www.ilcpoland.com","http://www.yochishop.com","http://www.jpoutdoorbag.com/index.ph","https://bellaveiskincare.com/jp","https://youthrenewphyto.com/jp","http://news.womenhealthreports.com","http://www.hermeonsale.com/index.ph","http://shop.luxurybrandcopy.com","http://www.muraidaik.com","http://smithy.programa-balboa.com","http://www.tuomatu.com","http://www.monclerjapanonlineshop.com","http://www.jp-gucci.co","http://101.99.83.36/if/ugg.htm","http://uggboots.jpn.co","http://www.uggshopjp.co","http://www.outtogetme.com","http://www.burberryjponlinestore.com","http://www.newyorksportsworld.co","http://www.casiojpsales.com","http://www.officehelptogo.com","http://www.ilvjp.com","http://www.vuitton-love.co","http://www.o8ojp.com","http://www.topconversejp.com","http://www.mvpnba.com","http://www.ttgadj.com/index.ph","http://www.jpouternetshop.com","http://www.gvusst.com","http://www.clinexcel.com/about_us.htm","http://www.tetsxcwe.co","http://www.robertsguide.co","http://www.ciltbakimiveguzellik.co","http://carteldiablo.com","http://www.uggjap.com","http://www.uggbootsjapan.us","http://www.burberryjapanshop.com","http://www.jmvoeec.com","http://www.mobydickgozo.com","http://peppertreefrosty.co","http://www.speeddtc.com/shippinginfo.htm","http://jordanrom.com/p-contact-us.htm","http://www.guitar-sheep.com","http://www.handbagshesale.com/index.ph","http://www.australiabootssalejp.com","http://www.coach-japan.com","http://www.rushmyrepair.com","http://www.rodrigoeberienos.com","http://www.edenkis.p","http://www.desirdrive.asia","http://icanhurger.co","http://www.goodjpclothes.j","http://www.jilliancamwell.com","http://www.youthtrendsreport.com","http://www.grvspn.com","http://www.camstaterep.com","http://www.lafondabr.co","http://www.katytexasnews.com","http://www.allshoes.j","http://www.seecurrent.asia","http://www.mamairma.info","http://www.efgkbp.com","http://cynergyper4mers.com","http://www.dragontechs.com","http://www.nksclub.com","http://www.aldantownwatch.com","http://www.myrcmd.p","http://www.rackanshop.pw","http://www.asazunet.com/-ezp-14.htm","http://www.flagshipband.com","http://www.stylesfashionstore.com","http://www.educatlvosmultimedia.com","http://www.kurvstudios.net","http://www.uthotels.bi","http://www.4pixsake.com/about_us.htm","http://www.urbntouch.com","http://genuinelouisvuitton.co","http://www.jphareru.com","http://www.icoolauto.com","http://cheap-flightsair.com","http://tumi.wsualumuicard.co","http://www.ecznuons.com","http://www.caycecole.co","http://www.lcmbilgimerkezi.co","http://burberrypolo.eu","http://www.pradabagsale.info","http://www.gucchiya.com","http://www.buyna.net","http://www.bestcopys.com","http://www.vuittonbox.com","http://www.cnboee.com/shop/products/1025.htm","http://www.jokojp.co","http://www.bandfashions.com","http://www.jp-louisvuitton.com","http://www.youthshopcentrejp.com","http://www.shoppefaithsvip.co","http://www.avongouis.com","http://www.csmmetalmart.com","http://www.onyxalliance.org","http://www.toryburchoutlet.info","http://www.hicopys.net","http://www.brandparis6.com","http://www.vuittonwaell.com","http://www.celineya.net","http://www.gentenshopjp.co","http://www.viviennebestjp.co","http://www.xreaderapp.com/login.htm","http://www.3i09.co","http://www.jpfigure.com/index.ph","http://www.dinermuseum.com/shippinginfo.htm","http://6fos.co","http://www.likekopi.com/Default.htm","http://musumenohigifuto.co","http://www.webidx.net","http://www.edu-huayu.com/index.htm","http://www.ozkaltd.com","http://www.americanpunjabitribune.com","http://www.loveyoushoppu.com","http://aquatas.com","http://www.searchlik.com","http://teddyni.com/p-aboutus.htm","http://www.chloesale.pw","http://www.lkjy.net","http://www.eakonshop.com","http://birukenbuyma.com","http://www.japanbagskan.com","http://www.topmalltrade-blng.com","http://www.renewingfaces.com","http://www.guccipursejp.info","http://www.oneminuteplayfestival.org","http://www.maikiki.com","http://www.kopigoods.com/default.ht","http://www.watch9.com","http://superwatch1.com/index.htm","http://www.lv-guccl88.com","http://www.chloebagsoutlet.info","http://www.bvlgarijapan.info","http://www.bvlgarijapan.com","http://www.johnstonsjp.com","http://audiocentergt.com","http://brandshopsshopping.com","http://www.rb-pickoutlet.com","http://jp-store-hermes.com","http://xn--jck7c4a7b0a9km64tjqzbdoc5r1k.jp","http://www.replicaunifomushop.com","http://www.unifomushop.com","http://www.burandofu8899.com","http://www.storegentenjpsale.com","http://www.sukigo.com","http://kingsofshoes.co","http://shoppemallmarts.com","http://www.cineotro.com/index.htm","http://www.samanthasale.info","http://www.louis-vuittonsale.inf","http://www.love-bag.net","http://www.antaraarts.org","http://kushyma.com","http://www.flighttocapetown.com","http://www.vipluxuryshoppevip.com","http://www","http://www.wholesalelouisvuitton-japan.bi","http://jpkutucharm.com","http://www.coachbaguu.com","http://kawaiyukinobutsu.com","http://www.jonpoor.co","http://www.golfonhome.com","http://www.j5sf.co","http://www.coachwallets-jp.info","http://www.bag-hermes.com","http://www.hermes2014.in","http://www.bookingsatlas.com","http://www.brandskiaccessories.com","http://www.felisihannbai.com","http://www.jagranados.co","http://www.burberryjapan.net","http://www.2013monkureru.com","http://www.armani-jp.com","http://www.nikon-live.com","http://www.yazya.bi","http://www.shoppemallmarts.com","http://www.japanbaggu.com","http://www.outcomesfas.com","http://www.scoopy-doos.com","http://www.iphonesweep.com","http://www.iphoneswitch.com","http://www.shopmarmotjp.com","http://www.buyuggcheap.com","http://www.boots1000.com","http://www.jpzizi.com","http://www.amandabeamer.com","http://www.yasuishoppu.com","http://babygoodsshopoutlet.com","http://www.shoppingmaniaoutlet.com","http://www.palazzogrimani.org/wp-classjp.ph","http://www.bagsyo.com","http://www.longchampukhandbags.com","http://www.iphone5casesjp.co","http://www.jojoeheaven.or","http://www.coachjust.com","http://www.northlandtimeshares.com","http://www.rexvod.com","http://www.montblancshop.cc","http://www.vuittonu.com","http://www.vuittonfans.com","http://www.lvutt.com","http://www.wristwatchsalerep.com","http://www.jimmychooonlinejapan.co","http://www.esprogramming.co","http://www.uggaustralia-jp.asia","http://www.2014monkureru.com","http://www.bags-ladies.com","http://www.momocak.com","http://www.jjkopi.com","http://www.brand-0k.com/index.ht","http://www.gaga-diy.co","http://www.brandedcorner.com","http://www.monopolysalejp.co","http://www.casio.l1ids.org","http://saleonlinejapan.com","http://www.c-web.biz","http://cartoolplaza.com","http://www.hamalibg.biz","http://www.eurocentrichandbags.co","http://www.montblanc-ballpen.co","http://www.moncler-outlets.net","http://www.monclerdown2014.com","http://www.toshop-jp.co","http://jp.wek7.org/duvetic","http://www.aftpq.com","http://www.lvbagonsale.com","http://www.newmoncleroutletjpn.co","http://www.pickgolfup.com","http://www.celine-japan.com","http://www.burberrybluelabeljpsale.com","http://louis-360.com","http://www.ktokopi.com","http://emails.brandheya.com","http://brandheya.com","http://brandheyajp.com","http://www.brandheyajp.com","http://www.top-kopi.net","http://www.enlvs.com","http://abassjp.com/M.ht","http://nutrired.org/ui3/index.php?p=385","http://www.uggboots.jp","http://www.m1700.com","http://www.smetn.com","http://www.brepli111.com","http://www.shinesneaker.com","http://www.2013guccistorejp.com","http://www.blgoddard.com","http://www.diogene99.com/burberry.htm","http://www","http://www.tuffymaps.com","http://kutu.fenyastravels.com","http://www.toribachija.com","http://www.ugg-kakaku.com","http://kikuku.net","http://www.vanlai.com","http://i-you-i.com","http://www.saifudesigner.com","http://www.becausetheyknow.com","http://www.pandplimo.com","http://jennus.com","http://styleja.com","http://www.chibauni.com","http://www.rakutenku.com","http://www.coachya2013.com","http://www.nikeonlinejapan.com","http://aovins.com","http://www.nikeadidasjpz.com","http://www.nikesjpz.com","http://www.coachhot2013.com","http://www.sneakersjapanu.com","http://gutebaby.com","http://www.coachgardens.com","http://www.lucas-lvbag.com/index.htm","http://www.hanbainihon.com","http://www.nikeja.com","http://www.bestmonclerjp.com","http://www.guccimenjpsale.com"];

var current_url = window.location.href;
var window_width = $(window).width();
var window_heignt = $(window).height();

// elemtnts.
var mesb_content_wrapper = {
  width: window_width,
  height: window_heignt
};

var mesb_content = {
  width: window_width*0.5,
  height: window_heignt*0.7,
  margintop: (window_heignt - window_heignt*0.7)/3
};

// SETUP
// 参考: http://stackoverflow.com/questions/8498592/extract-root-domain-name-from-string
function getHostUrl(url) {
    var domain;
    if (url.indexOf("://") > -1) { //find & remove protocol (http, ftp, etc.) and get domain
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }
    domain = domain.split(':')[0]; //find & remove port number

    return domain;
}

var u = getHostUrl(current_url);

for (var i = 0, len = url_list.length; i < len; i++) {
  var uu = getHostUrl(url_list[i]);
  if (u === uu) {
	// 1秒後にアニメーション.
	setTimeout( function() {
		PopupElement();
	}, 1400);  
  }
}

// var r = /^[a-z][a-z0-9+\-.]*://([a-z0-9\-._~%!$&'()*+,;=]+@)?([a-z0-9\-._~%]+|\[a-z0-9\-._~%!$&'()*+,;=:]+\])/.exec(current_url);

// Node.appendChild
function PopupElement(){
  var popup_element = document.createElement('div');
  popup_element.innerHTML = '<div class="display-wrapper"></div><div class="content"><img class="wrong" src="'+punk_ec_content_png+'" alt="punk-ec-content"></div>';
  document.getElementsByTagName("body").item(0).appendChild(popup_element);
  
  	/**
	 * SETUP
	 */
	var display_width = $(document).width();
	var display_height = $(document).height();
	
	var content_width = 805;
	
	/**
	 * DRAW	
	 */ 
	$('.display-wrapper').css({
		'height': display_height + 'px'	
	});
	
	$('.wrong').css({
		'marginLeft': (display_width - content_width)/2 + 'px',
		'marginRight': (display_width - content_width)/2 + 'px'
	});
	 
	$('.wrong').animate({
		'top': '100px'
	});
	
	$('.wrong').css({
		'position': 'fixed'
	});	
	
}


