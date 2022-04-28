/*global
    piranha
*/

Vue.component('covid-status', {
  props: ["uid", "toolbar", "model"],
  template: 
    "<div class='block-body has-media-picker rounded' :class='{ empty: isImgEmpty }'>" + 
        "   <div class='image-block'>" +
        "       <img class='rounded' :src='mediaUrl'>" +
        "       <div class='media-picker'>" +
        "           <div class='btn-group float-right'>" +
        "               <button :id='uid + \"-aspect\"' class='btn btn-info btn-aspect text-center' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" +
        "                <i v-if='model.aspect.value === 0' class='fas fa-cog'></i>" +
        "                   <img v-else :src='iconUrl'>" +
        "               </button>" +
        "               <div class='dropdown-menu aspect-menu' :aria-labelledby='uid + \"-aspect\"'>" +
        "                   <label class='mb-0'>{{ piranha.resources.texts.aspectLabel }}</label>" +
        "                   <div class='dropdown-divider'></div>" +
        "                   <a v-on:click.prevent='selectAspect(0)' class='dropdown-item' :class='{ active: isAspectSelected(0) }' href='#'>" +
        "                       <img :src='piranha.utils.formatUrl(\"~/manager/assets/img/icons/img-original.svg\")'><span>{{ piranha.resources.texts.aspectOriginal }}</span>" +
        "                   </a>" +
        "                   <a v-on:click.prevent='selectAspect(1)' class='dropdown-item' :class='{ active: isAspectSelected(1) }' href='#'>" + 
        "                       <img :src='piranha.utils.formatUrl(\"~/manager/assets/img/icons/img-landscape.svg\")'><span>{{ piranha.resources.texts.aspectLandscape }}</span>" +
        "                   </a>" +
        "                   <a v-on:click.prevent='selectAspect(2)' class='dropdown-item' :class='{ active: isAspectSelected(2) }' href='#'>" +
        "                       <img :src='piranha.utils.formatUrl(\"~/manager/assets/img/icons/img-portrait.svg\")'><span>{{ piranha.resources.texts.aspectPortrait }}</span>" +
        "                   </a>" + 
        "                   <a v-on:click.prevent='selectAspect(3)' class='dropdown-item' :class='{ active: isAspectSelected(3) }' href='#'>" +
        "                       <img :src='piranha.utils.formatUrl(\"~/manager/assets/img/icons/img-landscape.svg\")'><span>{{ piranha.resources.texts.aspectWidescreen }}</span>" +
        "                   </a>" + 
        "                   <a v-on:click.prevent='selectAspect(4)' class='dropdown-item' :class='{ active: isAspectSelected(4) }' href='#'>" +
        "                       <img :src='piranha.utils.formatUrl(\"~/manager/assets/img/icons/img-square.svg\")'><span>{{ piranha.resources.texts.aspectSquare }}</span>" +
        "                   </a>" + 
        "               </div>" +
        "               <button v-on:click.prevent='select' class='btn btn-primary text-center'>" +
        "                   <i class='fas fa-plus'></i>" +
        "               </button>" +
        "               <button v-on:click.prevent='remove' class='btn btn-danger text-center'>" +
        "                   <i class='fas fa-times'></i>" +
        "               </button>" +
        "           </div>" +
        "           <div class='card text-left'>" +
        "               <div class='card-body' v-if='isImgEmpty'>" +
        "                   &nbsp;" +
        "               </div>" +
        "               <div class='card-body' v-else>" +
        "                   {{ model.imgBody.media.filename }}" +
        "               </div>" +
        "           </div>" +
        "       </div>" +
        "   </div>" +
        "   <br />" +
        "   <div class='html-block'>" +
        "       <div class='block-body border rounded' :class='{ empty: isHtmlEmpty }' >" + 
        "           <div contenteditable='true' :id='uid' v-html='htmlBody' v-on:blur='onBlur'></div> " + 
        "       </div>" +
        "   </div>" +
        "</div>"
})