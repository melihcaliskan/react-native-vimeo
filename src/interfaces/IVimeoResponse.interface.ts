export declare module IVimeoResponse {
  export interface Stream {
    profile: any;
    quality: string;
    id: string;
    fps: number;
  }

  export interface AkfireInterconnectQuic {
    url: string;
    origin: string;
    avc_url: string;
  }

  export interface FastlySkyfire {
    url: string;
    origin: string;
    avc_url: string;
  }

  export interface Cdns {
    akfire_interconnect_quic: AkfireInterconnectQuic;
    fastly_skyfire: FastlySkyfire;
  }

  export interface StreamsAvc {
    profile: any;
    quality: string;
    id: string;
    fps: number;
  }

  export interface Dash {
    separate_av: boolean;
    streams: Stream[];
    cdns: Cdns;
    streams_avc: StreamsAvc[];
    default_cdn: string;
  }

  export interface AkfireInterconnectQuic2 {
    url: string;
    origin: string;
    avc_url: string;
  }

  export interface FastlySkyfire2 {
    url: string;
    origin: string;
    avc_url: string;
  }

  export interface Cdns2 {
    akfire_interconnect_quic: AkfireInterconnectQuic2;
    fastly_skyfire: FastlySkyfire2;
  }

  export interface Hls {
    separate_av: boolean;
    default_cdn: string;
    cdns: Cdns2;
  }

  export interface Progressive {
    profile: string;
    width: number;
    mime: string;
    fps: number;
    url: string;
    cdn: string;
    quality: string;
    id: string;
    origin: string;
    height: number;
  }

  export interface Files {
    dash: Dash;
    hls: Hls;
    progressive: Progressive[];
  }

  export interface Sentry {
    url: string;
    enabled: boolean;
    debug_enabled: boolean;
    debug_intent: number;
  }

  export interface ThumbPreview {
    url: string;
    frame_width: number;
    height: number;
    width: number;
    frame_height: number;
    frames: number;
    columns: number;
  }

  export interface GcDebug {
    bucket: string;
  }

  export interface Client {
    ip: string;
  }

  export interface Cookie {
    scaling: number;
    volume: number;
    quality?: any;
    hd: number;
    captions?: any;
  }

  export interface Build {
    backend: string;
    js: string;
  }

  export interface Urls {
    barebone_js: string;
    test_imp: string;
    js_base: string;
    fresnel: string;
    js: string;
    proxy: string;
    mux_url: string;
    fresnel_mimir_inputs_url: string;
    fresnel_chunk_url: string;
    three_js: string;
    fresnel_manifest_url: string;
    chromeless_css: string;
    player_telemetry_url: string;
    chromeless_js: string;
    css: string;
  }

  export interface Flags {
    dnt: number;
    preload_video: string;
    plays: number;
    partials: number;
    autohide_controls: number;
  }

  export interface Hevc {
    hdr: any[];
    sdr: any[];
    dvh1: any[];
  }

  export interface FileCodecs {
    hevc: Hevc;
    av1: any[];
    avc: string[];
  }

  export interface Data {}

  export interface Chromecast {
    track: boolean;
    data: Data;
    group: boolean;
  }

  export interface Data2 {}

  export interface StatsFresnel {
    track: boolean;
    data: Data2;
    group: boolean;
  }

  export interface Data3 {}

  export interface LlhlsTimeout {
    track: boolean;
    data: Data3;
    group: boolean;
  }

  export interface Data4 {}

  export interface Cmcd {
    track: boolean;
    data: Data4;
    group: boolean;
  }

  export interface AbTests {
    chromecast: Chromecast;
    stats_fresnel: StatsFresnel;
    llhls_timeout: LlhlsTimeout;
    cmcd: Cmcd;
  }

  export interface Request {
    files: Files;
    lang: string;
    sentry: Sentry;
    thumb_preview: ThumbPreview;
    referrer?: any;
    cookie_domain: string;
    timestamp: number;
    gc_debug: GcDebug;
    expires: number;
    client: Client;
    currency: string;
    session: string;
    cookie: Cookie;
    build: Build;
    urls: Urls;
    signature: string;
    flags: Flags;
    country: string;
    file_codecs: FileCodecs;
    ab_tests: AbTests;
  }

  export interface Rating {
    id: number;
  }

  export interface Version {
    current?: any;
    available?: any;
  }

  export interface Thumbs {
    1280: string;
    960: string;
    640: string;
    base: string;
  }

  export interface Owner {
    account_type: string;
    name: string;
    img: string;
    url: string;
    img_2x: string;
    id: number;
  }

  export interface Video {
    rating: Rating;
    version: Version;
    height: number;
    duration: number;
    thumbs: Thumbs;
    owner: Owner;
    id: number;
    embed_code: string;
    title: string;
    share_url: string;
    width: number;
    embed_permission: string;
    fps: number;
    spatial: number;
    live_event?: any;
    allow_hd: number;
    hd: number;
    lang?: any;
    default_to_hd: number;
    url: string;
    privacy: string;
    bypass_token: string;
    unlisted_hash?: any;
  }

  export interface User {
    team_origin_user_id: number;
    liked: number;
    account_type: string;
    vimeo_api_client_token?: any;
    vimeo_api_interaction_tokens?: any;
    team_id: number;
    watch_later: number;
    owner: number;
    id: number;
    mod: number;
    private_mode_enabled: number;
    logged_in: number;
  }

  export interface Settings {
    fullscreen: number;
    byline: number;
    like: number;
    playbar: number;
    title: number;
    color: number;
    speed: number;
    watch_later: number;
    share: number;
    scaling: number;
    spatial_compass: number;
    collections: number;
    info_on_pause: number;
    portrait: number;
    logo: number;
    embed: number;
    badge: number;
    spatial_label: number;
    volume: number;
  }

  export interface Embed {
    autopause: number;
    playsinline: number;
    settings: Settings;
    color: string;
    texttrack: string;
    on_site: number;
    app_id: string;
    muted: number;
    dnt: number;
    player_id: string;
    api?: any;
    editor: boolean;
    context: string;
    keyboard: number;
    outro: string;
    transparent: number;
    log_plays: number;
    quality?: any;
    time: number;
    loop: number;
    autoplay: number;
  }

  export interface IResponseBody {
    cdn_url: string;
    vimeo_api_url: string;
    request: Request;
    player_url: string;
    video: Video;
    user: User;
    embed: Embed;
    view: number;
    vimeo_url: string;
  }
}
