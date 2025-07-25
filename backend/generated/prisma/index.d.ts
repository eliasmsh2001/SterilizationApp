
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model appointment
 * 
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>
/**
 * Model archivedappointment
 * 
 */
export type archivedappointment = $Result.DefaultSelection<Prisma.$archivedappointmentPayload>
/**
 * Model area
 * 
 */
export type area = $Result.DefaultSelection<Prisma.$areaPayload>
/**
 * Model clinic
 * 
 */
export type clinic = $Result.DefaultSelection<Prisma.$clinicPayload>
/**
 * Model doctor
 * 
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.appointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivedappointment`: Exposes CRUD operations for the **archivedappointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivedappointments
    * const archivedappointments = await prisma.archivedappointment.findMany()
    * ```
    */
  get archivedappointment(): Prisma.archivedappointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.areaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.clinicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.doctorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    appointment: 'appointment',
    archivedappointment: 'archivedappointment',
    area: 'area',
    clinic: 'clinic',
    doctor: 'doctor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "appointment" | "archivedappointment" | "area" | "clinic" | "doctor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>
        fields: Prisma.appointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      archivedappointment: {
        payload: Prisma.$archivedappointmentPayload<ExtArgs>
        fields: Prisma.archivedappointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archivedappointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archivedappointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          findFirst: {
            args: Prisma.archivedappointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archivedappointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          findMany: {
            args: Prisma.archivedappointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>[]
          }
          create: {
            args: Prisma.archivedappointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          createMany: {
            args: Prisma.archivedappointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.archivedappointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          update: {
            args: Prisma.archivedappointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          deleteMany: {
            args: Prisma.archivedappointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archivedappointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.archivedappointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivedappointmentPayload>
          }
          aggregate: {
            args: Prisma.ArchivedappointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivedappointment>
          }
          groupBy: {
            args: Prisma.archivedappointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivedappointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.archivedappointmentCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivedappointmentCountAggregateOutputType> | number
          }
        }
      }
      area: {
        payload: Prisma.$areaPayload<ExtArgs>
        fields: Prisma.areaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.areaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.areaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          findFirst: {
            args: Prisma.areaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.areaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          findMany: {
            args: Prisma.areaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>[]
          }
          create: {
            args: Prisma.areaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          createMany: {
            args: Prisma.areaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.areaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          update: {
            args: Prisma.areaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          deleteMany: {
            args: Prisma.areaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.areaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.areaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.areaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.areaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      clinic: {
        payload: Prisma.$clinicPayload<ExtArgs>
        fields: Prisma.clinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          findFirst: {
            args: Prisma.clinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          findMany: {
            args: Prisma.clinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>[]
          }
          create: {
            args: Prisma.clinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          createMany: {
            args: Prisma.clinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          update: {
            args: Prisma.clinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          deleteMany: {
            args: Prisma.clinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.clinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.clinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
          }
        }
      }
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>
        fields: Prisma.doctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    appointment?: appointmentOmit
    archivedappointment?: archivedappointmentOmit
    area?: areaOmit
    clinic?: clinicOmit
    doctor?: doctorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    archivedAppointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    archivedAppointments?: boolean | UserCountOutputTypeCountArchivedAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArchivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivedappointmentWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    appointments: number
    archivedAppointments: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | AreaCountOutputTypeCountAppointmentsArgs
    archivedAppointments?: boolean | AreaCountOutputTypeCountArchivedAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountArchivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivedappointmentWhereInput
  }


  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    doctor: number
    appointments: number
    archivedAppointments: number
  }

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | ClinicCountOutputTypeCountDoctorArgs
    appointments?: boolean | ClinicCountOutputTypeCountAppointmentsArgs
    archivedAppointments?: boolean | ClinicCountOutputTypeCountArchivedAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountArchivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivedappointmentWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    archivedAppointments: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivedAppointments?: boolean | DoctorCountOutputTypeCountArchivedAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountArchivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivedappointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    usersecret: number
    authority: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    usersecret: string | null
    authority: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
    appointments?: boolean | user$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | user$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "usersecret" | "authority", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | user$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | user$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      appointments: Prisma.$appointmentPayload<ExtArgs>[]
      archivedAppointments: Prisma.$archivedappointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      usersecret: string | null
      authority: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends user$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, user$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archivedAppointments<T extends user$archivedAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, user$archivedAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly usersecret: FieldRef<"user", 'String'>
    readonly authority: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data?: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.appointments
   */
  export type user$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * user.archivedAppointments
   */
  export type user$archivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    where?: archivedappointmentWhereInput
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    cursor?: archivedappointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    appointmentNum: number | null
    age: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    appointmentNum: number | null
    age: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    userId: string | null
    areaId: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    userId: string | null
    areaId: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    appointmentNum: number
    name: number
    phoneNumber: number
    address: number
    age: number
    gender: number
    doctorName: number
    clinicName: number
    date: number
    time: number
    day: number
    period: number
    clinicId: number
    userId: number
    areaId: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    appointmentNum?: true
    age?: true
  }

  export type AppointmentSumAggregateInputType = {
    appointmentNum?: true
    age?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    userId?: true
    areaId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    userId?: true
    areaId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    userId?: true
    areaId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: appointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    userId: string | null
    areaId: string | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentNum?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    age?: boolean
    gender?: boolean
    doctorName?: boolean
    clinicName?: boolean
    date?: boolean
    time?: boolean
    day?: boolean
    period?: boolean
    clinicId?: boolean
    userId?: boolean
    areaId?: boolean
    clinic?: boolean | appointment$clinicArgs<ExtArgs>
    area?: boolean | appointment$areaArgs<ExtArgs>
    user?: boolean | appointment$userArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>



  export type appointmentSelectScalar = {
    id?: boolean
    appointmentNum?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    age?: boolean
    gender?: boolean
    doctorName?: boolean
    clinicName?: boolean
    date?: boolean
    time?: boolean
    day?: boolean
    period?: boolean
    clinicId?: boolean
    userId?: boolean
    areaId?: boolean
  }

  export type appointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentNum" | "name" | "phoneNumber" | "address" | "age" | "gender" | "doctorName" | "clinicName" | "date" | "time" | "day" | "period" | "clinicId" | "userId" | "areaId", ExtArgs["result"]["appointment"]>
  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | appointment$clinicArgs<ExtArgs>
    area?: boolean | appointment$areaArgs<ExtArgs>
    user?: boolean | appointment$userArgs<ExtArgs>
  }

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointment"
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs> | null
      area: Prisma.$areaPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentNum: number | null
      name: string | null
      phoneNumber: string | null
      address: string | null
      age: number | null
      gender: string | null
      doctorName: string | null
      clinicName: string | null
      date: string | null
      time: string | null
      day: string | null
      period: string | null
      clinicId: string | null
      userId: string | null
      areaId: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<Prisma.$appointmentPayload, S>

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment'], meta: { name: 'appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentFindUniqueArgs>(args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentFindFirstArgs>(args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appointmentFindManyArgs>(args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends appointmentCreateArgs>(args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentCreateManyArgs>(args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends appointmentDeleteArgs>(args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentUpdateArgs>(args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentDeleteManyArgs>(args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentUpdateManyArgs>(args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends appointmentUpsertArgs>(args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointment model
   */
  readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends appointment$clinicArgs<ExtArgs> = {}>(args?: Subset<T, appointment$clinicArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    area<T extends appointment$areaArgs<ExtArgs> = {}>(args?: Subset<T, appointment$areaArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends appointment$userArgs<ExtArgs> = {}>(args?: Subset<T, appointment$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<"appointment", 'String'>
    readonly appointmentNum: FieldRef<"appointment", 'Int'>
    readonly name: FieldRef<"appointment", 'String'>
    readonly phoneNumber: FieldRef<"appointment", 'String'>
    readonly address: FieldRef<"appointment", 'String'>
    readonly age: FieldRef<"appointment", 'Int'>
    readonly gender: FieldRef<"appointment", 'String'>
    readonly doctorName: FieldRef<"appointment", 'String'>
    readonly clinicName: FieldRef<"appointment", 'String'>
    readonly date: FieldRef<"appointment", 'String'>
    readonly time: FieldRef<"appointment", 'String'>
    readonly day: FieldRef<"appointment", 'String'>
    readonly period: FieldRef<"appointment", 'String'>
    readonly clinicId: FieldRef<"appointment", 'String'>
    readonly userId: FieldRef<"appointment", 'String'>
    readonly areaId: FieldRef<"appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a appointment.
     */
    data?: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
  }

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
  }

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointment.clinic
   */
  export type appointment$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    where?: clinicWhereInput
  }

  /**
   * appointment.area
   */
  export type appointment$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    where?: areaWhereInput
  }

  /**
   * appointment.user
   */
  export type appointment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
  }


  /**
   * Model archivedappointment
   */

  export type AggregateArchivedappointment = {
    _count: ArchivedappointmentCountAggregateOutputType | null
    _avg: ArchivedappointmentAvgAggregateOutputType | null
    _sum: ArchivedappointmentSumAggregateOutputType | null
    _min: ArchivedappointmentMinAggregateOutputType | null
    _max: ArchivedappointmentMaxAggregateOutputType | null
  }

  export type ArchivedappointmentAvgAggregateOutputType = {
    appointmentNum: number | null
    age: number | null
  }

  export type ArchivedappointmentSumAggregateOutputType = {
    appointmentNum: number | null
    age: number | null
  }

  export type ArchivedappointmentMinAggregateOutputType = {
    id: string | null
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    areaId: string | null
    userId: string | null
    doctorId: string | null
  }

  export type ArchivedappointmentMaxAggregateOutputType = {
    id: string | null
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    areaId: string | null
    userId: string | null
    doctorId: string | null
  }

  export type ArchivedappointmentCountAggregateOutputType = {
    id: number
    appointmentNum: number
    name: number
    phoneNumber: number
    address: number
    age: number
    gender: number
    doctorName: number
    clinicName: number
    date: number
    time: number
    day: number
    period: number
    clinicId: number
    areaId: number
    userId: number
    doctorId: number
    _all: number
  }


  export type ArchivedappointmentAvgAggregateInputType = {
    appointmentNum?: true
    age?: true
  }

  export type ArchivedappointmentSumAggregateInputType = {
    appointmentNum?: true
    age?: true
  }

  export type ArchivedappointmentMinAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    areaId?: true
    userId?: true
    doctorId?: true
  }

  export type ArchivedappointmentMaxAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    areaId?: true
    userId?: true
    doctorId?: true
  }

  export type ArchivedappointmentCountAggregateInputType = {
    id?: true
    appointmentNum?: true
    name?: true
    phoneNumber?: true
    address?: true
    age?: true
    gender?: true
    doctorName?: true
    clinicName?: true
    date?: true
    time?: true
    day?: true
    period?: true
    clinicId?: true
    areaId?: true
    userId?: true
    doctorId?: true
    _all?: true
  }

  export type ArchivedappointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivedappointment to aggregate.
     */
    where?: archivedappointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivedappointments to fetch.
     */
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archivedappointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivedappointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivedappointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archivedappointments
    **/
    _count?: true | ArchivedappointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivedappointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivedappointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivedappointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivedappointmentMaxAggregateInputType
  }

  export type GetArchivedappointmentAggregateType<T extends ArchivedappointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivedappointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivedappointment[P]>
      : GetScalarType<T[P], AggregateArchivedappointment[P]>
  }




  export type archivedappointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivedappointmentWhereInput
    orderBy?: archivedappointmentOrderByWithAggregationInput | archivedappointmentOrderByWithAggregationInput[]
    by: ArchivedappointmentScalarFieldEnum[] | ArchivedappointmentScalarFieldEnum
    having?: archivedappointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivedappointmentCountAggregateInputType | true
    _avg?: ArchivedappointmentAvgAggregateInputType
    _sum?: ArchivedappointmentSumAggregateInputType
    _min?: ArchivedappointmentMinAggregateInputType
    _max?: ArchivedappointmentMaxAggregateInputType
  }

  export type ArchivedappointmentGroupByOutputType = {
    id: string
    appointmentNum: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    age: number | null
    gender: string | null
    doctorName: string | null
    clinicName: string | null
    date: string | null
    time: string | null
    day: string | null
    period: string | null
    clinicId: string | null
    areaId: string | null
    userId: string | null
    doctorId: string | null
    _count: ArchivedappointmentCountAggregateOutputType | null
    _avg: ArchivedappointmentAvgAggregateOutputType | null
    _sum: ArchivedappointmentSumAggregateOutputType | null
    _min: ArchivedappointmentMinAggregateOutputType | null
    _max: ArchivedappointmentMaxAggregateOutputType | null
  }

  type GetArchivedappointmentGroupByPayload<T extends archivedappointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivedappointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivedappointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivedappointmentGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivedappointmentGroupByOutputType[P]>
        }
      >
    >


  export type archivedappointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentNum?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    age?: boolean
    gender?: boolean
    doctorName?: boolean
    clinicName?: boolean
    date?: boolean
    time?: boolean
    day?: boolean
    period?: boolean
    clinicId?: boolean
    areaId?: boolean
    userId?: boolean
    doctorId?: boolean
    clinic?: boolean | archivedappointment$clinicArgs<ExtArgs>
    area?: boolean | archivedappointment$areaArgs<ExtArgs>
    user?: boolean | archivedappointment$userArgs<ExtArgs>
    doctor?: boolean | archivedappointment$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["archivedappointment"]>



  export type archivedappointmentSelectScalar = {
    id?: boolean
    appointmentNum?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    age?: boolean
    gender?: boolean
    doctorName?: boolean
    clinicName?: boolean
    date?: boolean
    time?: boolean
    day?: boolean
    period?: boolean
    clinicId?: boolean
    areaId?: boolean
    userId?: boolean
    doctorId?: boolean
  }

  export type archivedappointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentNum" | "name" | "phoneNumber" | "address" | "age" | "gender" | "doctorName" | "clinicName" | "date" | "time" | "day" | "period" | "clinicId" | "areaId" | "userId" | "doctorId", ExtArgs["result"]["archivedappointment"]>
  export type archivedappointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | archivedappointment$clinicArgs<ExtArgs>
    area?: boolean | archivedappointment$areaArgs<ExtArgs>
    user?: boolean | archivedappointment$userArgs<ExtArgs>
    doctor?: boolean | archivedappointment$doctorArgs<ExtArgs>
  }

  export type $archivedappointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archivedappointment"
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs> | null
      area: Prisma.$areaPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
      doctor: Prisma.$doctorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentNum: number | null
      name: string | null
      phoneNumber: string | null
      address: string | null
      age: number | null
      gender: string | null
      doctorName: string | null
      clinicName: string | null
      date: string | null
      time: string | null
      day: string | null
      period: string | null
      clinicId: string | null
      areaId: string | null
      userId: string | null
      doctorId: string | null
    }, ExtArgs["result"]["archivedappointment"]>
    composites: {}
  }

  type archivedappointmentGetPayload<S extends boolean | null | undefined | archivedappointmentDefaultArgs> = $Result.GetResult<Prisma.$archivedappointmentPayload, S>

  type archivedappointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archivedappointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivedappointmentCountAggregateInputType | true
    }

  export interface archivedappointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archivedappointment'], meta: { name: 'archivedappointment' } }
    /**
     * Find zero or one Archivedappointment that matches the filter.
     * @param {archivedappointmentFindUniqueArgs} args - Arguments to find a Archivedappointment
     * @example
     * // Get one Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archivedappointmentFindUniqueArgs>(args: SelectSubset<T, archivedappointmentFindUniqueArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivedappointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archivedappointmentFindUniqueOrThrowArgs} args - Arguments to find a Archivedappointment
     * @example
     * // Get one Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archivedappointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, archivedappointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivedappointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentFindFirstArgs} args - Arguments to find a Archivedappointment
     * @example
     * // Get one Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archivedappointmentFindFirstArgs>(args?: SelectSubset<T, archivedappointmentFindFirstArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivedappointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentFindFirstOrThrowArgs} args - Arguments to find a Archivedappointment
     * @example
     * // Get one Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archivedappointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, archivedappointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivedappointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivedappointments
     * const archivedappointments = await prisma.archivedappointment.findMany()
     * 
     * // Get first 10 Archivedappointments
     * const archivedappointments = await prisma.archivedappointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivedappointmentWithIdOnly = await prisma.archivedappointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends archivedappointmentFindManyArgs>(args?: SelectSubset<T, archivedappointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivedappointment.
     * @param {archivedappointmentCreateArgs} args - Arguments to create a Archivedappointment.
     * @example
     * // Create one Archivedappointment
     * const Archivedappointment = await prisma.archivedappointment.create({
     *   data: {
     *     // ... data to create a Archivedappointment
     *   }
     * })
     * 
     */
    create<T extends archivedappointmentCreateArgs>(args: SelectSubset<T, archivedappointmentCreateArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivedappointments.
     * @param {archivedappointmentCreateManyArgs} args - Arguments to create many Archivedappointments.
     * @example
     * // Create many Archivedappointments
     * const archivedappointment = await prisma.archivedappointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archivedappointmentCreateManyArgs>(args?: SelectSubset<T, archivedappointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archivedappointment.
     * @param {archivedappointmentDeleteArgs} args - Arguments to delete one Archivedappointment.
     * @example
     * // Delete one Archivedappointment
     * const Archivedappointment = await prisma.archivedappointment.delete({
     *   where: {
     *     // ... filter to delete one Archivedappointment
     *   }
     * })
     * 
     */
    delete<T extends archivedappointmentDeleteArgs>(args: SelectSubset<T, archivedappointmentDeleteArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivedappointment.
     * @param {archivedappointmentUpdateArgs} args - Arguments to update one Archivedappointment.
     * @example
     * // Update one Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archivedappointmentUpdateArgs>(args: SelectSubset<T, archivedappointmentUpdateArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivedappointments.
     * @param {archivedappointmentDeleteManyArgs} args - Arguments to filter Archivedappointments to delete.
     * @example
     * // Delete a few Archivedappointments
     * const { count } = await prisma.archivedappointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archivedappointmentDeleteManyArgs>(args?: SelectSubset<T, archivedappointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivedappointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivedappointments
     * const archivedappointment = await prisma.archivedappointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archivedappointmentUpdateManyArgs>(args: SelectSubset<T, archivedappointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archivedappointment.
     * @param {archivedappointmentUpsertArgs} args - Arguments to update or create a Archivedappointment.
     * @example
     * // Update or create a Archivedappointment
     * const archivedappointment = await prisma.archivedappointment.upsert({
     *   create: {
     *     // ... data to create a Archivedappointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivedappointment we want to update
     *   }
     * })
     */
    upsert<T extends archivedappointmentUpsertArgs>(args: SelectSubset<T, archivedappointmentUpsertArgs<ExtArgs>>): Prisma__archivedappointmentClient<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivedappointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentCountArgs} args - Arguments to filter Archivedappointments to count.
     * @example
     * // Count the number of Archivedappointments
     * const count = await prisma.archivedappointment.count({
     *   where: {
     *     // ... the filter for the Archivedappointments we want to count
     *   }
     * })
    **/
    count<T extends archivedappointmentCountArgs>(
      args?: Subset<T, archivedappointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivedappointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivedappointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedappointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchivedappointmentAggregateArgs>(args: Subset<T, ArchivedappointmentAggregateArgs>): Prisma.PrismaPromise<GetArchivedappointmentAggregateType<T>>

    /**
     * Group by Archivedappointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivedappointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends archivedappointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archivedappointmentGroupByArgs['orderBy'] }
        : { orderBy?: archivedappointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, archivedappointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivedappointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archivedappointment model
   */
  readonly fields: archivedappointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archivedappointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archivedappointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends archivedappointment$clinicArgs<ExtArgs> = {}>(args?: Subset<T, archivedappointment$clinicArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    area<T extends archivedappointment$areaArgs<ExtArgs> = {}>(args?: Subset<T, archivedappointment$areaArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends archivedappointment$userArgs<ExtArgs> = {}>(args?: Subset<T, archivedappointment$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends archivedappointment$doctorArgs<ExtArgs> = {}>(args?: Subset<T, archivedappointment$doctorArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the archivedappointment model
   */
  interface archivedappointmentFieldRefs {
    readonly id: FieldRef<"archivedappointment", 'String'>
    readonly appointmentNum: FieldRef<"archivedappointment", 'Int'>
    readonly name: FieldRef<"archivedappointment", 'String'>
    readonly phoneNumber: FieldRef<"archivedappointment", 'String'>
    readonly address: FieldRef<"archivedappointment", 'String'>
    readonly age: FieldRef<"archivedappointment", 'Int'>
    readonly gender: FieldRef<"archivedappointment", 'String'>
    readonly doctorName: FieldRef<"archivedappointment", 'String'>
    readonly clinicName: FieldRef<"archivedappointment", 'String'>
    readonly date: FieldRef<"archivedappointment", 'String'>
    readonly time: FieldRef<"archivedappointment", 'String'>
    readonly day: FieldRef<"archivedappointment", 'String'>
    readonly period: FieldRef<"archivedappointment", 'String'>
    readonly clinicId: FieldRef<"archivedappointment", 'String'>
    readonly areaId: FieldRef<"archivedappointment", 'String'>
    readonly userId: FieldRef<"archivedappointment", 'String'>
    readonly doctorId: FieldRef<"archivedappointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * archivedappointment findUnique
   */
  export type archivedappointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter, which archivedappointment to fetch.
     */
    where: archivedappointmentWhereUniqueInput
  }

  /**
   * archivedappointment findUniqueOrThrow
   */
  export type archivedappointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter, which archivedappointment to fetch.
     */
    where: archivedappointmentWhereUniqueInput
  }

  /**
   * archivedappointment findFirst
   */
  export type archivedappointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter, which archivedappointment to fetch.
     */
    where?: archivedappointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivedappointments to fetch.
     */
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivedappointments.
     */
    cursor?: archivedappointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivedappointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivedappointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivedappointments.
     */
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * archivedappointment findFirstOrThrow
   */
  export type archivedappointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter, which archivedappointment to fetch.
     */
    where?: archivedappointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivedappointments to fetch.
     */
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivedappointments.
     */
    cursor?: archivedappointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivedappointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivedappointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivedappointments.
     */
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * archivedappointment findMany
   */
  export type archivedappointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter, which archivedappointments to fetch.
     */
    where?: archivedappointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivedappointments to fetch.
     */
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archivedappointments.
     */
    cursor?: archivedappointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivedappointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivedappointments.
     */
    skip?: number
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * archivedappointment create
   */
  export type archivedappointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a archivedappointment.
     */
    data?: XOR<archivedappointmentCreateInput, archivedappointmentUncheckedCreateInput>
  }

  /**
   * archivedappointment createMany
   */
  export type archivedappointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archivedappointments.
     */
    data: archivedappointmentCreateManyInput | archivedappointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archivedappointment update
   */
  export type archivedappointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a archivedappointment.
     */
    data: XOR<archivedappointmentUpdateInput, archivedappointmentUncheckedUpdateInput>
    /**
     * Choose, which archivedappointment to update.
     */
    where: archivedappointmentWhereUniqueInput
  }

  /**
   * archivedappointment updateMany
   */
  export type archivedappointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archivedappointments.
     */
    data: XOR<archivedappointmentUpdateManyMutationInput, archivedappointmentUncheckedUpdateManyInput>
    /**
     * Filter which archivedappointments to update
     */
    where?: archivedappointmentWhereInput
    /**
     * Limit how many archivedappointments to update.
     */
    limit?: number
  }

  /**
   * archivedappointment upsert
   */
  export type archivedappointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the archivedappointment to update in case it exists.
     */
    where: archivedappointmentWhereUniqueInput
    /**
     * In case the archivedappointment found by the `where` argument doesn't exist, create a new archivedappointment with this data.
     */
    create: XOR<archivedappointmentCreateInput, archivedappointmentUncheckedCreateInput>
    /**
     * In case the archivedappointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archivedappointmentUpdateInput, archivedappointmentUncheckedUpdateInput>
  }

  /**
   * archivedappointment delete
   */
  export type archivedappointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    /**
     * Filter which archivedappointment to delete.
     */
    where: archivedappointmentWhereUniqueInput
  }

  /**
   * archivedappointment deleteMany
   */
  export type archivedappointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivedappointments to delete
     */
    where?: archivedappointmentWhereInput
    /**
     * Limit how many archivedappointments to delete.
     */
    limit?: number
  }

  /**
   * archivedappointment.clinic
   */
  export type archivedappointment$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    where?: clinicWhereInput
  }

  /**
   * archivedappointment.area
   */
  export type archivedappointment$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    where?: areaWhereInput
  }

  /**
   * archivedappointment.user
   */
  export type archivedappointment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * archivedappointment.doctor
   */
  export type archivedappointment$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
  }

  /**
   * archivedappointment without action
   */
  export type archivedappointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
  }


  /**
   * Model area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which area to aggregate.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type areaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areaWhereInput
    orderBy?: areaOrderByWithAggregationInput | areaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: areaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends areaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type areaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    appointments?: boolean | area$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | area$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type areaSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type areaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["area"]>
  export type areaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | area$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | area$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $areaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "area"
    objects: {
      appointments: Prisma.$appointmentPayload<ExtArgs>[]
      archivedAppointments: Prisma.$archivedappointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type areaGetPayload<S extends boolean | null | undefined | areaDefaultArgs> = $Result.GetResult<Prisma.$areaPayload, S>

  type areaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<areaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface areaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['area'], meta: { name: 'area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {areaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends areaFindUniqueArgs>(args: SelectSubset<T, areaFindUniqueArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {areaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends areaFindUniqueOrThrowArgs>(args: SelectSubset<T, areaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends areaFindFirstArgs>(args?: SelectSubset<T, areaFindFirstArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends areaFindFirstOrThrowArgs>(args?: SelectSubset<T, areaFindFirstOrThrowArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends areaFindManyArgs>(args?: SelectSubset<T, areaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {areaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends areaCreateArgs>(args: SelectSubset<T, areaCreateArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {areaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends areaCreateManyArgs>(args?: SelectSubset<T, areaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {areaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends areaDeleteArgs>(args: SelectSubset<T, areaDeleteArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {areaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends areaUpdateArgs>(args: SelectSubset<T, areaUpdateArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {areaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends areaDeleteManyArgs>(args?: SelectSubset<T, areaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends areaUpdateManyArgs>(args: SelectSubset<T, areaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {areaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends areaUpsertArgs>(args: SelectSubset<T, areaUpsertArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends areaCountArgs>(
      args?: Subset<T, areaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends areaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: areaGroupByArgs['orderBy'] }
        : { orderBy?: areaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, areaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the area model
   */
  readonly fields: areaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__areaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends area$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, area$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archivedAppointments<T extends area$archivedAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, area$archivedAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the area model
   */
  interface areaFieldRefs {
    readonly id: FieldRef<"area", 'String'>
    readonly name: FieldRef<"area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * area findUnique
   */
  export type areaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area findUniqueOrThrow
   */
  export type areaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area findFirst
   */
  export type areaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area findFirstOrThrow
   */
  export type areaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area findMany
   */
  export type areaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area create
   */
  export type areaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The data needed to create a area.
     */
    data: XOR<areaCreateInput, areaUncheckedCreateInput>
  }

  /**
   * area createMany
   */
  export type areaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many areas.
     */
    data: areaCreateManyInput | areaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * area update
   */
  export type areaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The data needed to update a area.
     */
    data: XOR<areaUpdateInput, areaUncheckedUpdateInput>
    /**
     * Choose, which area to update.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area updateMany
   */
  export type areaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update areas.
     */
    data: XOR<areaUpdateManyMutationInput, areaUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areaWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
  }

  /**
   * area upsert
   */
  export type areaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The filter to search for the area to update in case it exists.
     */
    where: areaWhereUniqueInput
    /**
     * In case the area found by the `where` argument doesn't exist, create a new area with this data.
     */
    create: XOR<areaCreateInput, areaUncheckedCreateInput>
    /**
     * In case the area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<areaUpdateInput, areaUncheckedUpdateInput>
  }

  /**
   * area delete
   */
  export type areaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter which area to delete.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area deleteMany
   */
  export type areaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to delete
     */
    where?: areaWhereInput
    /**
     * Limit how many areas to delete.
     */
    limit?: number
  }

  /**
   * area.appointments
   */
  export type area$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * area.archivedAppointments
   */
  export type area$archivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    where?: archivedappointmentWhereInput
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    cursor?: archivedappointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * area without action
   */
  export type areaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
  }


  /**
   * Model clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicAvgAggregateOutputType = {
    numberLimit: number | null
  }

  export type ClinicSumAggregateOutputType = {
    numberLimit: number | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    name: string | null
    numberLimit: number | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    numberLimit: number | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    name: number
    numberLimit: number
    _all: number
  }


  export type ClinicAvgAggregateInputType = {
    numberLimit?: true
  }

  export type ClinicSumAggregateInputType = {
    numberLimit?: true
  }

  export type ClinicMinAggregateInputType = {
    id?: true
    name?: true
    numberLimit?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    name?: true
    numberLimit?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    name?: true
    numberLimit?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic to aggregate.
     */
    where?: clinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type clinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput
    orderBy?: clinicOrderByWithAggregationInput | clinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: clinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _avg?: ClinicAvgAggregateInputType
    _sum?: ClinicSumAggregateInputType
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: string
    name: string
    numberLimit: number | null
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends clinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type clinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    numberLimit?: boolean
    doctor?: boolean | clinic$doctorArgs<ExtArgs>
    appointments?: boolean | clinic$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | clinic$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>



  export type clinicSelectScalar = {
    id?: boolean
    name?: boolean
    numberLimit?: boolean
  }

  export type clinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "numberLimit", ExtArgs["result"]["clinic"]>
  export type clinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | clinic$doctorArgs<ExtArgs>
    appointments?: boolean | clinic$appointmentsArgs<ExtArgs>
    archivedAppointments?: boolean | clinic$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clinic"
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>[]
      appointments: Prisma.$appointmentPayload<ExtArgs>[]
      archivedAppointments: Prisma.$archivedappointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      numberLimit: number | null
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type clinicGetPayload<S extends boolean | null | undefined | clinicDefaultArgs> = $Result.GetResult<Prisma.$clinicPayload, S>

  type clinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface clinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic'], meta: { name: 'clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {clinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clinicFindUniqueArgs>(args: SelectSubset<T, clinicFindUniqueArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clinicFindUniqueOrThrowArgs>(args: SelectSubset<T, clinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clinicFindFirstArgs>(args?: SelectSubset<T, clinicFindFirstArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clinicFindFirstOrThrowArgs>(args?: SelectSubset<T, clinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clinicFindManyArgs>(args?: SelectSubset<T, clinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinic.
     * @param {clinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends clinicCreateArgs>(args: SelectSubset<T, clinicCreateArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinics.
     * @param {clinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clinicCreateManyArgs>(args?: SelectSubset<T, clinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clinic.
     * @param {clinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends clinicDeleteArgs>(args: SelectSubset<T, clinicDeleteArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinic.
     * @param {clinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clinicUpdateArgs>(args: SelectSubset<T, clinicUpdateArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinics.
     * @param {clinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clinicDeleteManyArgs>(args?: SelectSubset<T, clinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clinicUpdateManyArgs>(args: SelectSubset<T, clinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clinic.
     * @param {clinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends clinicUpsertArgs>(args: SelectSubset<T, clinicUpsertArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends clinicCountArgs>(
      args?: Subset<T, clinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicGroupByArgs['orderBy'] }
        : { orderBy?: clinicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clinic model
   */
  readonly fields: clinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends clinic$doctorArgs<ExtArgs> = {}>(args?: Subset<T, clinic$doctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends clinic$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, clinic$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archivedAppointments<T extends clinic$archivedAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, clinic$archivedAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clinic model
   */
  interface clinicFieldRefs {
    readonly id: FieldRef<"clinic", 'String'>
    readonly name: FieldRef<"clinic", 'String'>
    readonly numberLimit: FieldRef<"clinic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * clinic findUnique
   */
  export type clinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput
  }

  /**
   * clinic findUniqueOrThrow
   */
  export type clinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput
  }

  /**
   * clinic findFirst
   */
  export type clinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * clinic findFirstOrThrow
   */
  export type clinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * clinic findMany
   */
  export type clinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter, which clinics to fetch.
     */
    where?: clinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clinics.
     */
    cursor?: clinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * clinic create
   */
  export type clinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * The data needed to create a clinic.
     */
    data: XOR<clinicCreateInput, clinicUncheckedCreateInput>
  }

  /**
   * clinic createMany
   */
  export type clinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinics.
     */
    data: clinicCreateManyInput | clinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clinic update
   */
  export type clinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * The data needed to update a clinic.
     */
    data: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>
    /**
     * Choose, which clinic to update.
     */
    where: clinicWhereUniqueInput
  }

  /**
   * clinic updateMany
   */
  export type clinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinics.
     */
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyInput>
    /**
     * Filter which clinics to update
     */
    where?: clinicWhereInput
    /**
     * Limit how many clinics to update.
     */
    limit?: number
  }

  /**
   * clinic upsert
   */
  export type clinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * The filter to search for the clinic to update in case it exists.
     */
    where: clinicWhereUniqueInput
    /**
     * In case the clinic found by the `where` argument doesn't exist, create a new clinic with this data.
     */
    create: XOR<clinicCreateInput, clinicUncheckedCreateInput>
    /**
     * In case the clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>
  }

  /**
   * clinic delete
   */
  export type clinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    /**
     * Filter which clinic to delete.
     */
    where: clinicWhereUniqueInput
  }

  /**
   * clinic deleteMany
   */
  export type clinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinics to delete
     */
    where?: clinicWhereInput
    /**
     * Limit how many clinics to delete.
     */
    limit?: number
  }

  /**
   * clinic.doctor
   */
  export type clinic$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    cursor?: doctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * clinic.appointments
   */
  export type clinic$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * clinic.archivedAppointments
   */
  export type clinic$archivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    where?: archivedappointmentWhereInput
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    cursor?: archivedappointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * clinic without action
   */
  export type clinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
  }


  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
    clinicId: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    clinicId: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    clinicId: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    clinicId?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    clinicId?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    clinicId?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: doctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    name: string | null
    clinicId: string | null
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clinicId?: boolean
    clinic?: boolean | doctor$clinicArgs<ExtArgs>
    archivedAppointments?: boolean | doctor$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>



  export type doctorSelectScalar = {
    id?: boolean
    name?: boolean
    clinicId?: boolean
  }

  export type doctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "clinicId", ExtArgs["result"]["doctor"]>
  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | doctor$clinicArgs<ExtArgs>
    archivedAppointments?: boolean | doctor$archivedAppointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctor"
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs> | null
      archivedAppointments: Prisma.$archivedappointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      clinicId: string | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<Prisma.$doctorPayload, S>

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor'], meta: { name: 'doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorFindUniqueArgs>(args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorFindFirstArgs>(args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends doctorFindManyArgs>(args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends doctorCreateArgs>(args: SelectSubset<T, doctorCreateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorCreateManyArgs>(args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends doctorDeleteArgs>(args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorUpdateArgs>(args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorDeleteManyArgs>(args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorUpdateManyArgs>(args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends doctorUpsertArgs>(args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctor model
   */
  readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends doctor$clinicArgs<ExtArgs> = {}>(args?: Subset<T, doctor$clinicArgs<ExtArgs>>): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    archivedAppointments<T extends doctor$archivedAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, doctor$archivedAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivedappointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<"doctor", 'String'>
    readonly name: FieldRef<"doctor", 'String'>
    readonly clinicId: FieldRef<"doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to create a doctor.
     */
    data?: XOR<doctorCreateInput, doctorUncheckedCreateInput>
  }

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
  }

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctor.clinic
   */
  export type doctor$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinic
     */
    omit?: clinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clinicInclude<ExtArgs> | null
    where?: clinicWhereInput
  }

  /**
   * doctor.archivedAppointments
   */
  export type doctor$archivedAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivedappointment
     */
    select?: archivedappointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivedappointment
     */
    omit?: archivedappointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivedappointmentInclude<ExtArgs> | null
    where?: archivedappointmentWhereInput
    orderBy?: archivedappointmentOrderByWithRelationInput | archivedappointmentOrderByWithRelationInput[]
    cursor?: archivedappointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivedappointmentScalarFieldEnum | ArchivedappointmentScalarFieldEnum[]
  }

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    appointmentNum: 'appointmentNum',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    age: 'age',
    gender: 'gender',
    doctorName: 'doctorName',
    clinicName: 'clinicName',
    date: 'date',
    time: 'time',
    day: 'day',
    period: 'period',
    clinicId: 'clinicId',
    userId: 'userId',
    areaId: 'areaId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ArchivedappointmentScalarFieldEnum: {
    id: 'id',
    appointmentNum: 'appointmentNum',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    age: 'age',
    gender: 'gender',
    doctorName: 'doctorName',
    clinicName: 'clinicName',
    date: 'date',
    time: 'time',
    day: 'day',
    period: 'period',
    clinicId: 'clinicId',
    areaId: 'areaId',
    userId: 'userId',
    doctorId: 'doctorId'
  };

  export type ArchivedappointmentScalarFieldEnum = (typeof ArchivedappointmentScalarFieldEnum)[keyof typeof ArchivedappointmentScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const ClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    numberLimit: 'numberLimit'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    clinicId: 'clinicId'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const appointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    gender: 'gender',
    doctorName: 'doctorName',
    clinicName: 'clinicName',
    date: 'date',
    time: 'time',
    day: 'day',
    period: 'period',
    clinicId: 'clinicId',
    userId: 'userId',
    areaId: 'areaId'
  };

  export type appointmentOrderByRelevanceFieldEnum = (typeof appointmentOrderByRelevanceFieldEnum)[keyof typeof appointmentOrderByRelevanceFieldEnum]


  export const archivedappointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    gender: 'gender',
    doctorName: 'doctorName',
    clinicName: 'clinicName',
    date: 'date',
    time: 'time',
    day: 'day',
    period: 'period',
    clinicId: 'clinicId',
    areaId: 'areaId',
    userId: 'userId',
    doctorId: 'doctorId'
  };

  export type archivedappointmentOrderByRelevanceFieldEnum = (typeof archivedappointmentOrderByRelevanceFieldEnum)[keyof typeof archivedappointmentOrderByRelevanceFieldEnum]


  export const areaOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type areaOrderByRelevanceFieldEnum = (typeof areaOrderByRelevanceFieldEnum)[keyof typeof areaOrderByRelevanceFieldEnum]


  export const clinicOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type clinicOrderByRelevanceFieldEnum = (typeof clinicOrderByRelevanceFieldEnum)[keyof typeof clinicOrderByRelevanceFieldEnum]


  export const doctorOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    clinicId: 'clinicId'
  };

  export type doctorOrderByRelevanceFieldEnum = (typeof doctorOrderByRelevanceFieldEnum)[keyof typeof doctorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    username?: StringNullableFilter<"user"> | string | null
    usersecret?: StringNullableFilter<"user"> | string | null
    authority?: StringNullableFilter<"user"> | string | null
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    usersecret?: SortOrderInput | SortOrder
    authority?: SortOrderInput | SortOrder
    appointments?: appointmentOrderByRelationAggregateInput
    archivedAppointments?: archivedappointmentOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringNullableFilter<"user"> | string | null
    usersecret?: StringNullableFilter<"user"> | string | null
    authority?: StringNullableFilter<"user"> | string | null
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    usersecret?: SortOrderInput | SortOrder
    authority?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    username?: StringNullableWithAggregatesFilter<"user"> | string | null
    usersecret?: StringNullableWithAggregatesFilter<"user"> | string | null
    authority?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    id?: StringFilter<"appointment"> | string
    appointmentNum?: IntNullableFilter<"appointment"> | number | null
    name?: StringNullableFilter<"appointment"> | string | null
    phoneNumber?: StringNullableFilter<"appointment"> | string | null
    address?: StringNullableFilter<"appointment"> | string | null
    age?: IntNullableFilter<"appointment"> | number | null
    gender?: StringNullableFilter<"appointment"> | string | null
    doctorName?: StringNullableFilter<"appointment"> | string | null
    clinicName?: StringNullableFilter<"appointment"> | string | null
    date?: StringNullableFilter<"appointment"> | string | null
    time?: StringNullableFilter<"appointment"> | string | null
    day?: StringNullableFilter<"appointment"> | string | null
    period?: StringNullableFilter<"appointment"> | string | null
    clinicId?: StringNullableFilter<"appointment"> | string | null
    userId?: StringNullableFilter<"appointment"> | string | null
    areaId?: StringNullableFilter<"appointment"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    area?: XOR<AreaNullableScalarRelationFilter, areaWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentNum?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    clinicName?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    clinic?: clinicOrderByWithRelationInput
    area?: areaOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: appointmentOrderByRelevanceInput
  }

  export type appointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    appointmentNum?: IntNullableFilter<"appointment"> | number | null
    name?: StringNullableFilter<"appointment"> | string | null
    phoneNumber?: StringNullableFilter<"appointment"> | string | null
    address?: StringNullableFilter<"appointment"> | string | null
    age?: IntNullableFilter<"appointment"> | number | null
    gender?: StringNullableFilter<"appointment"> | string | null
    doctorName?: StringNullableFilter<"appointment"> | string | null
    clinicName?: StringNullableFilter<"appointment"> | string | null
    date?: StringNullableFilter<"appointment"> | string | null
    time?: StringNullableFilter<"appointment"> | string | null
    day?: StringNullableFilter<"appointment"> | string | null
    period?: StringNullableFilter<"appointment"> | string | null
    clinicId?: StringNullableFilter<"appointment"> | string | null
    userId?: StringNullableFilter<"appointment"> | string | null
    areaId?: StringNullableFilter<"appointment"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    area?: XOR<AreaNullableScalarRelationFilter, areaWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentNum?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    clinicName?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    _count?: appointmentCountOrderByAggregateInput
    _avg?: appointmentAvgOrderByAggregateInput
    _max?: appointmentMaxOrderByAggregateInput
    _min?: appointmentMinOrderByAggregateInput
    _sum?: appointmentSumOrderByAggregateInput
  }

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    OR?: appointmentScalarWhereWithAggregatesInput[]
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"appointment"> | string
    appointmentNum?: IntNullableWithAggregatesFilter<"appointment"> | number | null
    name?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    address?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    age?: IntNullableWithAggregatesFilter<"appointment"> | number | null
    gender?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    doctorName?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    clinicName?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    date?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    time?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    day?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    period?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    clinicId?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    userId?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"appointment"> | string | null
  }

  export type archivedappointmentWhereInput = {
    AND?: archivedappointmentWhereInput | archivedappointmentWhereInput[]
    OR?: archivedappointmentWhereInput[]
    NOT?: archivedappointmentWhereInput | archivedappointmentWhereInput[]
    id?: StringFilter<"archivedappointment"> | string
    appointmentNum?: IntNullableFilter<"archivedappointment"> | number | null
    name?: StringNullableFilter<"archivedappointment"> | string | null
    phoneNumber?: StringNullableFilter<"archivedappointment"> | string | null
    address?: StringNullableFilter<"archivedappointment"> | string | null
    age?: IntNullableFilter<"archivedappointment"> | number | null
    gender?: StringNullableFilter<"archivedappointment"> | string | null
    doctorName?: StringNullableFilter<"archivedappointment"> | string | null
    clinicName?: StringNullableFilter<"archivedappointment"> | string | null
    date?: StringNullableFilter<"archivedappointment"> | string | null
    time?: StringNullableFilter<"archivedappointment"> | string | null
    day?: StringNullableFilter<"archivedappointment"> | string | null
    period?: StringNullableFilter<"archivedappointment"> | string | null
    clinicId?: StringNullableFilter<"archivedappointment"> | string | null
    areaId?: StringNullableFilter<"archivedappointment"> | string | null
    userId?: StringNullableFilter<"archivedappointment"> | string | null
    doctorId?: StringNullableFilter<"archivedappointment"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    area?: XOR<AreaNullableScalarRelationFilter, areaWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
  }

  export type archivedappointmentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentNum?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    clinicName?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    doctorId?: SortOrderInput | SortOrder
    clinic?: clinicOrderByWithRelationInput
    area?: areaOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    doctor?: doctorOrderByWithRelationInput
    _relevance?: archivedappointmentOrderByRelevanceInput
  }

  export type archivedappointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: archivedappointmentWhereInput | archivedappointmentWhereInput[]
    OR?: archivedappointmentWhereInput[]
    NOT?: archivedappointmentWhereInput | archivedappointmentWhereInput[]
    appointmentNum?: IntNullableFilter<"archivedappointment"> | number | null
    name?: StringNullableFilter<"archivedappointment"> | string | null
    phoneNumber?: StringNullableFilter<"archivedappointment"> | string | null
    address?: StringNullableFilter<"archivedappointment"> | string | null
    age?: IntNullableFilter<"archivedappointment"> | number | null
    gender?: StringNullableFilter<"archivedappointment"> | string | null
    doctorName?: StringNullableFilter<"archivedappointment"> | string | null
    clinicName?: StringNullableFilter<"archivedappointment"> | string | null
    date?: StringNullableFilter<"archivedappointment"> | string | null
    time?: StringNullableFilter<"archivedappointment"> | string | null
    day?: StringNullableFilter<"archivedappointment"> | string | null
    period?: StringNullableFilter<"archivedappointment"> | string | null
    clinicId?: StringNullableFilter<"archivedappointment"> | string | null
    areaId?: StringNullableFilter<"archivedappointment"> | string | null
    userId?: StringNullableFilter<"archivedappointment"> | string | null
    doctorId?: StringNullableFilter<"archivedappointment"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    area?: XOR<AreaNullableScalarRelationFilter, areaWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
  }, "id">

  export type archivedappointmentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentNum?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    clinicName?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    doctorId?: SortOrderInput | SortOrder
    _count?: archivedappointmentCountOrderByAggregateInput
    _avg?: archivedappointmentAvgOrderByAggregateInput
    _max?: archivedappointmentMaxOrderByAggregateInput
    _min?: archivedappointmentMinOrderByAggregateInput
    _sum?: archivedappointmentSumOrderByAggregateInput
  }

  export type archivedappointmentScalarWhereWithAggregatesInput = {
    AND?: archivedappointmentScalarWhereWithAggregatesInput | archivedappointmentScalarWhereWithAggregatesInput[]
    OR?: archivedappointmentScalarWhereWithAggregatesInput[]
    NOT?: archivedappointmentScalarWhereWithAggregatesInput | archivedappointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"archivedappointment"> | string
    appointmentNum?: IntNullableWithAggregatesFilter<"archivedappointment"> | number | null
    name?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    address?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    age?: IntNullableWithAggregatesFilter<"archivedappointment"> | number | null
    gender?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    doctorName?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    clinicName?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    date?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    time?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    day?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    period?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    clinicId?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    userId?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
    doctorId?: StringNullableWithAggregatesFilter<"archivedappointment"> | string | null
  }

  export type areaWhereInput = {
    AND?: areaWhereInput | areaWhereInput[]
    OR?: areaWhereInput[]
    NOT?: areaWhereInput | areaWhereInput[]
    id?: StringFilter<"area"> | string
    name?: StringFilter<"area"> | string
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }

  export type areaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    appointments?: appointmentOrderByRelationAggregateInput
    archivedAppointments?: archivedappointmentOrderByRelationAggregateInput
    _relevance?: areaOrderByRelevanceInput
  }

  export type areaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: areaWhereInput | areaWhereInput[]
    OR?: areaWhereInput[]
    NOT?: areaWhereInput | areaWhereInput[]
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }, "id" | "name">

  export type areaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: areaCountOrderByAggregateInput
    _max?: areaMaxOrderByAggregateInput
    _min?: areaMinOrderByAggregateInput
  }

  export type areaScalarWhereWithAggregatesInput = {
    AND?: areaScalarWhereWithAggregatesInput | areaScalarWhereWithAggregatesInput[]
    OR?: areaScalarWhereWithAggregatesInput[]
    NOT?: areaScalarWhereWithAggregatesInput | areaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"area"> | string
    name?: StringWithAggregatesFilter<"area"> | string
  }

  export type clinicWhereInput = {
    AND?: clinicWhereInput | clinicWhereInput[]
    OR?: clinicWhereInput[]
    NOT?: clinicWhereInput | clinicWhereInput[]
    id?: StringFilter<"clinic"> | string
    name?: StringFilter<"clinic"> | string
    numberLimit?: IntNullableFilter<"clinic"> | number | null
    doctor?: DoctorListRelationFilter
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }

  export type clinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    numberLimit?: SortOrderInput | SortOrder
    doctor?: doctorOrderByRelationAggregateInput
    appointments?: appointmentOrderByRelationAggregateInput
    archivedAppointments?: archivedappointmentOrderByRelationAggregateInput
    _relevance?: clinicOrderByRelevanceInput
  }

  export type clinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: clinicWhereInput | clinicWhereInput[]
    OR?: clinicWhereInput[]
    NOT?: clinicWhereInput | clinicWhereInput[]
    numberLimit?: IntNullableFilter<"clinic"> | number | null
    doctor?: DoctorListRelationFilter
    appointments?: AppointmentListRelationFilter
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }, "id" | "name">

  export type clinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    numberLimit?: SortOrderInput | SortOrder
    _count?: clinicCountOrderByAggregateInput
    _avg?: clinicAvgOrderByAggregateInput
    _max?: clinicMaxOrderByAggregateInput
    _min?: clinicMinOrderByAggregateInput
    _sum?: clinicSumOrderByAggregateInput
  }

  export type clinicScalarWhereWithAggregatesInput = {
    AND?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[]
    OR?: clinicScalarWhereWithAggregatesInput[]
    NOT?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"clinic"> | string
    name?: StringWithAggregatesFilter<"clinic"> | string
    numberLimit?: IntNullableWithAggregatesFilter<"clinic"> | number | null
  }

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    id?: StringFilter<"doctor"> | string
    name?: StringNullableFilter<"doctor"> | string | null
    clinicId?: StringNullableFilter<"doctor"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    clinic?: clinicOrderByWithRelationInput
    archivedAppointments?: archivedappointmentOrderByRelationAggregateInput
    _relevance?: doctorOrderByRelevanceInput
  }

  export type doctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    name?: StringNullableFilter<"doctor"> | string | null
    clinicId?: StringNullableFilter<"doctor"> | string | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, clinicWhereInput> | null
    archivedAppointments?: ArchivedappointmentListRelationFilter
  }, "id">

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    clinicId?: SortOrderInput | SortOrder
    _count?: doctorCountOrderByAggregateInput
    _max?: doctorMaxOrderByAggregateInput
    _min?: doctorMinOrderByAggregateInput
  }

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    OR?: doctorScalarWhereWithAggregatesInput[]
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"doctor"> | string
    name?: StringNullableWithAggregatesFilter<"doctor"> | string | null
    clinicId?: StringNullableWithAggregatesFilter<"doctor"> | string | null
  }

  export type userCreateInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    appointments?: appointmentCreateNestedManyWithoutUserInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    appointments?: appointmentUncheckedCreateNestedManyWithoutUserInput
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: appointmentUpdateManyWithoutUserNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: appointmentUncheckedUpdateManyWithoutUserNestedInput
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentCreateInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutAppointmentsInput
    area?: areaCreateNestedOneWithoutAppointmentsInput
    user?: userCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentUncheckedCreateInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
    areaId?: string | null
  }

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutAppointmentsNestedInput
    area?: areaUpdateOneWithoutAppointmentsNestedInput
    user?: userUpdateOneWithoutAppointmentsNestedInput
  }

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentCreateManyInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
    areaId?: string | null
  }

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentCreateInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutArchivedAppointmentsInput
    area?: areaCreateNestedOneWithoutArchivedAppointmentsInput
    user?: userCreateNestedOneWithoutArchivedAppointmentsInput
    doctor?: doctorCreateNestedOneWithoutArchivedAppointmentsInput
  }

  export type archivedappointmentUncheckedCreateInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type archivedappointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutArchivedAppointmentsNestedInput
    area?: areaUpdateOneWithoutArchivedAppointmentsNestedInput
    user?: userUpdateOneWithoutArchivedAppointmentsNestedInput
    doctor?: doctorUpdateOneWithoutArchivedAppointmentsNestedInput
  }

  export type archivedappointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentCreateManyInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type archivedappointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type areaCreateInput = {
    id?: string
    name: string
    appointments?: appointmentCreateNestedManyWithoutAreaInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutAreaInput
  }

  export type areaUncheckedCreateInput = {
    id?: string
    name: string
    appointments?: appointmentUncheckedCreateNestedManyWithoutAreaInput
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutAreaInput
  }

  export type areaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentUpdateManyWithoutAreaNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentUncheckedUpdateManyWithoutAreaNestedInput
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type areaCreateManyInput = {
    id?: string
    name: string
  }

  export type areaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type areaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clinicCreateInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorCreateNestedManyWithoutClinicInput
    appointments?: appointmentCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutClinicInput
  }

  export type clinicUncheckedCreateInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorUncheckedCreateNestedManyWithoutClinicInput
    appointments?: appointmentUncheckedCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutClinicInput
  }

  export type clinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUpdateManyWithoutClinicNestedInput
    appointments?: appointmentUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutClinicNestedInput
  }

  export type clinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: appointmentUncheckedUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type clinicCreateManyInput = {
    id?: string
    name: string
    numberLimit?: number | null
  }

  export type clinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type doctorCreateInput = {
    id?: string
    name?: string | null
    clinic?: clinicCreateNestedOneWithoutDoctorInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateInput = {
    id?: string
    name?: string | null
    clinicId?: string | null
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutDoctorNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorCreateManyInput = {
    id?: string
    name?: string | null
    clinicId?: string | null
  }

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput
    some?: appointmentWhereInput
    none?: appointmentWhereInput
  }

  export type ArchivedappointmentListRelationFilter = {
    every?: archivedappointmentWhereInput
    some?: archivedappointmentWhereInput
    none?: archivedappointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type archivedappointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClinicNullableScalarRelationFilter = {
    is?: clinicWhereInput | null
    isNot?: clinicWhereInput | null
  }

  export type AreaNullableScalarRelationFilter = {
    is?: areaWhereInput | null
    isNot?: areaWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type appointmentOrderByRelevanceInput = {
    fields: appointmentOrderByRelevanceFieldEnum | appointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
  }

  export type appointmentAvgOrderByAggregateInput = {
    appointmentNum?: SortOrder
    age?: SortOrder
  }

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
  }

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    userId?: SortOrder
    areaId?: SortOrder
  }

  export type appointmentSumOrderByAggregateInput = {
    appointmentNum?: SortOrder
    age?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: doctorWhereInput | null
    isNot?: doctorWhereInput | null
  }

  export type archivedappointmentOrderByRelevanceInput = {
    fields: archivedappointmentOrderByRelevanceFieldEnum | archivedappointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type archivedappointmentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    areaId?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
  }

  export type archivedappointmentAvgOrderByAggregateInput = {
    appointmentNum?: SortOrder
    age?: SortOrder
  }

  export type archivedappointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    areaId?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
  }

  export type archivedappointmentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentNum?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    doctorName?: SortOrder
    clinicName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    day?: SortOrder
    period?: SortOrder
    clinicId?: SortOrder
    areaId?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
  }

  export type archivedappointmentSumOrderByAggregateInput = {
    appointmentNum?: SortOrder
    age?: SortOrder
  }

  export type areaOrderByRelevanceInput = {
    fields: areaOrderByRelevanceFieldEnum | areaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type areaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type areaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type areaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput
    some?: doctorWhereInput
    none?: doctorWhereInput
  }

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clinicOrderByRelevanceInput = {
    fields: clinicOrderByRelevanceFieldEnum | clinicOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberLimit?: SortOrder
  }

  export type clinicAvgOrderByAggregateInput = {
    numberLimit?: SortOrder
  }

  export type clinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberLimit?: SortOrder
  }

  export type clinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberLimit?: SortOrder
  }

  export type clinicSumOrderByAggregateInput = {
    numberLimit?: SortOrder
  }

  export type doctorOrderByRelevanceInput = {
    fields: doctorOrderByRelevanceFieldEnum | doctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clinicId?: SortOrder
  }

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clinicId?: SortOrder
  }

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clinicId?: SortOrder
  }

  export type appointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput> | appointmentCreateWithoutUserInput[] | appointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[]
    createMany?: appointmentCreateManyUserInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput> | archivedappointmentCreateWithoutUserInput[] | archivedappointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutUserInput | archivedappointmentCreateOrConnectWithoutUserInput[]
    createMany?: archivedappointmentCreateManyUserInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput> | appointmentCreateWithoutUserInput[] | appointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[]
    createMany?: appointmentCreateManyUserInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput> | archivedappointmentCreateWithoutUserInput[] | archivedappointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutUserInput | archivedappointmentCreateOrConnectWithoutUserInput[]
    createMany?: archivedappointmentCreateManyUserInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type appointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput> | appointmentCreateWithoutUserInput[] | appointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: appointmentCreateManyUserInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput> | archivedappointmentCreateWithoutUserInput[] | archivedappointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutUserInput | archivedappointmentCreateOrConnectWithoutUserInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutUserInput | archivedappointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: archivedappointmentCreateManyUserInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutUserInput | archivedappointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutUserInput | archivedappointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput> | appointmentCreateWithoutUserInput[] | appointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: appointmentCreateManyUserInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput> | archivedappointmentCreateWithoutUserInput[] | archivedappointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutUserInput | archivedappointmentCreateOrConnectWithoutUserInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutUserInput | archivedappointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: archivedappointmentCreateManyUserInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutUserInput | archivedappointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutUserInput | archivedappointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type clinicCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<clinicCreateWithoutAppointmentsInput, clinicUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentsInput
    connect?: clinicWhereUniqueInput
  }

  export type areaCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<areaCreateWithoutAppointmentsInput, areaUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: areaCreateOrConnectWithoutAppointmentsInput
    connect?: areaWhereUniqueInput
  }

  export type userCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<userCreateWithoutAppointmentsInput, userUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutAppointmentsInput
    connect?: userWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clinicUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<clinicCreateWithoutAppointmentsInput, clinicUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentsInput
    upsert?: clinicUpsertWithoutAppointmentsInput
    disconnect?: clinicWhereInput | boolean
    delete?: clinicWhereInput | boolean
    connect?: clinicWhereUniqueInput
    update?: XOR<XOR<clinicUpdateToOneWithWhereWithoutAppointmentsInput, clinicUpdateWithoutAppointmentsInput>, clinicUncheckedUpdateWithoutAppointmentsInput>
  }

  export type areaUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<areaCreateWithoutAppointmentsInput, areaUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: areaCreateOrConnectWithoutAppointmentsInput
    upsert?: areaUpsertWithoutAppointmentsInput
    disconnect?: areaWhereInput | boolean
    delete?: areaWhereInput | boolean
    connect?: areaWhereUniqueInput
    update?: XOR<XOR<areaUpdateToOneWithWhereWithoutAppointmentsInput, areaUpdateWithoutAppointmentsInput>, areaUncheckedUpdateWithoutAppointmentsInput>
  }

  export type userUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<userCreateWithoutAppointmentsInput, userUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutAppointmentsInput
    upsert?: userUpsertWithoutAppointmentsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAppointmentsInput, userUpdateWithoutAppointmentsInput>, userUncheckedUpdateWithoutAppointmentsInput>
  }

  export type clinicCreateNestedOneWithoutArchivedAppointmentsInput = {
    create?: XOR<clinicCreateWithoutArchivedAppointmentsInput, clinicUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: clinicCreateOrConnectWithoutArchivedAppointmentsInput
    connect?: clinicWhereUniqueInput
  }

  export type areaCreateNestedOneWithoutArchivedAppointmentsInput = {
    create?: XOR<areaCreateWithoutArchivedAppointmentsInput, areaUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: areaCreateOrConnectWithoutArchivedAppointmentsInput
    connect?: areaWhereUniqueInput
  }

  export type userCreateNestedOneWithoutArchivedAppointmentsInput = {
    create?: XOR<userCreateWithoutArchivedAppointmentsInput, userUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutArchivedAppointmentsInput
    connect?: userWhereUniqueInput
  }

  export type doctorCreateNestedOneWithoutArchivedAppointmentsInput = {
    create?: XOR<doctorCreateWithoutArchivedAppointmentsInput, doctorUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: doctorCreateOrConnectWithoutArchivedAppointmentsInput
    connect?: doctorWhereUniqueInput
  }

  export type clinicUpdateOneWithoutArchivedAppointmentsNestedInput = {
    create?: XOR<clinicCreateWithoutArchivedAppointmentsInput, clinicUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: clinicCreateOrConnectWithoutArchivedAppointmentsInput
    upsert?: clinicUpsertWithoutArchivedAppointmentsInput
    disconnect?: clinicWhereInput | boolean
    delete?: clinicWhereInput | boolean
    connect?: clinicWhereUniqueInput
    update?: XOR<XOR<clinicUpdateToOneWithWhereWithoutArchivedAppointmentsInput, clinicUpdateWithoutArchivedAppointmentsInput>, clinicUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type areaUpdateOneWithoutArchivedAppointmentsNestedInput = {
    create?: XOR<areaCreateWithoutArchivedAppointmentsInput, areaUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: areaCreateOrConnectWithoutArchivedAppointmentsInput
    upsert?: areaUpsertWithoutArchivedAppointmentsInput
    disconnect?: areaWhereInput | boolean
    delete?: areaWhereInput | boolean
    connect?: areaWhereUniqueInput
    update?: XOR<XOR<areaUpdateToOneWithWhereWithoutArchivedAppointmentsInput, areaUpdateWithoutArchivedAppointmentsInput>, areaUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type userUpdateOneWithoutArchivedAppointmentsNestedInput = {
    create?: XOR<userCreateWithoutArchivedAppointmentsInput, userUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutArchivedAppointmentsInput
    upsert?: userUpsertWithoutArchivedAppointmentsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutArchivedAppointmentsInput, userUpdateWithoutArchivedAppointmentsInput>, userUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type doctorUpdateOneWithoutArchivedAppointmentsNestedInput = {
    create?: XOR<doctorCreateWithoutArchivedAppointmentsInput, doctorUncheckedCreateWithoutArchivedAppointmentsInput>
    connectOrCreate?: doctorCreateOrConnectWithoutArchivedAppointmentsInput
    upsert?: doctorUpsertWithoutArchivedAppointmentsInput
    disconnect?: doctorWhereInput | boolean
    delete?: doctorWhereInput | boolean
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutArchivedAppointmentsInput, doctorUpdateWithoutArchivedAppointmentsInput>, doctorUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type appointmentCreateNestedManyWithoutAreaInput = {
    create?: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput> | appointmentCreateWithoutAreaInput[] | appointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAreaInput | appointmentCreateOrConnectWithoutAreaInput[]
    createMany?: appointmentCreateManyAreaInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentCreateNestedManyWithoutAreaInput = {
    create?: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput> | archivedappointmentCreateWithoutAreaInput[] | archivedappointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutAreaInput | archivedappointmentCreateOrConnectWithoutAreaInput[]
    createMany?: archivedappointmentCreateManyAreaInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput> | appointmentCreateWithoutAreaInput[] | appointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAreaInput | appointmentCreateOrConnectWithoutAreaInput[]
    createMany?: appointmentCreateManyAreaInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput> | archivedappointmentCreateWithoutAreaInput[] | archivedappointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutAreaInput | archivedappointmentCreateOrConnectWithoutAreaInput[]
    createMany?: archivedappointmentCreateManyAreaInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type appointmentUpdateManyWithoutAreaNestedInput = {
    create?: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput> | appointmentCreateWithoutAreaInput[] | appointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAreaInput | appointmentCreateOrConnectWithoutAreaInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutAreaInput | appointmentUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: appointmentCreateManyAreaInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutAreaInput | appointmentUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutAreaInput | appointmentUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUpdateManyWithoutAreaNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput> | archivedappointmentCreateWithoutAreaInput[] | archivedappointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutAreaInput | archivedappointmentCreateOrConnectWithoutAreaInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutAreaInput | archivedappointmentUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: archivedappointmentCreateManyAreaInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutAreaInput | archivedappointmentUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutAreaInput | archivedappointmentUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput> | appointmentCreateWithoutAreaInput[] | appointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAreaInput | appointmentCreateOrConnectWithoutAreaInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutAreaInput | appointmentUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: appointmentCreateManyAreaInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutAreaInput | appointmentUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutAreaInput | appointmentUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput> | archivedappointmentCreateWithoutAreaInput[] | archivedappointmentUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutAreaInput | archivedappointmentCreateOrConnectWithoutAreaInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutAreaInput | archivedappointmentUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: archivedappointmentCreateManyAreaInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutAreaInput | archivedappointmentUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutAreaInput | archivedappointmentUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type doctorCreateNestedManyWithoutClinicInput = {
    create?: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput> | doctorCreateWithoutClinicInput[] | doctorUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutClinicInput | doctorCreateOrConnectWithoutClinicInput[]
    createMany?: doctorCreateManyClinicInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type appointmentCreateNestedManyWithoutClinicInput = {
    create?: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput> | appointmentCreateWithoutClinicInput[] | appointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[]
    createMany?: appointmentCreateManyClinicInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentCreateNestedManyWithoutClinicInput = {
    create?: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput> | archivedappointmentCreateWithoutClinicInput[] | archivedappointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutClinicInput | archivedappointmentCreateOrConnectWithoutClinicInput[]
    createMany?: archivedappointmentCreateManyClinicInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type doctorUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput> | doctorCreateWithoutClinicInput[] | doctorUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutClinicInput | doctorCreateOrConnectWithoutClinicInput[]
    createMany?: doctorCreateManyClinicInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput> | appointmentCreateWithoutClinicInput[] | appointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[]
    createMany?: appointmentCreateManyClinicInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type archivedappointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput> | archivedappointmentCreateWithoutClinicInput[] | archivedappointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutClinicInput | archivedappointmentCreateOrConnectWithoutClinicInput[]
    createMany?: archivedappointmentCreateManyClinicInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type doctorUpdateManyWithoutClinicNestedInput = {
    create?: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput> | doctorCreateWithoutClinicInput[] | doctorUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutClinicInput | doctorCreateOrConnectWithoutClinicInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutClinicInput | doctorUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: doctorCreateManyClinicInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutClinicInput | doctorUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutClinicInput | doctorUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type appointmentUpdateManyWithoutClinicNestedInput = {
    create?: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput> | appointmentCreateWithoutClinicInput[] | appointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: appointmentCreateManyClinicInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUpdateManyWithoutClinicNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput> | archivedappointmentCreateWithoutClinicInput[] | archivedappointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutClinicInput | archivedappointmentCreateOrConnectWithoutClinicInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutClinicInput | archivedappointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: archivedappointmentCreateManyClinicInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutClinicInput | archivedappointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutClinicInput | archivedappointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type doctorUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput> | doctorCreateWithoutClinicInput[] | doctorUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutClinicInput | doctorCreateOrConnectWithoutClinicInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutClinicInput | doctorUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: doctorCreateManyClinicInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutClinicInput | doctorUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutClinicInput | doctorUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput> | appointmentCreateWithoutClinicInput[] | appointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: appointmentCreateManyClinicInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type archivedappointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput> | archivedappointmentCreateWithoutClinicInput[] | archivedappointmentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutClinicInput | archivedappointmentCreateOrConnectWithoutClinicInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutClinicInput | archivedappointmentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: archivedappointmentCreateManyClinicInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutClinicInput | archivedappointmentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutClinicInput | archivedappointmentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type clinicCreateNestedOneWithoutDoctorInput = {
    create?: XOR<clinicCreateWithoutDoctorInput, clinicUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: clinicCreateOrConnectWithoutDoctorInput
    connect?: clinicWhereUniqueInput
  }

  export type archivedappointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput> | archivedappointmentCreateWithoutDoctorInput[] | archivedappointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutDoctorInput | archivedappointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: archivedappointmentCreateManyDoctorInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type archivedappointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput> | archivedappointmentCreateWithoutDoctorInput[] | archivedappointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutDoctorInput | archivedappointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: archivedappointmentCreateManyDoctorInputEnvelope
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
  }

  export type clinicUpdateOneWithoutDoctorNestedInput = {
    create?: XOR<clinicCreateWithoutDoctorInput, clinicUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: clinicCreateOrConnectWithoutDoctorInput
    upsert?: clinicUpsertWithoutDoctorInput
    disconnect?: clinicWhereInput | boolean
    delete?: clinicWhereInput | boolean
    connect?: clinicWhereUniqueInput
    update?: XOR<XOR<clinicUpdateToOneWithWhereWithoutDoctorInput, clinicUpdateWithoutDoctorInput>, clinicUncheckedUpdateWithoutDoctorInput>
  }

  export type archivedappointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput> | archivedappointmentCreateWithoutDoctorInput[] | archivedappointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutDoctorInput | archivedappointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutDoctorInput | archivedappointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: archivedappointmentCreateManyDoctorInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutDoctorInput | archivedappointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutDoctorInput | archivedappointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type archivedappointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput> | archivedappointmentCreateWithoutDoctorInput[] | archivedappointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: archivedappointmentCreateOrConnectWithoutDoctorInput | archivedappointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: archivedappointmentUpsertWithWhereUniqueWithoutDoctorInput | archivedappointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: archivedappointmentCreateManyDoctorInputEnvelope
    set?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    disconnect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    delete?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    connect?: archivedappointmentWhereUniqueInput | archivedappointmentWhereUniqueInput[]
    update?: archivedappointmentUpdateWithWhereUniqueWithoutDoctorInput | archivedappointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: archivedappointmentUpdateManyWithWhereWithoutDoctorInput | archivedappointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type appointmentCreateWithoutUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutAppointmentsInput
    area?: areaCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
  }

  export type appointmentCreateOrConnectWithoutUserInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
  }

  export type appointmentCreateManyUserInputEnvelope = {
    data: appointmentCreateManyUserInput | appointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type archivedappointmentCreateWithoutUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutArchivedAppointmentsInput
    area?: areaCreateNestedOneWithoutArchivedAppointmentsInput
    doctor?: doctorCreateNestedOneWithoutArchivedAppointmentsInput
  }

  export type archivedappointmentUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    doctorId?: string | null
  }

  export type archivedappointmentCreateOrConnectWithoutUserInput = {
    where: archivedappointmentWhereUniqueInput
    create: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput>
  }

  export type archivedappointmentCreateManyUserInputEnvelope = {
    data: archivedappointmentCreateManyUserInput | archivedappointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>
  }

  export type appointmentUpdateManyWithWhereWithoutUserInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    OR?: appointmentScalarWhereInput[]
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    id?: StringFilter<"appointment"> | string
    appointmentNum?: IntNullableFilter<"appointment"> | number | null
    name?: StringNullableFilter<"appointment"> | string | null
    phoneNumber?: StringNullableFilter<"appointment"> | string | null
    address?: StringNullableFilter<"appointment"> | string | null
    age?: IntNullableFilter<"appointment"> | number | null
    gender?: StringNullableFilter<"appointment"> | string | null
    doctorName?: StringNullableFilter<"appointment"> | string | null
    clinicName?: StringNullableFilter<"appointment"> | string | null
    date?: StringNullableFilter<"appointment"> | string | null
    time?: StringNullableFilter<"appointment"> | string | null
    day?: StringNullableFilter<"appointment"> | string | null
    period?: StringNullableFilter<"appointment"> | string | null
    clinicId?: StringNullableFilter<"appointment"> | string | null
    userId?: StringNullableFilter<"appointment"> | string | null
    areaId?: StringNullableFilter<"appointment"> | string | null
  }

  export type archivedappointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: archivedappointmentWhereUniqueInput
    update: XOR<archivedappointmentUpdateWithoutUserInput, archivedappointmentUncheckedUpdateWithoutUserInput>
    create: XOR<archivedappointmentCreateWithoutUserInput, archivedappointmentUncheckedCreateWithoutUserInput>
  }

  export type archivedappointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: archivedappointmentWhereUniqueInput
    data: XOR<archivedappointmentUpdateWithoutUserInput, archivedappointmentUncheckedUpdateWithoutUserInput>
  }

  export type archivedappointmentUpdateManyWithWhereWithoutUserInput = {
    where: archivedappointmentScalarWhereInput
    data: XOR<archivedappointmentUpdateManyMutationInput, archivedappointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type archivedappointmentScalarWhereInput = {
    AND?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
    OR?: archivedappointmentScalarWhereInput[]
    NOT?: archivedappointmentScalarWhereInput | archivedappointmentScalarWhereInput[]
    id?: StringFilter<"archivedappointment"> | string
    appointmentNum?: IntNullableFilter<"archivedappointment"> | number | null
    name?: StringNullableFilter<"archivedappointment"> | string | null
    phoneNumber?: StringNullableFilter<"archivedappointment"> | string | null
    address?: StringNullableFilter<"archivedappointment"> | string | null
    age?: IntNullableFilter<"archivedappointment"> | number | null
    gender?: StringNullableFilter<"archivedappointment"> | string | null
    doctorName?: StringNullableFilter<"archivedappointment"> | string | null
    clinicName?: StringNullableFilter<"archivedappointment"> | string | null
    date?: StringNullableFilter<"archivedappointment"> | string | null
    time?: StringNullableFilter<"archivedappointment"> | string | null
    day?: StringNullableFilter<"archivedappointment"> | string | null
    period?: StringNullableFilter<"archivedappointment"> | string | null
    clinicId?: StringNullableFilter<"archivedappointment"> | string | null
    areaId?: StringNullableFilter<"archivedappointment"> | string | null
    userId?: StringNullableFilter<"archivedappointment"> | string | null
    doctorId?: StringNullableFilter<"archivedappointment"> | string | null
  }

  export type clinicCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutClinicInput
  }

  export type clinicUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorUncheckedCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutClinicInput
  }

  export type clinicCreateOrConnectWithoutAppointmentsInput = {
    where: clinicWhereUniqueInput
    create: XOR<clinicCreateWithoutAppointmentsInput, clinicUncheckedCreateWithoutAppointmentsInput>
  }

  export type areaCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutAreaInput
  }

  export type areaUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutAreaInput
  }

  export type areaCreateOrConnectWithoutAppointmentsInput = {
    where: areaWhereUniqueInput
    create: XOR<areaCreateWithoutAppointmentsInput, areaUncheckedCreateWithoutAppointmentsInput>
  }

  export type userCreateWithoutAppointmentsInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAppointmentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAppointmentsInput, userUncheckedCreateWithoutAppointmentsInput>
  }

  export type clinicUpsertWithoutAppointmentsInput = {
    update: XOR<clinicUpdateWithoutAppointmentsInput, clinicUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<clinicCreateWithoutAppointmentsInput, clinicUncheckedCreateWithoutAppointmentsInput>
    where?: clinicWhereInput
  }

  export type clinicUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: clinicWhereInput
    data: XOR<clinicUpdateWithoutAppointmentsInput, clinicUncheckedUpdateWithoutAppointmentsInput>
  }

  export type clinicUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutClinicNestedInput
  }

  export type clinicUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUncheckedUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type areaUpsertWithoutAppointmentsInput = {
    update: XOR<areaUpdateWithoutAppointmentsInput, areaUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<areaCreateWithoutAppointmentsInput, areaUncheckedCreateWithoutAppointmentsInput>
    where?: areaWhereInput
  }

  export type areaUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: areaWhereInput
    data: XOR<areaUpdateWithoutAppointmentsInput, areaUncheckedUpdateWithoutAppointmentsInput>
  }

  export type areaUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archivedAppointments?: archivedappointmentUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type userUpsertWithoutAppointmentsInput = {
    update: XOR<userUpdateWithoutAppointmentsInput, userUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<userCreateWithoutAppointmentsInput, userUncheckedCreateWithoutAppointmentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAppointmentsInput, userUncheckedUpdateWithoutAppointmentsInput>
  }

  export type userUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAppointments?: archivedappointmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type clinicCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorCreateNestedManyWithoutClinicInput
    appointments?: appointmentCreateNestedManyWithoutClinicInput
  }

  export type clinicUncheckedCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name: string
    numberLimit?: number | null
    doctor?: doctorUncheckedCreateNestedManyWithoutClinicInput
    appointments?: appointmentUncheckedCreateNestedManyWithoutClinicInput
  }

  export type clinicCreateOrConnectWithoutArchivedAppointmentsInput = {
    where: clinicWhereUniqueInput
    create: XOR<clinicCreateWithoutArchivedAppointmentsInput, clinicUncheckedCreateWithoutArchivedAppointmentsInput>
  }

  export type areaCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name: string
    appointments?: appointmentCreateNestedManyWithoutAreaInput
  }

  export type areaUncheckedCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name: string
    appointments?: appointmentUncheckedCreateNestedManyWithoutAreaInput
  }

  export type areaCreateOrConnectWithoutArchivedAppointmentsInput = {
    where: areaWhereUniqueInput
    create: XOR<areaCreateWithoutArchivedAppointmentsInput, areaUncheckedCreateWithoutArchivedAppointmentsInput>
  }

  export type userCreateWithoutArchivedAppointmentsInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    appointments?: appointmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutArchivedAppointmentsInput = {
    id?: string
    username?: string | null
    usersecret?: string | null
    authority?: string | null
    appointments?: appointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutArchivedAppointmentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutArchivedAppointmentsInput, userUncheckedCreateWithoutArchivedAppointmentsInput>
  }

  export type doctorCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name?: string | null
    clinic?: clinicCreateNestedOneWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutArchivedAppointmentsInput = {
    id?: string
    name?: string | null
    clinicId?: string | null
  }

  export type doctorCreateOrConnectWithoutArchivedAppointmentsInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutArchivedAppointmentsInput, doctorUncheckedCreateWithoutArchivedAppointmentsInput>
  }

  export type clinicUpsertWithoutArchivedAppointmentsInput = {
    update: XOR<clinicUpdateWithoutArchivedAppointmentsInput, clinicUncheckedUpdateWithoutArchivedAppointmentsInput>
    create: XOR<clinicCreateWithoutArchivedAppointmentsInput, clinicUncheckedCreateWithoutArchivedAppointmentsInput>
    where?: clinicWhereInput
  }

  export type clinicUpdateToOneWithWhereWithoutArchivedAppointmentsInput = {
    where?: clinicWhereInput
    data: XOR<clinicUpdateWithoutArchivedAppointmentsInput, clinicUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type clinicUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUpdateManyWithoutClinicNestedInput
    appointments?: appointmentUpdateManyWithoutClinicNestedInput
  }

  export type clinicUncheckedUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    doctor?: doctorUncheckedUpdateManyWithoutClinicNestedInput
    appointments?: appointmentUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type areaUpsertWithoutArchivedAppointmentsInput = {
    update: XOR<areaUpdateWithoutArchivedAppointmentsInput, areaUncheckedUpdateWithoutArchivedAppointmentsInput>
    create: XOR<areaCreateWithoutArchivedAppointmentsInput, areaUncheckedCreateWithoutArchivedAppointmentsInput>
    where?: areaWhereInput
  }

  export type areaUpdateToOneWithWhereWithoutArchivedAppointmentsInput = {
    where?: areaWhereInput
    data: XOR<areaUpdateWithoutArchivedAppointmentsInput, areaUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type areaUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type userUpsertWithoutArchivedAppointmentsInput = {
    update: XOR<userUpdateWithoutArchivedAppointmentsInput, userUncheckedUpdateWithoutArchivedAppointmentsInput>
    create: XOR<userCreateWithoutArchivedAppointmentsInput, userUncheckedCreateWithoutArchivedAppointmentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutArchivedAppointmentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutArchivedAppointmentsInput, userUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type userUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: appointmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    usersecret?: NullableStringFieldUpdateOperationsInput | string | null
    authority?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: appointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type doctorUpsertWithoutArchivedAppointmentsInput = {
    update: XOR<doctorUpdateWithoutArchivedAppointmentsInput, doctorUncheckedUpdateWithoutArchivedAppointmentsInput>
    create: XOR<doctorCreateWithoutArchivedAppointmentsInput, doctorUncheckedCreateWithoutArchivedAppointmentsInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutArchivedAppointmentsInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutArchivedAppointmentsInput, doctorUncheckedUpdateWithoutArchivedAppointmentsInput>
  }

  export type doctorUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutArchivedAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentCreateWithoutAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutAppointmentsInput
    user?: userCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentUncheckedCreateWithoutAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
  }

  export type appointmentCreateOrConnectWithoutAreaInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput>
  }

  export type appointmentCreateManyAreaInputEnvelope = {
    data: appointmentCreateManyAreaInput | appointmentCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type archivedappointmentCreateWithoutAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutArchivedAppointmentsInput
    user?: userCreateNestedOneWithoutArchivedAppointmentsInput
    doctor?: doctorCreateNestedOneWithoutArchivedAppointmentsInput
  }

  export type archivedappointmentUncheckedCreateWithoutAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type archivedappointmentCreateOrConnectWithoutAreaInput = {
    where: archivedappointmentWhereUniqueInput
    create: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput>
  }

  export type archivedappointmentCreateManyAreaInputEnvelope = {
    data: archivedappointmentCreateManyAreaInput | archivedappointmentCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutAreaInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutAreaInput, appointmentUncheckedUpdateWithoutAreaInput>
    create: XOR<appointmentCreateWithoutAreaInput, appointmentUncheckedCreateWithoutAreaInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutAreaInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutAreaInput, appointmentUncheckedUpdateWithoutAreaInput>
  }

  export type appointmentUpdateManyWithWhereWithoutAreaInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutAreaInput>
  }

  export type archivedappointmentUpsertWithWhereUniqueWithoutAreaInput = {
    where: archivedappointmentWhereUniqueInput
    update: XOR<archivedappointmentUpdateWithoutAreaInput, archivedappointmentUncheckedUpdateWithoutAreaInput>
    create: XOR<archivedappointmentCreateWithoutAreaInput, archivedappointmentUncheckedCreateWithoutAreaInput>
  }

  export type archivedappointmentUpdateWithWhereUniqueWithoutAreaInput = {
    where: archivedappointmentWhereUniqueInput
    data: XOR<archivedappointmentUpdateWithoutAreaInput, archivedappointmentUncheckedUpdateWithoutAreaInput>
  }

  export type archivedappointmentUpdateManyWithWhereWithoutAreaInput = {
    where: archivedappointmentScalarWhereInput
    data: XOR<archivedappointmentUpdateManyMutationInput, archivedappointmentUncheckedUpdateManyWithoutAreaInput>
  }

  export type doctorCreateWithoutClinicInput = {
    id?: string
    name?: string | null
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutClinicInput = {
    id?: string
    name?: string | null
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutClinicInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput>
  }

  export type doctorCreateManyClinicInputEnvelope = {
    data: doctorCreateManyClinicInput | doctorCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type appointmentCreateWithoutClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    area?: areaCreateNestedOneWithoutAppointmentsInput
    user?: userCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentUncheckedCreateWithoutClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    userId?: string | null
    areaId?: string | null
  }

  export type appointmentCreateOrConnectWithoutClinicInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
  }

  export type appointmentCreateManyClinicInputEnvelope = {
    data: appointmentCreateManyClinicInput | appointmentCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type archivedappointmentCreateWithoutClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    area?: areaCreateNestedOneWithoutArchivedAppointmentsInput
    user?: userCreateNestedOneWithoutArchivedAppointmentsInput
    doctor?: doctorCreateNestedOneWithoutArchivedAppointmentsInput
  }

  export type archivedappointmentUncheckedCreateWithoutClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    areaId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type archivedappointmentCreateOrConnectWithoutClinicInput = {
    where: archivedappointmentWhereUniqueInput
    create: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput>
  }

  export type archivedappointmentCreateManyClinicInputEnvelope = {
    data: archivedappointmentCreateManyClinicInput | archivedappointmentCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type doctorUpsertWithWhereUniqueWithoutClinicInput = {
    where: doctorWhereUniqueInput
    update: XOR<doctorUpdateWithoutClinicInput, doctorUncheckedUpdateWithoutClinicInput>
    create: XOR<doctorCreateWithoutClinicInput, doctorUncheckedCreateWithoutClinicInput>
  }

  export type doctorUpdateWithWhereUniqueWithoutClinicInput = {
    where: doctorWhereUniqueInput
    data: XOR<doctorUpdateWithoutClinicInput, doctorUncheckedUpdateWithoutClinicInput>
  }

  export type doctorUpdateManyWithWhereWithoutClinicInput = {
    where: doctorScalarWhereInput
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutClinicInput>
  }

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[]
    OR?: doctorScalarWhereInput[]
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[]
    id?: StringFilter<"doctor"> | string
    name?: StringNullableFilter<"doctor"> | string | null
    clinicId?: StringNullableFilter<"doctor"> | string | null
  }

  export type appointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>
  }

  export type appointmentUpdateManyWithWhereWithoutClinicInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutClinicInput>
  }

  export type archivedappointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: archivedappointmentWhereUniqueInput
    update: XOR<archivedappointmentUpdateWithoutClinicInput, archivedappointmentUncheckedUpdateWithoutClinicInput>
    create: XOR<archivedappointmentCreateWithoutClinicInput, archivedappointmentUncheckedCreateWithoutClinicInput>
  }

  export type archivedappointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: archivedappointmentWhereUniqueInput
    data: XOR<archivedappointmentUpdateWithoutClinicInput, archivedappointmentUncheckedUpdateWithoutClinicInput>
  }

  export type archivedappointmentUpdateManyWithWhereWithoutClinicInput = {
    where: archivedappointmentScalarWhereInput
    data: XOR<archivedappointmentUpdateManyMutationInput, archivedappointmentUncheckedUpdateManyWithoutClinicInput>
  }

  export type clinicCreateWithoutDoctorInput = {
    id?: string
    name: string
    numberLimit?: number | null
    appointments?: appointmentCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentCreateNestedManyWithoutClinicInput
  }

  export type clinicUncheckedCreateWithoutDoctorInput = {
    id?: string
    name: string
    numberLimit?: number | null
    appointments?: appointmentUncheckedCreateNestedManyWithoutClinicInput
    archivedAppointments?: archivedappointmentUncheckedCreateNestedManyWithoutClinicInput
  }

  export type clinicCreateOrConnectWithoutDoctorInput = {
    where: clinicWhereUniqueInput
    create: XOR<clinicCreateWithoutDoctorInput, clinicUncheckedCreateWithoutDoctorInput>
  }

  export type archivedappointmentCreateWithoutDoctorInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinic?: clinicCreateNestedOneWithoutArchivedAppointmentsInput
    area?: areaCreateNestedOneWithoutArchivedAppointmentsInput
    user?: userCreateNestedOneWithoutArchivedAppointmentsInput
  }

  export type archivedappointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    userId?: string | null
  }

  export type archivedappointmentCreateOrConnectWithoutDoctorInput = {
    where: archivedappointmentWhereUniqueInput
    create: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput>
  }

  export type archivedappointmentCreateManyDoctorInputEnvelope = {
    data: archivedappointmentCreateManyDoctorInput | archivedappointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type clinicUpsertWithoutDoctorInput = {
    update: XOR<clinicUpdateWithoutDoctorInput, clinicUncheckedUpdateWithoutDoctorInput>
    create: XOR<clinicCreateWithoutDoctorInput, clinicUncheckedCreateWithoutDoctorInput>
    where?: clinicWhereInput
  }

  export type clinicUpdateToOneWithWhereWithoutDoctorInput = {
    where?: clinicWhereInput
    data: XOR<clinicUpdateWithoutDoctorInput, clinicUncheckedUpdateWithoutDoctorInput>
  }

  export type clinicUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: appointmentUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUpdateManyWithoutClinicNestedInput
  }

  export type clinicUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    numberLimit?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: appointmentUncheckedUpdateManyWithoutClinicNestedInput
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type archivedappointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: archivedappointmentWhereUniqueInput
    update: XOR<archivedappointmentUpdateWithoutDoctorInput, archivedappointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<archivedappointmentCreateWithoutDoctorInput, archivedappointmentUncheckedCreateWithoutDoctorInput>
  }

  export type archivedappointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: archivedappointmentWhereUniqueInput
    data: XOR<archivedappointmentUpdateWithoutDoctorInput, archivedappointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type archivedappointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: archivedappointmentScalarWhereInput
    data: XOR<archivedappointmentUpdateManyMutationInput, archivedappointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type appointmentCreateManyUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
  }

  export type archivedappointmentCreateManyUserInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    doctorId?: string | null
  }

  export type appointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutAppointmentsNestedInput
    area?: areaUpdateOneWithoutAppointmentsNestedInput
  }

  export type appointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutArchivedAppointmentsNestedInput
    area?: areaUpdateOneWithoutArchivedAppointmentsNestedInput
    doctor?: doctorUpdateOneWithoutArchivedAppointmentsNestedInput
  }

  export type archivedappointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentCreateManyAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
  }

  export type archivedappointmentCreateManyAreaInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type appointmentUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutAppointmentsNestedInput
    user?: userUpdateOneWithoutAppointmentsNestedInput
  }

  export type appointmentUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutArchivedAppointmentsNestedInput
    user?: userUpdateOneWithoutArchivedAppointmentsNestedInput
    doctor?: doctorUpdateOneWithoutArchivedAppointmentsNestedInput
  }

  export type archivedappointmentUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doctorCreateManyClinicInput = {
    id?: string
    name?: string | null
  }

  export type appointmentCreateManyClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    userId?: string | null
    areaId?: string | null
  }

  export type archivedappointmentCreateManyClinicInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    areaId?: string | null
    userId?: string | null
    doctorId?: string | null
  }

  export type doctorUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAppointments?: archivedappointmentUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    archivedAppointments?: archivedappointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    area?: areaUpdateOneWithoutAppointmentsNestedInput
    user?: userUpdateOneWithoutAppointmentsNestedInput
  }

  export type appointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    area?: areaUpdateOneWithoutArchivedAppointmentsNestedInput
    user?: userUpdateOneWithoutArchivedAppointmentsNestedInput
    doctor?: doctorUpdateOneWithoutArchivedAppointmentsNestedInput
  }

  export type archivedappointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentCreateManyDoctorInput = {
    id?: string
    appointmentNum?: number | null
    name?: string | null
    phoneNumber?: string | null
    address?: string | null
    age?: number | null
    gender?: string | null
    doctorName?: string | null
    clinicName?: string | null
    date?: string | null
    time?: string | null
    day?: string | null
    period?: string | null
    clinicId?: string | null
    areaId?: string | null
    userId?: string | null
  }

  export type archivedappointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: clinicUpdateOneWithoutArchivedAppointmentsNestedInput
    area?: areaUpdateOneWithoutArchivedAppointmentsNestedInput
    user?: userUpdateOneWithoutArchivedAppointmentsNestedInput
  }

  export type archivedappointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivedappointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNum?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    clinicName?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}