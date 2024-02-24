/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SocialNetworkLink {
    /** ID */
    id?: number;
    /** Social network */
    social_network?: string;
    /**
     * Url
     * @format uri
     * @minLength 1
     * @maxLength 200
     */
    url: string;
}

export interface ContactInfo {
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 50
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Ім'я
     * @minLength 1
     * @maxLength 64
     */
    name?: string;
    /**
     * Адреса
     * @minLength 1
     * @maxLength 64
     */
    address?: string;
    /**
     * Електронна пошта
     * @format email
     * @maxLength 254
     */
    email?: string;
    /**
     * Телефон
     * @minLength 1
     * @maxLength 16
     */
    phone: string;
    /**
     * Зображення карти
     * @format uri
     */
    image_map?: string;
    social_network_links?: SocialNetworkLink[];
}

export interface StaticImagesCategory {
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 50
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Категорія
     * @minLength 1
     * @maxLength 100
     */
    static_image_category: string;
    /** Static images */
    static_images?: string;
}

export interface CategoryTeamMember {
    /** ID */
    id?: number;
    /**
     * Команда
     * @minLength 1
     * @maxLength 100
     */
    team_name: string;
    /** Team members */
    team_members?: string;
}

export interface TokenObtainPair {
    /**
     * Email
     * @minLength 1
     */
    email: string;
    /**
     * Password
     * @minLength 1
     */
    password: string;
}

export interface TokenRefresh {
    /**
     * Refresh
     * @minLength 1
     */
    refresh: string;
    /**
     * Access
     * @minLength 1
     */
    access?: string;
}

export interface TokenVerify {
    /**
     * Token
     * @minLength 1
     */
    token: string;
}

export interface UnregisteredUser {
    /** ID */
    id?: number;
    /**
     * Електронна пошта
     * @format email
     * @maxLength 254
     */
    email?: string | null;
    /**
     * Телефон
     * @maxLength 20
     */
    phone?: string | null;
    /**
     * Ім'я
     * @maxLength 150
     */
    name?: string | null;
}

export interface UserSmall {
    /** ID */
    id?: number;
    /**
     * Ім'я
     * @maxLength 24
     */
    name?: string;
    /**
     * Електронна пошта
     * @format email
     * @minLength 1
     * @maxLength 254
     */
    email: string;
    /**
     * Зображення
     * Аватар користувача (розмір до 20 МБ, формат JPEG або PNG)
     * @format uri
     */
    image?: string | null;
}

export interface UserCreate {
    /**
     * Електронна пошта
     * @format email
     * @minLength 1
     * @maxLength 254
     */
    email: string;
    /** ID */
    id?: number;
    /**
     * Password
     * @minLength 1
     */
    password: string;
}

export interface Activation {
    /**
     * Uid
     * @minLength 1
     */
    uid: string;
    /**
     * Token
     * @minLength 1
     */
    token: string;
}

export interface User {
    /** ID */
    id?: number;
    /**
     * Ім'я
     * @maxLength 24
     */
    name?: string;
    /**
     * Нікнейм у Telegram
     * @maxLength 24
     */
    telegram?: string;
    /**
     * Нікнейм у Instagram
     * @maxLength 24
     */
    instagram?: string;
    /**
     * Електронна пошта
     * @format email
     * @minLength 1
     * @maxLength 254
     */
    email: string;
    /**
     * Телефон
     * @maxLength 20
     */
    phone?: string | null;
    /**
     * Зображення
     * Аватар користувача (розмір до 20 МБ, формат JPEG або PNG)
     * @format uri
     */
    image?: string | null;
    /**
     * Створено
     * @format date-time
     */
    created_at?: string;
    /**
     * Оновлено
     * @format date-time
     */
    updated_at?: string;
}

export interface SendEmailReset {
    /**
     * Email
     * @format email
     * @minLength 1
     */
    email: string;
}

export interface UsernameResetConfirm {
    /**
     * Електронна пошта
     * @format email
     * @minLength 1
     * @maxLength 254
     */
    new_email: string;
}

export interface PasswordResetConfirm {
    /**
     * Uid
     * @minLength 1
     */
    uid: string;
    /**
     * Token
     * @minLength 1
     */
    token: string;
    /**
     * New password
     * @minLength 1
     */
    new_password: string;
}

export interface SetUsername {
    /**
     * Current password
     * @minLength 1
     */
    current_password: string;
    /**
     * Електронна пошта
     * @format email
     * @minLength 1
     * @maxLength 254
     */
    new_email: string;
}

export interface SetPassword {
    /**
     * New password
     * @minLength 1
     */
    new_password: string;
    /**
     * Current password
     * @minLength 1
     */
    current_password: string;
}

export interface Author {
    /** ID */
    id?: number;
    /**
     * Ім'я
     * Максимальна к-ть символів - 100
     * @minLength 1
     * @maxLength 100
     */
    name: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @minLength 1
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /** Views */
    views?: number;
}

export interface Booking {
    /** ID */
    id?: number;
    /** Відмітка про прибуття */
    status?: boolean | null;
    /** Користувач */
    user?: number | null;
    /** Незареєстрований користувач */
    unregistered_user?: number | null;
    /** Event */
    event: number;
}

export interface Category {
    /** ID */
    id?: number;
    /**
     * Категорія
     * Максимальна к-ть символів - 16
     * @minLength 1
     * @maxLength 16
     */
    name: string;
}

export interface Comment {
    /** ID */
    id?: number;
    /**
     * Текст коментаря
     * @minLength 1
     * @maxLength 500
     */
    content: string;
    /** Author */
    author?: string;
    /** Event */
    event: number;
    /** Поле було змінено */
    is_edited?: boolean;
    /** Батьківський коментар */
    parent?: number | null;
    /**
     * Створено
     * @format date-time
     */
    created_at?: string;
    /**
     * Оновлено
     * @format date-time
     */
    updated_at?: string;
}

export interface Event {
    /** ID */
    id?: number;
    /**
     * Назва
     * Максимальна к-ть символів - 100
     * @minLength 1
     * @maxLength 100
     */
    name: string;
    /** Опис події */
    description?: string | null;
    /** Показувати текст на картці */
    is_show_text?: boolean | null;
    /**
     * Логотип події
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string | null;
    /** Відмітка про благодійність */
    charity?: boolean | null;
    /**
     * Час початку події
     * @format date-time
     */
    start_time?: string | null;
    /**
     * Ціна за вхід
     * Ціна події (від 0 до 9999), якщо вхід вільний залишити пусте поле
     * @min 1
     * @max 9999
     */
    price?: number | null;
    /**
     * Місце проведення події
     * @maxLength 255
     */
    location?: string | null;
    /**
     * Address
     * @maxLength 255
     */
    address?: string | null;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 150
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
}

export interface MusicBand {
    /** ID */
    id?: number;
    /**
     * Назва
     * @minLength 1
     * @maxLength 64
     */
    name: string;
    /**
     * Логотип
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    logo?: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 64
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
}

export interface GallerySerializerEvent {
    /** ID */
    id?: number;
    /** Подія */
    event: number;
    /**
     * Зображення
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string;
    /** Width */
    width?: number;
    /** Height */
    height?: number;
}

export interface EventVideo {
    /** ID */
    id?: number;
    /** Подія */
    event: number;
    /**
     * Посилання на YouTube
     * @format uri
     * @maxLength 200
     */
    youtube_url?: string | null;
    /**
     * Назва
     * *Поле генерується автоматично
     * @maxLength 1000
     */
    title?: string | null;
    /**
     * Мініатюра
     * Інформація про стандартний thumbnail (JSON)
     */
    thumbnail?: object | null;
}

export interface EventDetail {
    /** ID */
    id?: number;
    /**
     * Назва
     * Максимальна к-ть символів - 100
     * @minLength 1
     * @maxLength 100
     */
    name: string;
    /** Опис події */
    description?: string | null;
    /** Показувати текст на картці */
    is_show_text?: boolean | null;
    /**
     * Логотип події
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string | null;
    /**
     * Постер події
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    poster?: string | null;
    /** Відмітка про благодійність */
    charity?: boolean | null;
    /**
     * Час початку події
     * @format date-time
     */
    start_time?: string | null;
    /**
     * Ціна за вхід
     * Ціна події (від 0 до 9999), якщо вхід вільний залишити пусте поле
     * @min 1
     * @max 9999
     */
    price?: number | null;
    /**
     * Місце проведення події
     * @maxLength 255
     */
    location?: string | null;
    /**
     * Address
     * @maxLength 255
     */
    address?: string | null;
    /**
     * Жанр події
     * @maxLength 255
     */
    genre?: string | null;
    /** Booking count */
    booking_count?: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 150
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    music_band?: MusicBand[];
    gallery?: GallerySerializerEvent[];
    video?: EventVideo[];
    /**
     * Посилання на Google карти
     * @format uri
     * @maxLength 500
     */
    location_link?: string | null;
    /**
     * Посилання на Google календар
     * @format uri
     * @maxLength 500
     */
    google_calendar?: string | null;
    comment?: Comment[];
}

export interface SongsSerializerByBand {
    /** ID */
    id?: number;
    /**
     * Назва треку
     * @minLength 1
     * @maxLength 100
     */
    song_name?: string;
    /**
     * Трек
     * Доступні формати (mp3)
     * @format uri
     */
    song_url?: string;
    /** Сингл */
    single?: boolean;
    /**
     * Обкладинка
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    song_image?: string;
    /**
     * Номер треку в альбомі
     * @min 0
     * @max 2147483647
     */
    track_number?: number | null;
    /**
     * Тривалість
     * Формат 00:00, вираховується автоматично
     * @maxLength 10
     */
    duration?: string;
    /** Показувати на сайті */
    is_published?: boolean;
    /** Музичний гурт */
    musicband: number;
    /** Альбом */
    album?: number | null;
}

export interface Video {
    /** ID */
    id?: number;
    /**
     * Посилання на YouTube
     * @format uri
     * @maxLength 200
     */
    youtube_url?: string | null;
    /**
     * Назва
     * *Поле генерується автоматично
     * @maxLength 1000
     */
    title?: string | null;
    /** Мініатюра */
    thumbnail?: object | null;
    /** Музичний гурт */
    music_band: number;
}

export interface Gallery {
    /** ID */
    id?: number;
    /**
     * Зображення
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string;
    /** Width */
    width?: number | null;
    /** Height */
    height?: number | null;
    /**
     * Created at
     * @format date-time
     */
    created_at?: string;
    /** Music band */
    music_band: number;
}

export interface MusicBandDetail {
    /** ID */
    id?: number;
    /**
     * Назва
     * @minLength 1
     * @maxLength 64
     */
    name: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 64
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Логотип
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    logo?: string;
    /**
     * Постер гурту
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    poster?: string | null;
    /** Опис */
    description?: string | null;
    /**
     * Посилання на підтримку
     * @format uri
     * @maxLength 200
     */
    bank_to_support?: string;
    /**
     * Електронна пошта
     * @format email
     * @maxLength 254
     */
    email_band?: string;
    /** Is fan */
    is_fan?: boolean;
    /** Member */
    member?: string;
    song?: SongsSerializerByBand[];
    video?: Video[];
    gallery?: Gallery[];
    social_network_links?: SocialNetworkLink[];
}

export interface Article {
    /**
     * Назва
     * Максимальна к-ть символів - 200
     * @minLength 1
     * @maxLength 200
     */
    title: string;
    /**
     * Зображення
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string | null;
    /**
     * Опис
     * Максимальна к-ть символів - 1000
     * @minLength 1
     * @maxLength 1000
     */
    description: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 255
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Створено
     * @format date-time
     */
    created_at?: string;
    author?: Author[];
    category?: Category[];
}

export interface ArticleDetail {
    /**
     * Назва
     * Максимальна к-ть символів - 200
     * @minLength 1
     * @maxLength 200
     */
    title: string;
    /**
     * Зображення
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    image?: string | null;
    /**
     * Опис
     * Максимальна к-ть символів - 1000
     * @minLength 1
     * @maxLength 1000
     */
    description: string;
    /**
     * Content
     * @minLength 1
     */
    content: string;
    /**
     * Read time
     * @min -2147483648
     * @max 2147483647
     */
    read_time?: number;
    /** Views */
    views?: number;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 255
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Створено
     * @format date-time
     */
    created_at?: string;
    /**
     * Оновлено
     * @format date-time
     */
    updated_at?: string;
    /** Опубліковано */
    is_published?: boolean;
    /** Чорновик */
    is_draft?: boolean;
    author?: Author[];
    category?: Category[];
}

export interface Podcast {
    /** ID */
    id?: number;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 999
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    podcast_slug?: string;
    /**
     * Назва подкасту
     * Введіть назву цього випуску вашого подкасту.
     * @maxLength 255
     */
    title?: string;
    /**
     * Зображення обкладинки
     * Оберіть зображення для обкладинки вашого подкасту.
     * @format uri
     */
    cover_image?: string | null;
    /**
     * Зображення iTunes
     * URL до зображення подкасту в iTunes
     * @format uri
     * @maxLength 500
     */
    itunes_image?: string | null;
}

export interface PodcastAggregator {
    /** ID */
    id?: number;
    /**
     * Назва агрегатора
     * Введіть назву агрегатора подкастів.
     * @minLength 1
     * @maxLength 50
     */
    name: string;
    /**
     * Зображення агрегатора
     * Оберіть зображення для агрегатора подкастів.
     * @format uri
     */
    image?: string | null;
}

export interface PodcastCategory {
    /** ID */
    id?: number;
    /**
     * Назва категорії подкасту
     * Введіть назву агрегатора подкастів.
     * @minLength 1
     * @maxLength 50
     */
    name: string;
}

export interface PodcastAggregatorLink {
    /** ID */
    id?: number;
    /**
     * Link
     * @format uri
     * @minLength 1
     * @maxLength 200
     */
    link: string;
    /** Aggregator name */
    aggregator_name?: string;
}

export interface PodcastDetail {
    /** ID */
    id?: number;
    additional_categories: PodcastCategory[];
    main_category: PodcastCategory;
    aggregator_links?: PodcastAggregatorLink[];
    /**
     * RSS URL
     * URL до RSS-стрічки подкасту
     * @format uri
     * @minLength 1
     * @maxLength 500
     */
    rss_url: string;
    /**
     * Назва подкасту
     * Введіть назву цього випуску вашого подкасту.
     * @maxLength 255
     */
    title?: string;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 999
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    podcast_slug?: string;
    /**
     * Зображення iTunes
     * URL до зображення подкасту в iTunes
     * @format uri
     * @maxLength 500
     */
    itunes_image?: string | null;
    /**
     * Зображення обкладинки
     * Оберіть зображення для обкладинки вашого подкасту.
     * @format uri
     */
    cover_image?: string | null;
    /**
     * Опис подкасту
     * Додайте опис
     */
    description?: string;
    /**
     * Кастомний опис подкасту
     * Додайте кастомний опис вашого подкасту. Він буде мати пріорітет
     */
    custom_description?: string;
    /**
     * Власник подкасту
     * Введіть ім'я або назву господаря вашого подкасту.
     * @maxLength 100
     */
    host?: string;
    /**
     * Email
     * email
     * @format email
     * @maxLength 254
     */
    email?: string;
    /**
     * Color
     * @maxLength 25
     * @pattern ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
     */
    color?: string;
    /**
     * Дата створення
     * Дата та час створення запису.
     * @format date-time
     */
    created_at?: string;
    /** Показувати на сайті */
    is_published?: boolean;
}

export interface PodcastEpisode {
    /** ID */
    id?: number;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 999
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Назва подкасту
     * Введіть назву цього випуску вашого подкасту.
     * @minLength 1
     */
    title: string;
    /**
     * Зображення iTunes
     * URL до зображення подкасту в iTunes
     * @format uri
     * @maxLength 500
     */
    itunes_image?: string | null;
    /**
     * Опис подкасту
     * Додайте опис
     * @minLength 1
     */
    description: string;
    /**
     * Дата випуску
     * Виберіть дату, коли цей випуск був випущений.
     * @format date
     */
    release_date: string;
    /**
     * Аудіофайл випуску
     * Оберіть аудіофайл для цього випуску.
     * @format uri
     * @minLength 1
     * @maxLength 200
     */
    audio_url: string;
    /**
     * Аудіофайл випуску
     * Оберіть аудіофайл для цього випуску.
     * @format uri
     */
    audio_file?: string;
    /**
     * Color
     * @minLength 1
     * @maxLength 25
     * @pattern ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
     */
    color?: string;
    /**
     * Тривалість
     * Формат 00:00, вираховується автоматично
     * @maxLength 10
     */
    duration?: string;
    /**
     * Дата створення
     * Дата та час створення запису.
     * @format date-time
     */
    created_at?: string;
    /** Показувати на сайті */
    is_published?: boolean;
    /**
     * Подкаст
     * Виберіть подкаст, до якого відноситься цей випуск.
     */
    podcast: number;
}

export interface Album {
    /** ID */
    id?: number;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 64
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Назва альбому
     * @minLength 1
     * @maxLength 100
     */
    name?: string;
    /**
     * Обкладинка альбому
     * @format uri
     */
    album_image?: string;
    musicband?: MusicBand;
    /**
     * Рік випуску
     * @min 0
     * @max 2024
     */
    year?: number | null;
}

export interface AlbumSerializerDetail {
    /** ID */
    id?: number;
    musicband?: MusicBand;
    /**
     * Назва альбому
     * @minLength 1
     * @maxLength 100
     */
    name?: string;
    /**
     * Обкладинка альбому
     * @format uri
     */
    album_image?: string;
    /** Показувати на сайті */
    is_published?: boolean;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 64
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Опис
     * Максимальна к-ть символів - 200
     * @maxLength 200
     */
    description?: string;
    /**
     * Рік випуску
     * @min 0
     * @max 2024
     */
    year?: number | null;
}

export interface AlbumForSong {
    /** ID */
    id?: number;
    /**
     * Ідентифікатор
     * Унікальний текстовий ідентифікатор (slug) для сторінки чи запису. *Додається автоматично
     * @format slug
     * @maxLength 64
     * @pattern ^[-a-zA-Z0-9_]+$
     */
    slug?: string;
    /**
     * Назва альбому
     * @minLength 1
     * @maxLength 100
     */
    name?: string;
}

export interface Songs {
    /** ID */
    id?: number;
    /** Musicband */
    musicband?: string;
    /**
     * Назва треку
     * @minLength 1
     * @maxLength 100
     */
    song_name?: string;
    album?: AlbumForSong;
    /**
     * Тривалість
     * Формат 00:00, вираховується автоматично
     * @maxLength 10
     */
    duration?: string;
    /**
     * Трек
     * Доступні формати (mp3)
     * @format uri
     */
    song_url?: string;
    /**
     * Обкладинка
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    song_image?: string;
    /** Total likes */
    total_likes?: string;
    /** Is fan */
    is_fan?: boolean;
}

export interface SongLiked {
    /** ID */
    id?: number;
    musicband?: MusicBand;
    /**
     * Назва треку
     * @minLength 1
     * @maxLength 100
     */
    song_name?: string;
    /**
     * Трек
     * Доступні формати (mp3)
     * @format uri
     */
    song_url?: string;
    /**
     * Обкладинка
     * Доступні формати (jpg, jpeg, png)
     * @format uri
     */
    song_image?: string;
    /** Total likes */
    total_likes?: string;
    /** Is fan */
    is_fan?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = 'https://api.lantern.com.ua';
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
    private abortControllers = new Map<CancelToken, AbortController>();
    private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    };

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig);
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key];
        return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
        return keys
            .map((key) =>
                Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)
            )
            .join('&');
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : '';
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === 'object' && property !== null
                        ? JSON.stringify(property)
                        : `${property}`
                );
                return formData;
            }, new FormData()),
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
    };

    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {})
            }
        };
    }

    protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;

        return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
        }).then(async (response) => {
            const r = response as HttpResponse<T, E>;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                      .then((data) => {
                          if (r.ok) {
                              r.data = data;
                          } else {
                              r.error = data;
                          }
                          return r;
                      })
                      .catch((e) => {
                          r.error = e;
                          return r;
                      });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data;
        });
    };
}

/**
 * @title Lantern
 * @version v1
 * @license BSD License
 * @termsOfService https:/lantern.com.ua/
 * @baseUrl https://api.lantern.com.ua
 *
 * Lantern
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    appServices = {
        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesContactInfoList
         * @request GET:/app-services/contact-info/
         * @secure
         */
        appServicesContactInfoList: (params: RequestParams = {}) =>
            this.request<ContactInfo[], any>({
                path: `/app-services/contact-info/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesContactInfoRead
         * @request GET:/app-services/contact-info/{slug}/
         * @secure
         */
        appServicesContactInfoRead: (slug: string, params: RequestParams = {}) =>
            this.request<ContactInfo, any>({
                path: `/app-services/contact-info/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesStaticImagesList
         * @request GET:/app-services/static-images/
         * @secure
         */
        appServicesStaticImagesList: (params: RequestParams = {}) =>
            this.request<StaticImagesCategory[], any>({
                path: `/app-services/static-images/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesStaticImagesRead
         * @request GET:/app-services/static-images/{slug}/
         * @secure
         */
        appServicesStaticImagesRead: (slug: string, params: RequestParams = {}) =>
            this.request<StaticImagesCategory, any>({
                path: `/app-services/static-images/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesTeamList
         * @request GET:/app-services/team/
         * @secure
         */
        appServicesTeamList: (params: RequestParams = {}) =>
            this.request<CategoryTeamMember[], any>({
                path: `/app-services/team/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags app-services
         * @name AppServicesTeamRead
         * @request GET:/app-services/team/{id}/
         * @secure
         */
        appServicesTeamRead: (id: number, params: RequestParams = {}) =>
            this.request<CategoryTeamMember, any>({
                path: `/app-services/team/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            })
    };
    auth = {
        /**
         * No description
         *
         * @tags auth
         * @name AuthGoogleAuthCreate
         * @request POST:/auth/google_auth/
         * @secure
         */
        authGoogleAuthCreate: (
            data: {
                /** access_token */
                access_token: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<
                {
                    /** Токен доступу */
                    access?: string;
                    /** Токен оновлення */
                    refresh?: string;
                },
                {
                    /** Операція не вдалася */
                    success?: boolean;
                    /** Повідомлення про помилку */
                    error?: string;
                }
            >({
                path: `/auth/google_auth/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
         *
         * @tags auth
         * @name AuthJwtCreateCreate
         * @request POST:/auth/jwt/create/
         * @secure
         */
        authJwtCreateCreate: (data: TokenObtainPair, params: RequestParams = {}) =>
            this.request<TokenObtainPair, any>({
                path: `/auth/jwt/create/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
         *
         * @tags auth
         * @name AuthJwtRefreshCreate
         * @request POST:/auth/jwt/refresh/
         * @secure
         */
        authJwtRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
            this.request<TokenRefresh, any>({
                path: `/auth/jwt/refresh/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
         *
         * @tags auth
         * @name AuthJwtVerifyCreate
         * @request POST:/auth/jwt/verify/
         * @secure
         */
        authJwtVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
            this.request<TokenVerify, any>({
                path: `/auth/jwt/verify/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUnregisteredUsersList
         * @request GET:/auth/unregistered-users/
         * @secure
         */
        authUnregisteredUsersList: (params: RequestParams = {}) =>
            this.request<UnregisteredUser[], any>({
                path: `/auth/unregistered-users/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUnregisteredUsersCreate
         * @request POST:/auth/unregistered-users/
         * @secure
         */
        authUnregisteredUsersCreate: (data: UnregisteredUser, params: RequestParams = {}) =>
            this.request<UnregisteredUser, any>({
                path: `/auth/unregistered-users/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersList
         * @request GET:/auth/users/
         * @secure
         */
        authUsersList: (params: RequestParams = {}) =>
            this.request<UserSmall[], any>({
                path: `/auth/users/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersCreate
         * @request POST:/auth/users/
         * @secure
         */
        authUsersCreate: (data: UserCreate, params: RequestParams = {}) =>
            this.request<UserCreate, any>({
                path: `/auth/users/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersActivation
         * @request POST:/auth/users/activation/
         * @secure
         */
        authUsersActivation: (data: Activation, params: RequestParams = {}) =>
            this.request<Activation, any>({
                path: `/auth/users/activation/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersMeRead
         * @request GET:/auth/users/me/
         * @secure
         */
        authUsersMeRead: (params: RequestParams = {}) =>
            this.request<User[], any>({
                path: `/auth/users/me/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersMeUpdate
         * @request PUT:/auth/users/me/
         * @secure
         */
        authUsersMeUpdate: (data: User, params: RequestParams = {}) =>
            this.request<User, any>({
                path: `/auth/users/me/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersMePartialUpdate
         * @request PATCH:/auth/users/me/
         * @secure
         */
        authUsersMePartialUpdate: (data: User, params: RequestParams = {}) =>
            this.request<User, any>({
                path: `/auth/users/me/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersMeDelete
         * @request DELETE:/auth/users/me/
         * @secure
         */
        authUsersMeDelete: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/auth/users/me/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersResendActivation
         * @request POST:/auth/users/resend_activation/
         * @secure
         */
        authUsersResendActivation: (data: SendEmailReset, params: RequestParams = {}) =>
            this.request<SendEmailReset, any>({
                path: `/auth/users/resend_activation/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersResetUsername
         * @request POST:/auth/users/reset_email/
         * @secure
         */
        authUsersResetUsername: (data: SendEmailReset, params: RequestParams = {}) =>
            this.request<SendEmailReset, any>({
                path: `/auth/users/reset_email/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersResetUsernameConfirm
         * @request POST:/auth/users/reset_email_confirm/
         * @secure
         */
        authUsersResetUsernameConfirm: (data: UsernameResetConfirm, params: RequestParams = {}) =>
            this.request<UsernameResetConfirm, any>({
                path: `/auth/users/reset_email_confirm/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersResetPassword
         * @request POST:/auth/users/reset_password/
         * @secure
         */
        authUsersResetPassword: (data: SendEmailReset, params: RequestParams = {}) =>
            this.request<SendEmailReset, any>({
                path: `/auth/users/reset_password/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersResetPasswordConfirm
         * @request POST:/auth/users/reset_password_confirm/
         * @secure
         */
        authUsersResetPasswordConfirm: (data: PasswordResetConfirm, params: RequestParams = {}) =>
            this.request<PasswordResetConfirm, any>({
                path: `/auth/users/reset_password_confirm/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersSetUsername
         * @request POST:/auth/users/set_email/
         * @secure
         */
        authUsersSetUsername: (data: SetUsername, params: RequestParams = {}) =>
            this.request<SetUsername, any>({
                path: `/auth/users/set_email/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersSetPassword
         * @request POST:/auth/users/set_password/
         * @secure
         */
        authUsersSetPassword: (data: SetPassword, params: RequestParams = {}) =>
            this.request<SetPassword, any>({
                path: `/auth/users/set_password/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersRead
         * @request GET:/auth/users/{id}/
         * @secure
         */
        authUsersRead: (id: number, params: RequestParams = {}) =>
            this.request<UserSmall, any>({
                path: `/auth/users/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersUpdate
         * @request PUT:/auth/users/{id}/
         * @secure
         */
        authUsersUpdate: (id: number, data: UserSmall, params: RequestParams = {}) =>
            this.request<UserSmall, any>({
                path: `/auth/users/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersPartialUpdate
         * @request PATCH:/auth/users/{id}/
         * @secure
         */
        authUsersPartialUpdate: (id: number, data: UserSmall, params: RequestParams = {}) =>
            this.request<UserSmall, any>({
                path: `/auth/users/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags auth
         * @name AuthUsersDelete
         * @request DELETE:/auth/users/{id}/
         * @secure
         */
        authUsersDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/auth/users/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    authors = {
        /**
         * No description
         *
         * @tags authors
         * @name AuthorsList
         * @request GET:/authors/
         * @secure
         */
        authorsList: (params: RequestParams = {}) =>
            this.request<Author[], any>({
                path: `/authors/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsCreate
         * @request POST:/authors/
         * @secure
         */
        authorsCreate: (data: Author, params: RequestParams = {}) =>
            this.request<Author, any>({
                path: `/authors/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsRead
         * @request GET:/authors/{id}/
         * @secure
         */
        authorsRead: (id: number, params: RequestParams = {}) =>
            this.request<Author, any>({
                path: `/authors/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsUpdate
         * @request PUT:/authors/{id}/
         * @secure
         */
        authorsUpdate: (id: number, data: Author, params: RequestParams = {}) =>
            this.request<Author, any>({
                path: `/authors/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsPartialUpdate
         * @request PATCH:/authors/{id}/
         * @secure
         */
        authorsPartialUpdate: (id: number, data: Author, params: RequestParams = {}) =>
            this.request<Author, any>({
                path: `/authors/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsDelete
         * @request DELETE:/authors/{id}/
         * @secure
         */
        authorsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/authors/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags authors
         * @name AuthorsArticles
         * @request GET:/authors/{id}/articles/
         * @secure
         */
        authorsArticles: (id: number, params: RequestParams = {}) =>
            this.request<Author, any>({
                path: `/authors/${id}/articles/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            })
    };
    bookings = {
        /**
         * No description
         *
         * @tags bookings
         * @name BookingsList
         * @request GET:/bookings/
         * @secure
         */
        bookingsList: (
            query?: {
                event?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Booking[], any>({
                path: `/bookings/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsCreate
         * @request POST:/bookings/
         * @secure
         */
        bookingsCreate: (data: Booking, params: RequestParams = {}) =>
            this.request<Booking, any>({
                path: `/bookings/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsGetUserBookedEvents
         * @request GET:/bookings/get_user_booked_events/
         * @secure
         */
        bookingsGetUserBookedEvents: (
            query?: {
                event?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Booking[], any>({
                path: `/bookings/get_user_booked_events/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags booking_status
         * @name BookingStatus
         * @request GET:/bookings/{event_slug}/
         * @secure
         */
        bookingStatus: (
            eventSlug: string,
            query?: {
                event?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Booking[], any>({
                path: `/bookings/${eventSlug}/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsRead
         * @request GET:/bookings/{id}/
         * @secure
         */
        bookingsRead: (id: number, params: RequestParams = {}) =>
            this.request<Booking, any>({
                path: `/bookings/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsUpdate
         * @request PUT:/bookings/{id}/
         * @secure
         */
        bookingsUpdate: (id: number, data: Booking, params: RequestParams = {}) =>
            this.request<Booking, any>({
                path: `/bookings/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsPartialUpdate
         * @request PATCH:/bookings/{id}/
         * @secure
         */
        bookingsPartialUpdate: (id: number, data: Booking, params: RequestParams = {}) =>
            this.request<Booking, any>({
                path: `/bookings/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags bookings
         * @name BookingsDelete
         * @request DELETE:/bookings/{id}/
         * @secure
         */
        bookingsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/bookings/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    categories = {
        /**
         * No description
         *
         * @tags categories
         * @name CategoriesList
         * @request GET:/categories/
         * @secure
         */
        categoriesList: (params: RequestParams = {}) =>
            this.request<Category[], any>({
                path: `/categories/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags categories
         * @name CategoriesCreate
         * @request POST:/categories/
         * @secure
         */
        categoriesCreate: (data: Category, params: RequestParams = {}) =>
            this.request<Category, any>({
                path: `/categories/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags categories
         * @name CategoriesRead
         * @request GET:/categories/{id}/
         * @secure
         */
        categoriesRead: (id: number, params: RequestParams = {}) =>
            this.request<Category, any>({
                path: `/categories/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags categories
         * @name CategoriesUpdate
         * @request PUT:/categories/{id}/
         * @secure
         */
        categoriesUpdate: (id: number, data: Category, params: RequestParams = {}) =>
            this.request<Category, any>({
                path: `/categories/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags categories
         * @name CategoriesPartialUpdate
         * @request PATCH:/categories/{id}/
         * @secure
         */
        categoriesPartialUpdate: (id: number, data: Category, params: RequestParams = {}) =>
            this.request<Category, any>({
                path: `/categories/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags categories
         * @name CategoriesDelete
         * @request DELETE:/categories/{id}/
         * @secure
         */
        categoriesDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/categories/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    eventsComment = {
        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentList
         * @request GET:/events-comment/
         * @secure
         */
        eventsCommentList: (
            query?: {
                event?: string;
                event_slug?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Comment[], any>({
                path: `/events-comment/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentCreate
         * @request POST:/events-comment/
         * @secure
         */
        eventsCommentCreate: (data: Comment, params: RequestParams = {}) =>
            this.request<Comment, any>({
                path: `/events-comment/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentRead
         * @request GET:/events-comment/{id}/
         * @secure
         */
        eventsCommentRead: (id: number, params: RequestParams = {}) =>
            this.request<Comment, any>({
                path: `/events-comment/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentUpdate
         * @request PUT:/events-comment/{id}/
         * @secure
         */
        eventsCommentUpdate: (id: number, data: Comment, params: RequestParams = {}) =>
            this.request<Comment, any>({
                path: `/events-comment/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentPartialUpdate
         * @request PATCH:/events-comment/{id}/
         * @secure
         */
        eventsCommentPartialUpdate: (id: number, data: Comment, params: RequestParams = {}) =>
            this.request<Comment, any>({
                path: `/events-comment/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events-comment
         * @name EventsCommentDelete
         * @request DELETE:/events-comment/{id}/
         * @secure
         */
        eventsCommentDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/events-comment/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    events = {
        /**
         * No description
         *
         * @tags events
         * @name EventsList
         * @request GET:/events/
         * @secure
         */
        eventsList: (
            query?: {
                /** The pagination cursor value. */
                cursor?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<
                {
                    /** @format uri */
                    next?: string | null;
                    /** @format uri */
                    previous?: string | null;
                    results: Event[];
                },
                any
            >({
                path: `/events/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsCreate
         * @request POST:/events/
         * @secure
         */
        eventsCreate: (data: Event, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/events/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsRead
         * @request GET:/events/{slug}/
         * @secure
         */
        eventsRead: (slug: string, params: RequestParams = {}) =>
            this.request<EventDetail, any>({
                path: `/events/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsUpdate
         * @request PUT:/events/{slug}/
         * @secure
         */
        eventsUpdate: (slug: string, data: Event, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/events/${slug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsPartialUpdate
         * @request PATCH:/events/{slug}/
         * @secure
         */
        eventsPartialUpdate: (slug: string, data: Event, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/events/${slug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsDelete
         * @request DELETE:/events/{slug}/
         * @secure
         */
        eventsDelete: (slug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/events/${slug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags events
         * @name EventsUsers
         * @request GET:/events/{slug}/users/
         * @secure
         */
        eventsUsers: (slug: string, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/events/${slug}/users/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            })
    };
    feedback = {
        /**
         * No description
         *
         * @tags feedback
         * @name FeedbackCreate
         * @request POST:/feedback/
         * @secure
         */
        feedbackCreate: (
            data: {
                /** Ім'я */
                name: string;
                /** Електронна пошта */
                email: string;
                /** Повідомлення */
                message: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<
                {
                    /** Ім'я */
                    name: string;
                    /** Електронна пошта */
                    email: string;
                    /** Повідомлення */
                    message: string;
                },
                any
            >({
                path: `/feedback/`,
                method: 'POST',
                body: data,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params
            })
    };
    musicBandsLike = {
        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikeList
         * @request GET:/music-bands-like/
         * @secure
         */
        musicBandsLikeList: (
            query?: {
                likes__user?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<MusicBand[], any>({
                path: `/music-bands-like/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikeCreate
         * @request POST:/music-bands-like/
         * @secure
         */
        musicBandsLikeCreate: (data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikeRead
         * @request GET:/music-bands-like/{id}/
         * @secure
         */
        musicBandsLikeRead: (id: number, params: RequestParams = {}) =>
            this.request<MusicBandDetail, any>({
                path: `/music-bands-like/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikeUpdate
         * @request PUT:/music-bands-like/{id}/
         * @secure
         */
        musicBandsLikeUpdate: (id: number, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikePartialUpdate
         * @request PATCH:/music-bands-like/{id}/
         * @secure
         */
        musicBandsLikePartialUpdate: (id: number, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands-like
         * @name MusicBandsLikeDelete
         * @request DELETE:/music-bands-like/{id}/
         * @secure
         */
        musicBandsLikeDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/music-bands-like/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * @description Get the users which liked a model instance.
         *
         * @tags music-bands-like
         * @name MusicBandsLikeFans
         * @request GET:/music-bands-like/{id}/fans/
         * @secure
         */
        musicBandsLikeFans: (id: number, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/${id}/fans/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * @description Like a model instance.
         *
         * @tags music-bands-like
         * @name MusicBandsLikeLike
         * @request POST:/music-bands-like/{id}/like/
         * @secure
         */
        musicBandsLikeLike: (id: number, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/${id}/like/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * @description Unlike a model instance.
         *
         * @tags music-bands-like
         * @name MusicBandsLikeUnlike
         * @request POST:/music-bands-like/{id}/unlike/
         * @secure
         */
        musicBandsLikeUnlike: (id: number, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands-like/${id}/unlike/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            })
    };
    musicBands = {
        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsList
         * @request GET:/music-bands/
         * @secure
         */
        musicBandsList: (params: RequestParams = {}) =>
            this.request<MusicBand[], any>({
                path: `/music-bands/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsCreate
         * @request POST:/music-bands/
         * @secure
         */
        musicBandsCreate: (data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsRead
         * @request GET:/music-bands/{slug}/
         * @secure
         */
        musicBandsRead: (slug: string, params: RequestParams = {}) =>
            this.request<MusicBandDetail, any>({
                path: `/music-bands/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsUpdate
         * @request PUT:/music-bands/{slug}/
         * @secure
         */
        musicBandsUpdate: (slug: string, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands/${slug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsPartialUpdate
         * @request PATCH:/music-bands/{slug}/
         * @secure
         */
        musicBandsPartialUpdate: (slug: string, data: MusicBand, params: RequestParams = {}) =>
            this.request<MusicBand, any>({
                path: `/music-bands/${slug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags music-bands
         * @name MusicBandsDelete
         * @request DELETE:/music-bands/{slug}/
         * @secure
         */
        musicBandsDelete: (slug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/music-bands/${slug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    news = {
        /**
         * No description
         *
         * @tags news
         * @name NewsList
         * @request GET:/news/
         * @secure
         */
        newsList: (
            query?: {
                category?: string;
                author?: string;
                /** The pagination cursor value. */
                cursor?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<
                {
                    /** @format uri */
                    next?: string | null;
                    /** @format uri */
                    previous?: string | null;
                    results: Article[];
                },
                any
            >({
                path: `/news/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsCreate
         * @request POST:/news/
         * @secure
         */
        newsCreate: (data: Article, params: RequestParams = {}) =>
            this.request<Article, any>({
                path: `/news/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsRead
         * @request GET:/news/{slug}/
         * @secure
         */
        newsRead: (slug: string, params: RequestParams = {}) =>
            this.request<ArticleDetail, any>({
                path: `/news/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsUpdate
         * @request PUT:/news/{slug}/
         * @secure
         */
        newsUpdate: (slug: string, data: Article, params: RequestParams = {}) =>
            this.request<Article, any>({
                path: `/news/${slug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsPartialUpdate
         * @request PATCH:/news/{slug}/
         * @secure
         */
        newsPartialUpdate: (slug: string, data: Article, params: RequestParams = {}) =>
            this.request<Article, any>({
                path: `/news/${slug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsDelete
         * @request DELETE:/news/{slug}/
         * @secure
         */
        newsDelete: (slug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/news/${slug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags news
         * @name NewsUsers
         * @request GET:/news/{slug}/users/
         * @secure
         */
        newsUsers: (slug: string, params: RequestParams = {}) =>
            this.request<Article, any>({
                path: `/news/${slug}/users/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            })
    };
    podcasts = {
        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsList
         * @request GET:/podcasts/
         * @secure
         */
        podcastsList: (
            query?: {
                /** Which field to use when ordering the results. */
                ordering?: string;
                /** Filter by title, -created_at or created_at */
                title?: string;
                /** Filter by category */
                category?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Podcast[], any>({
                path: `/podcasts/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCreate
         * @request POST:/podcasts/
         * @secure
         */
        podcastsCreate: (data: Podcast, params: RequestParams = {}) =>
            this.request<Podcast, any>({
                path: `/podcasts/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsList
         * @request GET:/podcasts/aggregators/
         * @secure
         */
        podcastsAggregatorsList: (params: RequestParams = {}) =>
            this.request<PodcastAggregator[], any>({
                path: `/podcasts/aggregators/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsCreate
         * @request POST:/podcasts/aggregators/
         * @secure
         */
        podcastsAggregatorsCreate: (data: PodcastAggregator, params: RequestParams = {}) =>
            this.request<PodcastAggregator, any>({
                path: `/podcasts/aggregators/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsRead
         * @request GET:/podcasts/aggregators/{id}/
         * @secure
         */
        podcastsAggregatorsRead: (id: number, params: RequestParams = {}) =>
            this.request<PodcastAggregator, any>({
                path: `/podcasts/aggregators/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsUpdate
         * @request PUT:/podcasts/aggregators/{id}/
         * @secure
         */
        podcastsAggregatorsUpdate: (id: number, data: PodcastAggregator, params: RequestParams = {}) =>
            this.request<PodcastAggregator, any>({
                path: `/podcasts/aggregators/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsPartialUpdate
         * @request PATCH:/podcasts/aggregators/{id}/
         * @secure
         */
        podcastsAggregatorsPartialUpdate: (id: number, data: PodcastAggregator, params: RequestParams = {}) =>
            this.request<PodcastAggregator, any>({
                path: `/podcasts/aggregators/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsAggregatorsDelete
         * @request DELETE:/podcasts/aggregators/{id}/
         * @secure
         */
        podcastsAggregatorsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/podcasts/aggregators/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesList
         * @request GET:/podcasts/categories/
         * @secure
         */
        podcastsCategoriesList: (params: RequestParams = {}) =>
            this.request<PodcastCategory[], any>({
                path: `/podcasts/categories/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesCreate
         * @request POST:/podcasts/categories/
         * @secure
         */
        podcastsCategoriesCreate: (data: PodcastCategory, params: RequestParams = {}) =>
            this.request<PodcastCategory, any>({
                path: `/podcasts/categories/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesRead
         * @request GET:/podcasts/categories/{id}/
         * @secure
         */
        podcastsCategoriesRead: (id: number, params: RequestParams = {}) =>
            this.request<PodcastCategory, any>({
                path: `/podcasts/categories/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesUpdate
         * @request PUT:/podcasts/categories/{id}/
         * @secure
         */
        podcastsCategoriesUpdate: (id: number, data: PodcastCategory, params: RequestParams = {}) =>
            this.request<PodcastCategory, any>({
                path: `/podcasts/categories/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesPartialUpdate
         * @request PATCH:/podcasts/categories/{id}/
         * @secure
         */
        podcastsCategoriesPartialUpdate: (id: number, data: PodcastCategory, params: RequestParams = {}) =>
            this.request<PodcastCategory, any>({
                path: `/podcasts/categories/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsCategoriesDelete
         * @request DELETE:/podcasts/categories/{id}/
         * @secure
         */
        podcastsCategoriesDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/podcasts/categories/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsRead
         * @request GET:/podcasts/{podcast_slug}/
         * @secure
         */
        podcastsRead: (podcastSlug: string, params: RequestParams = {}) =>
            this.request<PodcastDetail, any>({
                path: `/podcasts/${podcastSlug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsUpdate
         * @request PUT:/podcasts/{podcast_slug}/
         * @secure
         */
        podcastsUpdate: (podcastSlug: string, data: Podcast, params: RequestParams = {}) =>
            this.request<Podcast, any>({
                path: `/podcasts/${podcastSlug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsPartialUpdate
         * @request PATCH:/podcasts/{podcast_slug}/
         * @secure
         */
        podcastsPartialUpdate: (podcastSlug: string, data: Podcast, params: RequestParams = {}) =>
            this.request<Podcast, any>({
                path: `/podcasts/${podcastSlug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsDelete
         * @request DELETE:/podcasts/{podcast_slug}/
         * @secure
         */
        podcastsDelete: (podcastSlug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/podcasts/${podcastSlug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * @description List of podcast episodes sorted by release date
         *
         * @tags podcasts
         * @name PodcastsEpisodesList
         * @request GET:/podcasts/{podcast_slug}/episodes/
         * @secure
         */
        podcastsEpisodesList: (
            podcastSlug: string,
            query?: {
                /** Field to sort by (e.g., release_date, title etc.) */
                sort_by?: string;
                /** Whether to sort in descending order - true or false */
                descending?: boolean;
            },
            params: RequestParams = {}
        ) =>
            this.request<PodcastEpisode[], any>({
                path: `/podcasts/${podcastSlug}/episodes/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsEpisodesCreate
         * @request POST:/podcasts/{podcast_slug}/episodes/
         * @secure
         */
        podcastsEpisodesCreate: (podcastSlug: string, data: PodcastEpisode, params: RequestParams = {}) =>
            this.request<PodcastEpisode, any>({
                path: `/podcasts/${podcastSlug}/episodes/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsEpisodesRead
         * @request GET:/podcasts/{podcast_slug}/episodes/{slug}/
         * @secure
         */
        podcastsEpisodesRead: (podcastSlug: string, slug: string, params: RequestParams = {}) =>
            this.request<PodcastEpisode, any>({
                path: `/podcasts/${podcastSlug}/episodes/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsEpisodesUpdate
         * @request PUT:/podcasts/{podcast_slug}/episodes/{slug}/
         * @secure
         */
        podcastsEpisodesUpdate: (podcastSlug: string, slug: string, data: PodcastEpisode, params: RequestParams = {}) =>
            this.request<PodcastEpisode, any>({
                path: `/podcasts/${podcastSlug}/episodes/${slug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsEpisodesPartialUpdate
         * @request PATCH:/podcasts/{podcast_slug}/episodes/{slug}/
         * @secure
         */
        podcastsEpisodesPartialUpdate: (
            podcastSlug: string,
            slug: string,
            data: PodcastEpisode,
            params: RequestParams = {}
        ) =>
            this.request<PodcastEpisode, any>({
                path: `/podcasts/${podcastSlug}/episodes/${slug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags podcasts
         * @name PodcastsEpisodesDelete
         * @request DELETE:/podcasts/{podcast_slug}/episodes/{slug}/
         * @secure
         */
        podcastsEpisodesDelete: (podcastSlug: string, slug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/podcasts/${podcastSlug}/episodes/${slug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    socialNetworks = {
        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksList
         * @request GET:/social_networks/
         * @secure
         */
        socialNetworksList: (params: RequestParams = {}) =>
            this.request<SocialNetworkLink[], any>({
                path: `/social_networks/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksCreate
         * @request POST:/social_networks/
         * @secure
         */
        socialNetworksCreate: (data: SocialNetworkLink, params: RequestParams = {}) =>
            this.request<SocialNetworkLink, any>({
                path: `/social_networks/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksRead
         * @request GET:/social_networks/{id}/
         * @secure
         */
        socialNetworksRead: (id: number, params: RequestParams = {}) =>
            this.request<SocialNetworkLink, any>({
                path: `/social_networks/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksUpdate
         * @request PUT:/social_networks/{id}/
         * @secure
         */
        socialNetworksUpdate: (id: number, data: SocialNetworkLink, params: RequestParams = {}) =>
            this.request<SocialNetworkLink, any>({
                path: `/social_networks/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksPartialUpdate
         * @request PATCH:/social_networks/{id}/
         * @secure
         */
        socialNetworksPartialUpdate: (id: number, data: SocialNetworkLink, params: RequestParams = {}) =>
            this.request<SocialNetworkLink, any>({
                path: `/social_networks/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags social_networks
         * @name SocialNetworksDelete
         * @request DELETE:/social_networks/{id}/
         * @secure
         */
        socialNetworksDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/social_networks/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    songAlbum = {
        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumList
         * @request GET:/song-album/
         * @secure
         */
        songAlbumList: (
            query?: {
                musicband__slug?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Album[], any>({
                path: `/song-album/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumCreate
         * @request POST:/song-album/
         * @secure
         */
        songAlbumCreate: (data: Album, params: RequestParams = {}) =>
            this.request<Album, any>({
                path: `/song-album/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumRead
         * @request GET:/song-album/{slug}/
         * @secure
         */
        songAlbumRead: (slug: string, params: RequestParams = {}) =>
            this.request<AlbumSerializerDetail, any>({
                path: `/song-album/${slug}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumUpdate
         * @request PUT:/song-album/{slug}/
         * @secure
         */
        songAlbumUpdate: (slug: string, data: Album, params: RequestParams = {}) =>
            this.request<Album, any>({
                path: `/song-album/${slug}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumPartialUpdate
         * @request PATCH:/song-album/{slug}/
         * @secure
         */
        songAlbumPartialUpdate: (slug: string, data: Album, params: RequestParams = {}) =>
            this.request<Album, any>({
                path: `/song-album/${slug}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song-album
         * @name SongAlbumDelete
         * @request DELETE:/song-album/{slug}/
         * @secure
         */
        songAlbumDelete: (slug: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/song-album/${slug}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    song = {
        /**
         * No description
         *
         * @tags song
         * @name SongList
         * @request GET:/song/
         * @secure
         */
        songList: (
            query?: {
                musicband__slug?: string;
                single?: string;
                likes__user?: string;
                album__slug?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<Songs[], any>({
                path: `/song/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song
         * @name SongCreate
         * @request POST:/song/
         * @secure
         */
        songCreate: (data: Songs, params: RequestParams = {}) =>
            this.request<Songs, any>({
                path: `/song/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song
         * @name SongRead
         * @request GET:/song/{song_name}/
         * @secure
         */
        songRead: (songName: string, params: RequestParams = {}) =>
            this.request<Songs, any>({
                path: `/song/${songName}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song
         * @name SongUpdate
         * @request PUT:/song/{song_name}/
         * @secure
         */
        songUpdate: (songName: string, data: Songs, params: RequestParams = {}) =>
            this.request<Songs, any>({
                path: `/song/${songName}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song
         * @name SongPartialUpdate
         * @request PATCH:/song/{song_name}/
         * @secure
         */
        songPartialUpdate: (songName: string, data: Songs, params: RequestParams = {}) =>
            this.request<Songs, any>({
                path: `/song/${songName}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song
         * @name SongDelete
         * @request DELETE:/song/{song_name}/
         * @secure
         */
        songDelete: (songName: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/song/${songName}/`,
                method: 'DELETE',
                secure: true,
                ...params
            })
    };
    songLike = {
        /**
         * No description
         *
         * @tags song_like
         * @name SongLikeList
         * @request GET:/song_like/
         * @secure
         */
        songLikeList: (
            query?: {
                likes__user?: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<SongLiked[], any>({
                path: `/song_like/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song_like
         * @name SongLikeCreate
         * @request POST:/song_like/
         * @secure
         */
        songLikeCreate: (data: SongLiked, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song_like
         * @name SongLikeRead
         * @request GET:/song_like/{id}/
         * @secure
         */
        songLikeRead: (id: number, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song_like
         * @name SongLikeUpdate
         * @request PUT:/song_like/{id}/
         * @secure
         */
        songLikeUpdate: (id: number, data: SongLiked, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/`,
                method: 'PUT',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song_like
         * @name SongLikePartialUpdate
         * @request PATCH:/song_like/{id}/
         * @secure
         */
        songLikePartialUpdate: (id: number, data: SongLiked, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/`,
                method: 'PATCH',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags song_like
         * @name SongLikeDelete
         * @request DELETE:/song_like/{id}/
         * @secure
         */
        songLikeDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/song_like/${id}/`,
                method: 'DELETE',
                secure: true,
                ...params
            }),

        /**
         * @description Get the users which liked a model instance.
         *
         * @tags song_like
         * @name SongLikeFans
         * @request GET:/song_like/{id}/fans/
         * @secure
         */
        songLikeFans: (id: number, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/fans/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * @description Like a model instance.
         *
         * @tags song_like
         * @name SongLikeLike
         * @request POST:/song_like/{id}/like/
         * @secure
         */
        songLikeLike: (id: number, data: SongLiked, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/like/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            }),

        /**
         * @description Unlike a model instance.
         *
         * @tags song_like
         * @name SongLikeUnlike
         * @request POST:/song_like/{id}/unlike/
         * @secure
         */
        songLikeUnlike: (id: number, data: SongLiked, params: RequestParams = {}) =>
            this.request<SongLiked, any>({
                path: `/song_like/${id}/unlike/`,
                method: 'POST',
                body: data,
                secure: true,
                format: 'json',
                ...params
            })
    };
}
