/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model payment
 *
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>;
/**
 * Model rental
 *
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>;
/**
 * Model store
 *
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>;
/**
 * Model tool
 *
 */
export type tool = $Result.DefaultSelection<Prisma.$toolPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
   * ```
   */
  get rental(): Prisma.rentalDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
   * ```
   */
  get store(): Prisma.storeDelegate<ExtArgs>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **tool** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tools
   * const tools = await prisma.tool.findMany()
   * ```
   */
  get tool(): Prisma.toolDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    payment: 'payment';
    rental: 'rental';
    store: 'store';
    tool: 'tool';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'payment' | 'rental' | 'store' | 'tool' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>;
        fields: Prisma.paymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[];
          };
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>;
        fields: Prisma.rentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[];
          };
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRental>;
          };
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>;
            result: $Utils.Optional<RentalCountAggregateOutputType> | number;
          };
        };
      };
      store: {
        payload: Prisma.$storePayload<ExtArgs>;
        fields: Prisma.storeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>[];
          };
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$storePayload>;
          };
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStore>;
          };
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StoreGroupByOutputType>[];
          };
          count: {
            args: Prisma.storeCountArgs<ExtArgs>;
            result: $Utils.Optional<StoreCountAggregateOutputType> | number;
          };
        };
      };
      tool: {
        payload: Prisma.$toolPayload<ExtArgs>;
        fields: Prisma.toolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.toolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.toolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findFirst: {
            args: Prisma.toolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.toolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findMany: {
            args: Prisma.toolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>[];
          };
          create: {
            args: Prisma.toolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          createMany: {
            args: Prisma.toolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.toolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          update: {
            args: Prisma.toolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          deleteMany: {
            args: Prisma.toolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.toolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.toolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTool>;
          };
          groupBy: {
            args: Prisma.toolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ToolGroupByOutputType>[];
          };
          count: {
            args: Prisma.toolCountArgs<ExtArgs>;
            result: $Utils.Optional<ToolCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    store: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | CompanyCountOutputTypeCountStoreArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: storeWhereInput;
    };

  /**
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    payment: number;
  };

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | RentalCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: paymentWhereInput;
  };

  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    tool: number;
  };

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | StoreCountOutputTypeCountToolArgs;
  };

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
  };

  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    rental: number;
  };

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | ToolCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    payment: number;
    rental: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | UserCountOutputTypeCountPaymentArgs;
    rental?: boolean | UserCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: paymentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      store?: boolean | company$storeArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | company$storeArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      store: Prisma.$storePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends company$storeArgs<ExtArgs> = {}>(
      args?: Subset<T, company$storeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip_code: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.store
   */
  export type company$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    where?: storeWhereInput;
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    cursor?: storeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    rental_id: string | null;
    amount: number | null;
    payment_method: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    rental_id: string | null;
    amount: number | null;
    payment_method: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    user_id: number;
    rental_id: number;
    amount: number;
    payment_method: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    user_id?: true;
    rental_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    rental_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    user_id?: true;
    rental_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    user_id: string;
    rental_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
      }
    >
  >;

  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      rental_id?: boolean;
      amount?: boolean;
      payment_method?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rental?: boolean | rentalDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type paymentSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    rental_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | rentalDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment';
    objects: {
      rental: Prisma.$rentalPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        rental_id: string;
        amount: number;
        payment_method: string;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<
    Prisma.$paymentPayload,
    S
  >;

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    paymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment']; meta: { name: 'payment' } };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentCreateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment model
     */
    readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rental<T extends rentalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, rentalDefaultArgs<ExtArgs>>,
    ): Prisma__rentalClient<
      $Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<'payment', 'String'>;
    readonly user_id: FieldRef<'payment', 'String'>;
    readonly rental_id: FieldRef<'payment', 'String'>;
    readonly amount: FieldRef<'payment', 'Int'>;
    readonly payment_method: FieldRef<'payment', 'String'>;
    readonly status: FieldRef<'payment', 'String'>;
    readonly created_at: FieldRef<'payment', 'DateTime'>;
    readonly updated_at: FieldRef<'payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
  };

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>;
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput;
  };

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput;
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
  };

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput;
  };

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
  };

  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  export type RentalAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalSumAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    tool_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    tool_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalCountAggregateOutputType = {
    id: number;
    user_id: number;
    tool_id: number;
    start_date: number;
    end_date: number;
    total_price: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RentalAvgAggregateInputType = {
    total_price?: true;
  };

  export type RentalSumAggregateInputType = {
    total_price?: true;
  };

  export type RentalMinAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalCountAggregateInputType = {
    id?: true;
    user_id?: true;
    tool_id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rentals
     **/
    _count?: true | RentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RentalMaxAggregateInputType;
  };

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>;
  };

  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[];
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum;
    having?: rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
  };

  export type RentalGroupByOutputType = {
    id: string;
    user_id: string;
    tool_id: string;
    start_date: Date;
    end_date: Date;
    total_price: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RentalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
          : GetScalarType<T[P], RentalGroupByOutputType[P]>;
      }
    >
  >;

  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      tool_id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      total_price?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment?: boolean | rental$paymentArgs<ExtArgs>;
      tool?: boolean | toolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rental']
  >;

  export type rentalSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    tool_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    total_price?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | rental$paymentArgs<ExtArgs>;
    tool?: boolean | toolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'rental';
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[];
      tool: Prisma.$toolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        tool_id: string;
        start_date: Date;
        end_date: Date;
        total_price: number;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['rental']
    >;
    composites: {};
  };

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<
    Prisma.$rentalPayload,
    S
  >;

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    rentalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RentalCountAggregateInputType | true;
  };

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental']; meta: { name: 'rental' } };
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends rentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends rentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     *
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends rentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     *
     **/
    create<T extends rentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalCreateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends rentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     *
     **/
    delete<T extends rentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends rentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends rentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends rentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     **/
    upsert<T extends rentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
     **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(
      args: Subset<T, RentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetRentalAggregateType<T>>;

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
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
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rental model
     */
    readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends rental$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, rental$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    tool<T extends toolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toolDefaultArgs<ExtArgs>>,
    ): Prisma__toolClient<
      $Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly id: FieldRef<'rental', 'String'>;
    readonly user_id: FieldRef<'rental', 'String'>;
    readonly tool_id: FieldRef<'rental', 'String'>;
    readonly start_date: FieldRef<'rental', 'DateTime'>;
    readonly end_date: FieldRef<'rental', 'DateTime'>;
    readonly total_price: FieldRef<'rental', 'Int'>;
    readonly status: FieldRef<'rental', 'String'>;
    readonly created_at: FieldRef<'rental', 'DateTime'>;
    readonly updated_at: FieldRef<'rental', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
  };

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>;
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput;
  };

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput;
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
  };

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput;
  };

  /**
   * rental.payment
   */
  export type rental$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
  };

  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
  };

  export type StoreMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    company_id: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StoreMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    company_id: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StoreCountAggregateOutputType = {
    id: number;
    name: number;
    location: number;
    company_id: number;
    opening_hours: number;
    closing_hours: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StoreMinAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    company_id?: true;
    opening_hours?: true;
    closing_hours?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StoreMaxAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    company_id?: true;
    opening_hours?: true;
    closing_hours?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StoreCountAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    company_id?: true;
    opening_hours?: true;
    closing_hours?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned stores
     **/
    _count?: true | StoreCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StoreMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StoreMaxAggregateInputType;
  };

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
    [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>;
  };

  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput;
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[];
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum;
    having?: storeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreCountAggregateInputType | true;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
  };

  export type StoreGroupByOutputType = {
    id: string;
    name: string;
    location: string;
    company_id: string;
    opening_hours: string | null;
    closing_hours: string | null;
    created_at: Date;
    updated_at: Date;
    _count: StoreCountAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
  };

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StoreGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
          : GetScalarType<T[P], StoreGroupByOutputType[P]>;
      }
    >
  >;

  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      location?: boolean;
      company_id?: boolean;
      opening_hours?: boolean;
      closing_hours?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      tool?: boolean | store$toolArgs<ExtArgs>;
      _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['store']
  >;

  export type storeSelectScalar = {
    id?: boolean;
    name?: boolean;
    location?: boolean;
    company_id?: boolean;
    opening_hours?: boolean;
    closing_hours?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    tool?: boolean | store$toolArgs<ExtArgs>;
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'store';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      tool: Prisma.$toolPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        location: string;
        company_id: string;
        opening_hours: string | null;
        closing_hours: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['store']
    >;
    composites: {};
  };

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<
    Prisma.$storePayload,
    S
  >;

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    storeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StoreCountAggregateInputType | true;
  };

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store']; meta: { name: 'store' } };
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends storeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends storeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     *
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends storeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     *
     **/
    create<T extends storeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, storeCreateArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Stores.
     *     @param {storeCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends storeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     *
     **/
    delete<T extends storeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, storeDeleteArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends storeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpdateArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends storeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends storeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     **/
    upsert<T extends storeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, storeUpsertArgs<ExtArgs>>,
    ): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
     **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(
      args: Subset<T, StoreAggregateArgs>,
    ): Prisma.PrismaPromise<GetStoreAggregateType<T>>;

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
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
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the store model
     */
    readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    tool<T extends store$toolArgs<ExtArgs> = {}>(
      args?: Subset<T, store$toolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly id: FieldRef<'store', 'String'>;
    readonly name: FieldRef<'store', 'String'>;
    readonly location: FieldRef<'store', 'String'>;
    readonly company_id: FieldRef<'store', 'String'>;
    readonly opening_hours: FieldRef<'store', 'String'>;
    readonly closing_hours: FieldRef<'store', 'String'>;
    readonly created_at: FieldRef<'store', 'DateTime'>;
    readonly updated_at: FieldRef<'store', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[];
  };

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>;
  };

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>;
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>;
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput;
  };

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput;
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>;
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>;
  };

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput;
  };

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput;
  };

  /**
   * store.tool
   */
  export type store$toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    where?: toolWhereInput;
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    cursor?: toolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: storeInclude<ExtArgs> | null;
  };

  /**
   * Model tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  export type ToolAvgAggregateOutputType = {
    price_per_day: number | null;
  };

  export type ToolSumAggregateOutputType = {
    price_per_day: number | null;
  };

  export type ToolMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price_per_day: number | null;
    store_id: string | null;
    availability: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price_per_day: number | null;
    store_id: string | null;
    availability: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price_per_day: number;
    store_id: number;
    availability: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ToolAvgAggregateInputType = {
    price_per_day?: true;
  };

  export type ToolSumAggregateInputType = {
    price_per_day?: true;
  };

  export type ToolMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price_per_day?: true;
    store_id?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price_per_day?: true;
    store_id?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price_per_day?: true;
    store_id?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tool to aggregate.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tools
     **/
    _count?: true | ToolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ToolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ToolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ToolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ToolMaxAggregateInputType;
  };

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
    [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>;
  };

  export type toolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
    orderBy?: toolOrderByWithAggregationInput | toolOrderByWithAggregationInput[];
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum;
    having?: toolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToolCountAggregateInputType | true;
    _avg?: ToolAvgAggregateInputType;
    _sum?: ToolSumAggregateInputType;
    _min?: ToolMinAggregateInputType;
    _max?: ToolMaxAggregateInputType;
  };

  export type ToolGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price_per_day: number;
    store_id: string;
    availability: boolean;
    created_at: Date;
    updated_at: Date;
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  type GetToolGroupByPayload<T extends toolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ToolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
          : GetScalarType<T[P], ToolGroupByOutputType[P]>;
      }
    >
  >;

  export type toolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price_per_day?: boolean;
      store_id?: boolean;
      availability?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rental?: boolean | tool$rentalArgs<ExtArgs>;
      store?: boolean | storeDefaultArgs<ExtArgs>;
      _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tool']
  >;

  export type toolSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price_per_day?: boolean;
    store_id?: boolean;
    availability?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type toolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | tool$rentalArgs<ExtArgs>;
    store?: boolean | storeDefaultArgs<ExtArgs>;
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $toolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tool';
    objects: {
      rental: Prisma.$rentalPayload<ExtArgs>[];
      store: Prisma.$storePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price_per_day: number;
        store_id: string;
        availability: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tool']
    >;
    composites: {};
  };

  type toolGetPayload<S extends boolean | null | undefined | toolDefaultArgs> = $Result.GetResult<
    Prisma.$toolPayload,
    S
  >;

  type toolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    toolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ToolCountAggregateInputType | true;
  };

  export interface toolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tool']; meta: { name: 'tool' } };
    /**
     * Find zero or one Tool that matches the filter.
     * @param {toolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends toolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, toolFindUniqueArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tool that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends toolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     *
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tool.
     * @param {toolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     *
     **/
    create<T extends toolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, toolCreateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tools.
     *     @param {toolCreateManyArgs} args - Arguments to create many Tools.
     *     @example
     *     // Create many Tools
     *     const tool = await prisma.tool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tool.
     * @param {toolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     *
     **/
    delete<T extends toolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, toolDeleteArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tool.
     * @param {toolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tools.
     * @param {toolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tool.
     * @param {toolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     **/
    upsert<T extends toolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpsertArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
     **/
    count<T extends toolCountArgs>(
      args?: Subset<T, toolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolAggregateArgs>(
      args: Subset<T, ToolAggregateArgs>,
    ): Prisma.PrismaPromise<GetToolAggregateType<T>>;

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolGroupByArgs} args - Group by arguments.
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
      T extends toolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolGroupByArgs['orderBy'] }
        : { orderBy?: toolGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, toolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tool model
     */
    readonly fields: toolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rental<T extends tool$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, tool$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    store<T extends storeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, storeDefaultArgs<ExtArgs>>,
    ): Prisma__storeClient<
      $Result.GetResult<Prisma.$storePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tool model
   */
  interface toolFieldRefs {
    readonly id: FieldRef<'tool', 'String'>;
    readonly name: FieldRef<'tool', 'String'>;
    readonly description: FieldRef<'tool', 'String'>;
    readonly price_per_day: FieldRef<'tool', 'Int'>;
    readonly store_id: FieldRef<'tool', 'String'>;
    readonly availability: FieldRef<'tool', 'Boolean'>;
    readonly created_at: FieldRef<'tool', 'DateTime'>;
    readonly updated_at: FieldRef<'tool', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tool findUnique
   */
  export type toolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findUniqueOrThrow
   */
  export type toolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findFirst
   */
  export type toolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findFirstOrThrow
   */
  export type toolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findMany
   */
  export type toolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tools to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool create
   */
  export type toolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to create a tool.
     */
    data: XOR<toolCreateInput, toolUncheckedCreateInput>;
  };

  /**
   * tool createMany
   */
  export type toolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolCreateManyInput | toolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tool update
   */
  export type toolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to update a tool.
     */
    data: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
    /**
     * Choose, which tool to update.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool updateMany
   */
  export type toolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyInput>;
    /**
     * Filter which tools to update
     */
    where?: toolWhereInput;
  };

  /**
   * tool upsert
   */
  export type toolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The filter to search for the tool to update in case it exists.
     */
    where: toolWhereUniqueInput;
    /**
     * In case the tool found by the `where` argument doesn't exist, create a new tool with this data.
     */
    create: XOR<toolCreateInput, toolUncheckedCreateInput>;
    /**
     * In case the tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
  };

  /**
   * tool delete
   */
  export type toolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter which tool to delete.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool deleteMany
   */
  export type toolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolWhereInput;
  };

  /**
   * tool.rental
   */
  export type tool$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * tool without action
   */
  export type toolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment?: boolean | user$paymentArgs<ExtArgs>;
      rental?: boolean | user$rentalArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | user$paymentArgs<ExtArgs>;
    rental?: boolean | user$rentalArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[];
      rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
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
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

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
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

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
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

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
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

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
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends user$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    rental<T extends user$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    rental_id: 'rental_id';
    amount: 'amount';
    payment_method: 'payment_method';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const RentalScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    tool_id: 'tool_id';
    start_date: 'start_date';
    end_date: 'end_date';
    total_price: 'total_price';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];

  export const StoreScalarFieldEnum: {
    id: 'id';
    name: 'name';
    location: 'location';
    company_id: 'company_id';
    opening_hours: 'opening_hours';
    closing_hours: 'closing_hours';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum];

  export const ToolScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price_per_day: 'price_per_day';
    store_id: 'store_id';
    availability: 'availability';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    store?: StoreListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    store?: storeOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip_code?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      store?: StoreListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[];
    OR?: paymentWhereInput[];
    NOT?: paymentWhereInput | paymentWhereInput[];
    id?: UuidFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    rental_id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_method?: StringFilter<'payment'> | string;
    status?: StringFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
    rental?: XOR<RentalRelationFilter, rentalWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rental?: rentalOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type paymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: paymentWhereInput | paymentWhereInput[];
      OR?: paymentWhereInput[];
      NOT?: paymentWhereInput | paymentWhereInput[];
      user_id?: UuidFilter<'payment'> | string;
      rental_id?: UuidFilter<'payment'> | string;
      amount?: IntFilter<'payment'> | number;
      payment_method?: StringFilter<'payment'> | string;
      status?: StringFilter<'payment'> | string;
      created_at?: DateTimeFilter<'payment'> | Date | string;
      updated_at?: DateTimeFilter<'payment'> | Date | string;
      rental?: XOR<RentalRelationFilter, rentalWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: paymentCountOrderByAggregateInput;
    _avg?: paymentAvgOrderByAggregateInput;
    _max?: paymentMaxOrderByAggregateInput;
    _min?: paymentMinOrderByAggregateInput;
    _sum?: paymentSumOrderByAggregateInput;
  };

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    OR?: paymentScalarWhereWithAggregatesInput[];
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment'> | string;
    user_id?: UuidWithAggregatesFilter<'payment'> | string;
    rental_id?: UuidWithAggregatesFilter<'payment'> | string;
    amount?: IntWithAggregatesFilter<'payment'> | number;
    payment_method?: StringWithAggregatesFilter<'payment'> | string;
    status?: StringWithAggregatesFilter<'payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
  };

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[];
    OR?: rentalWhereInput[];
    NOT?: rentalWhereInput | rentalWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    tool_id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    status?: StringFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
    payment?: PaymentListRelationFilter;
    tool?: XOR<ToolRelationFilter, toolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type rentalOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment?: paymentOrderByRelationAggregateInput;
    tool?: toolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type rentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: rentalWhereInput | rentalWhereInput[];
      OR?: rentalWhereInput[];
      NOT?: rentalWhereInput | rentalWhereInput[];
      user_id?: UuidFilter<'rental'> | string;
      tool_id?: UuidFilter<'rental'> | string;
      start_date?: DateTimeFilter<'rental'> | Date | string;
      end_date?: DateTimeFilter<'rental'> | Date | string;
      total_price?: IntFilter<'rental'> | number;
      status?: StringFilter<'rental'> | string;
      created_at?: DateTimeFilter<'rental'> | Date | string;
      updated_at?: DateTimeFilter<'rental'> | Date | string;
      payment?: PaymentListRelationFilter;
      tool?: XOR<ToolRelationFilter, toolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type rentalOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: rentalCountOrderByAggregateInput;
    _avg?: rentalAvgOrderByAggregateInput;
    _max?: rentalMaxOrderByAggregateInput;
    _min?: rentalMinOrderByAggregateInput;
    _sum?: rentalSumOrderByAggregateInput;
  };

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    OR?: rentalScalarWhereWithAggregatesInput[];
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'rental'> | string;
    user_id?: UuidWithAggregatesFilter<'rental'> | string;
    tool_id?: UuidWithAggregatesFilter<'rental'> | string;
    start_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    total_price?: IntWithAggregatesFilter<'rental'> | number;
    status?: StringWithAggregatesFilter<'rental'> | string;
    created_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
  };

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[];
    OR?: storeWhereInput[];
    NOT?: storeWhereInput | storeWhereInput[];
    id?: UuidFilter<'store'> | string;
    name?: StringFilter<'store'> | string;
    location?: StringFilter<'store'> | string;
    company_id?: UuidFilter<'store'> | string;
    opening_hours?: StringNullableFilter<'store'> | string | null;
    closing_hours?: StringNullableFilter<'store'> | string | null;
    created_at?: DateTimeFilter<'store'> | Date | string;
    updated_at?: DateTimeFilter<'store'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    tool?: ToolListRelationFilter;
  };

  export type storeOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    tool?: toolOrderByRelationAggregateInput;
  };

  export type storeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: storeWhereInput | storeWhereInput[];
      OR?: storeWhereInput[];
      NOT?: storeWhereInput | storeWhereInput[];
      name?: StringFilter<'store'> | string;
      location?: StringFilter<'store'> | string;
      company_id?: UuidFilter<'store'> | string;
      opening_hours?: StringNullableFilter<'store'> | string | null;
      closing_hours?: StringNullableFilter<'store'> | string | null;
      created_at?: DateTimeFilter<'store'> | Date | string;
      updated_at?: DateTimeFilter<'store'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      tool?: ToolListRelationFilter;
    },
    'id'
  >;

  export type storeOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: storeCountOrderByAggregateInput;
    _max?: storeMaxOrderByAggregateInput;
    _min?: storeMinOrderByAggregateInput;
  };

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[];
    OR?: storeScalarWhereWithAggregatesInput[];
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'store'> | string;
    name?: StringWithAggregatesFilter<'store'> | string;
    location?: StringWithAggregatesFilter<'store'> | string;
    company_id?: UuidWithAggregatesFilter<'store'> | string;
    opening_hours?: StringNullableWithAggregatesFilter<'store'> | string | null;
    closing_hours?: StringNullableWithAggregatesFilter<'store'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'store'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'store'> | Date | string;
  };

  export type toolWhereInput = {
    AND?: toolWhereInput | toolWhereInput[];
    OR?: toolWhereInput[];
    NOT?: toolWhereInput | toolWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    description?: StringNullableFilter<'tool'> | string | null;
    price_per_day?: IntFilter<'tool'> | number;
    store_id?: UuidFilter<'tool'> | string;
    availability?: BoolFilter<'tool'> | boolean;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
    rental?: RentalListRelationFilter;
    store?: XOR<StoreRelationFilter, storeWhereInput>;
  };

  export type toolOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price_per_day?: SortOrder;
    store_id?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rental?: rentalOrderByRelationAggregateInput;
    store?: storeOrderByWithRelationInput;
  };

  export type toolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: toolWhereInput | toolWhereInput[];
      OR?: toolWhereInput[];
      NOT?: toolWhereInput | toolWhereInput[];
      name?: StringFilter<'tool'> | string;
      description?: StringNullableFilter<'tool'> | string | null;
      price_per_day?: IntFilter<'tool'> | number;
      store_id?: UuidFilter<'tool'> | string;
      availability?: BoolFilter<'tool'> | boolean;
      created_at?: DateTimeFilter<'tool'> | Date | string;
      updated_at?: DateTimeFilter<'tool'> | Date | string;
      rental?: RentalListRelationFilter;
      store?: XOR<StoreRelationFilter, storeWhereInput>;
    },
    'id'
  >;

  export type toolOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price_per_day?: SortOrder;
    store_id?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: toolCountOrderByAggregateInput;
    _avg?: toolAvgOrderByAggregateInput;
    _max?: toolMaxOrderByAggregateInput;
    _min?: toolMinOrderByAggregateInput;
    _sum?: toolSumOrderByAggregateInput;
  };

  export type toolScalarWhereWithAggregatesInput = {
    AND?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    OR?: toolScalarWhereWithAggregatesInput[];
    NOT?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tool'> | string;
    name?: StringWithAggregatesFilter<'tool'> | string;
    description?: StringNullableWithAggregatesFilter<'tool'> | string | null;
    price_per_day?: IntWithAggregatesFilter<'tool'> | number;
    store_id?: UuidWithAggregatesFilter<'tool'> | string;
    availability?: BoolWithAggregatesFilter<'tool'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    payment?: PaymentListRelationFilter;
    rental?: RentalListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment?: paymentOrderByRelationAggregateInput;
    rental?: rentalOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      payment?: PaymentListRelationFilter;
      rental?: RentalListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    store?: storeCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    store?: storeUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    store?: storeUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    store?: storeUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type paymentCreateInput = {
    id?: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental: rentalCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateInput = {
    id?: string;
    user_id: string;
    rental_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyInput = {
    id?: string;
    user_id: string;
    rental_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutRentalInput;
    tool: toolCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateInput = {
    id?: string;
    user_id: string;
    tool_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutRentalNestedInput;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalCreateManyInput = {
    id?: string;
    user_id: string;
    tool_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type storeCreateInput = {
    id?: string;
    name: string;
    location: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutStoreInput;
    tool?: toolCreateNestedManyWithoutStoreInput;
  };

  export type storeUncheckedCreateInput = {
    id?: string;
    name: string;
    location: string;
    company_id: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool?: toolUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutStoreNestedInput;
    tool?: toolUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type storeCreateManyInput = {
    id?: string;
    name: string;
    location: string;
    company_id: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type storeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type storeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutToolInput;
    store: storeCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    store_id: string;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutToolNestedInput;
    store?: storeUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    store_id: string;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StoreListRelationFilter = {
    every?: storeWhereInput;
    some?: storeWhereInput;
    none?: storeWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type storeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type RentalRelationFilter = {
    is?: rentalWhereInput;
    isNot?: rentalWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput;
    some?: paymentWhereInput;
    none?: paymentWhereInput;
  };

  export type ToolRelationFilter = {
    is?: toolWhereInput;
    isNot?: toolWhereInput;
  };

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type rentalCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type rentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tool_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type ToolListRelationFilter = {
    every?: toolWhereInput;
    some?: toolWhereInput;
    none?: toolWhereInput;
  };

  export type toolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type storeCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type RentalListRelationFilter = {
    every?: rentalWhereInput;
    some?: rentalWhereInput;
    none?: rentalWhereInput;
  };

  export type StoreRelationFilter = {
    is?: storeWhereInput;
    isNot?: storeWhereInput;
  };

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toolCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price_per_day?: SortOrder;
    store_id?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolAvgOrderByAggregateInput = {
    price_per_day?: SortOrder;
  };

  export type toolMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price_per_day?: SortOrder;
    store_id?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price_per_day?: SortOrder;
    store_id?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolSumOrderByAggregateInput = {
    price_per_day?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type storeCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>
      | storeCreateWithoutCompanyInput[]
      | storeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: storeCreateOrConnectWithoutCompanyInput | storeCreateOrConnectWithoutCompanyInput[];
    createMany?: storeCreateManyCompanyInputEnvelope;
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
  };

  export type storeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>
      | storeCreateWithoutCompanyInput[]
      | storeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: storeCreateOrConnectWithoutCompanyInput | storeCreateOrConnectWithoutCompanyInput[];
    createMany?: storeCreateManyCompanyInputEnvelope;
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type storeUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>
      | storeCreateWithoutCompanyInput[]
      | storeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: storeCreateOrConnectWithoutCompanyInput | storeCreateOrConnectWithoutCompanyInput[];
    upsert?: storeUpsertWithWhereUniqueWithoutCompanyInput | storeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: storeCreateManyCompanyInputEnvelope;
    set?: storeWhereUniqueInput | storeWhereUniqueInput[];
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[];
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    update?: storeUpdateWithWhereUniqueWithoutCompanyInput | storeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: storeUpdateManyWithWhereWithoutCompanyInput | storeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[];
  };

  export type storeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>
      | storeCreateWithoutCompanyInput[]
      | storeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: storeCreateOrConnectWithoutCompanyInput | storeCreateOrConnectWithoutCompanyInput[];
    upsert?: storeUpsertWithWhereUniqueWithoutCompanyInput | storeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: storeCreateManyCompanyInputEnvelope;
    set?: storeWhereUniqueInput | storeWhereUniqueInput[];
    disconnect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    delete?: storeWhereUniqueInput | storeWhereUniqueInput[];
    connect?: storeWhereUniqueInput | storeWhereUniqueInput[];
    update?: storeUpdateWithWhereUniqueWithoutCompanyInput | storeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: storeUpdateManyWithWhereWithoutCompanyInput | storeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: storeScalarWhereInput | storeScalarWhereInput[];
  };

  export type rentalCreateNestedOneWithoutPaymentInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput;
    connect?: rentalWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type rentalUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: rentalCreateOrConnectWithoutPaymentInput;
    upsert?: rentalUpsertWithoutPaymentInput;
    connect?: rentalWhereUniqueInput;
    update?: XOR<
      XOR<rentalUpdateToOneWithWhereWithoutPaymentInput, rentalUpdateWithoutPaymentInput>,
      rentalUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    upsert?: userUpsertWithoutPaymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>,
      userUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type paymentCreateNestedManyWithoutRentalInput = {
    create?:
      | XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
      | paymentCreateWithoutRentalInput[]
      | paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[];
    createMany?: paymentCreateManyRentalInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type toolCreateNestedOneWithoutRentalInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    connect?: toolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    connect?: userWhereUniqueInput;
  };

  export type paymentUncheckedCreateNestedManyWithoutRentalInput = {
    create?:
      | XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
      | paymentCreateWithoutRentalInput[]
      | paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[];
    createMany?: paymentCreateManyRentalInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type paymentUpdateManyWithoutRentalNestedInput = {
    create?:
      | XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
      | paymentCreateWithoutRentalInput[]
      | paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutRentalInput | paymentUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: paymentCreateManyRentalInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutRentalInput | paymentUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutRentalInput | paymentUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type toolUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: toolCreateOrConnectWithoutRentalInput;
    upsert?: toolUpsertWithoutRentalInput;
    connect?: toolWhereUniqueInput;
    update?: XOR<
      XOR<toolUpdateToOneWithWhereWithoutRentalInput, toolUpdateWithoutRentalInput>,
      toolUncheckedUpdateWithoutRentalInput
    >;
  };

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    upsert?: userUpsertWithoutRentalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>,
      userUncheckedUpdateWithoutRentalInput
    >;
  };

  export type paymentUncheckedUpdateManyWithoutRentalNestedInput = {
    create?:
      | XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>
      | paymentCreateWithoutRentalInput[]
      | paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutRentalInput | paymentCreateOrConnectWithoutRentalInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutRentalInput | paymentUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: paymentCreateManyRentalInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutRentalInput | paymentUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutRentalInput | paymentUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutStoreInput = {
    create?: XOR<companyCreateWithoutStoreInput, companyUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: companyCreateOrConnectWithoutStoreInput;
    connect?: companyWhereUniqueInput;
  };

  export type toolCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type toolUncheckedCreateNestedManyWithoutStoreInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<companyCreateWithoutStoreInput, companyUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: companyCreateOrConnectWithoutStoreInput;
    upsert?: companyUpsertWithoutStoreInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutStoreInput, companyUpdateWithoutStoreInput>,
      companyUncheckedUpdateWithoutStoreInput
    >;
  };

  export type toolUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutStoreInput | toolUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutStoreInput | toolUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: toolUpdateManyWithWhereWithoutStoreInput | toolUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type toolUncheckedUpdateManyWithoutStoreNestedInput = {
    create?:
      | XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>
      | toolCreateWithoutStoreInput[]
      | toolUncheckedCreateWithoutStoreInput[];
    connectOrCreate?: toolCreateOrConnectWithoutStoreInput | toolCreateOrConnectWithoutStoreInput[];
    upsert?: toolUpsertWithWhereUniqueWithoutStoreInput | toolUpsertWithWhereUniqueWithoutStoreInput[];
    createMany?: toolCreateManyStoreInputEnvelope;
    set?: toolWhereUniqueInput | toolWhereUniqueInput[];
    disconnect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    delete?: toolWhereUniqueInput | toolWhereUniqueInput[];
    connect?: toolWhereUniqueInput | toolWhereUniqueInput[];
    update?: toolUpdateWithWhereUniqueWithoutStoreInput | toolUpdateWithWhereUniqueWithoutStoreInput[];
    updateMany?: toolUpdateManyWithWhereWithoutStoreInput | toolUpdateManyWithWhereWithoutStoreInput[];
    deleteMany?: toolScalarWhereInput | toolScalarWhereInput[];
  };

  export type rentalCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type storeCreateNestedOneWithoutToolInput = {
    create?: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    connectOrCreate?: storeCreateOrConnectWithoutToolInput;
    connect?: storeWhereUniqueInput;
  };

  export type rentalUncheckedCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type rentalUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type storeUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    connectOrCreate?: storeCreateOrConnectWithoutToolInput;
    upsert?: storeUpsertWithoutToolInput;
    connect?: storeWhereUniqueInput;
    update?: XOR<
      XOR<storeUpdateToOneWithWhereWithoutToolInput, storeUpdateWithoutToolInput>,
      storeUncheckedUpdateWithoutToolInput
    >;
  };

  export type rentalUncheckedUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>
      | rentalCreateWithoutToolInput[]
      | rentalUncheckedCreateWithoutToolInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutToolInput | rentalCreateOrConnectWithoutToolInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutToolInput | rentalUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: rentalCreateManyToolInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutToolInput | rentalUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutToolInput | rentalUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type paymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type rentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type storeCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    location: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool?: toolCreateNestedManyWithoutStoreInput;
  };

  export type storeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    location: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool?: toolUncheckedCreateNestedManyWithoutStoreInput;
  };

  export type storeCreateOrConnectWithoutCompanyInput = {
    where: storeWhereUniqueInput;
    create: XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>;
  };

  export type storeCreateManyCompanyInputEnvelope = {
    data: storeCreateManyCompanyInput | storeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type storeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: storeWhereUniqueInput;
    update: XOR<storeUpdateWithoutCompanyInput, storeUncheckedUpdateWithoutCompanyInput>;
    create: XOR<storeCreateWithoutCompanyInput, storeUncheckedCreateWithoutCompanyInput>;
  };

  export type storeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: storeWhereUniqueInput;
    data: XOR<storeUpdateWithoutCompanyInput, storeUncheckedUpdateWithoutCompanyInput>;
  };

  export type storeUpdateManyWithWhereWithoutCompanyInput = {
    where: storeScalarWhereInput;
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type storeScalarWhereInput = {
    AND?: storeScalarWhereInput | storeScalarWhereInput[];
    OR?: storeScalarWhereInput[];
    NOT?: storeScalarWhereInput | storeScalarWhereInput[];
    id?: UuidFilter<'store'> | string;
    name?: StringFilter<'store'> | string;
    location?: StringFilter<'store'> | string;
    company_id?: UuidFilter<'store'> | string;
    opening_hours?: StringNullableFilter<'store'> | string | null;
    closing_hours?: StringNullableFilter<'store'> | string | null;
    created_at?: DateTimeFilter<'store'> | Date | string;
    updated_at?: DateTimeFilter<'store'> | Date | string;
  };

  export type rentalCreateWithoutPaymentInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tool: toolCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutPaymentInput = {
    id?: string;
    user_id: string;
    tool_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutPaymentInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>;
  };

  export type userCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
  };

  export type rentalUpsertWithoutPaymentInput = {
    update: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>;
    create: XOR<rentalCreateWithoutPaymentInput, rentalUncheckedCreateWithoutPaymentInput>;
    where?: rentalWhereInput;
  };

  export type rentalUpdateToOneWithWhereWithoutPaymentInput = {
    where?: rentalWhereInput;
    data: XOR<rentalUpdateWithoutPaymentInput, rentalUncheckedUpdateWithoutPaymentInput>;
  };

  export type rentalUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
  };

  export type userUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type paymentCreateWithoutRentalInput = {
    id?: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutRentalInput = {
    id?: string;
    user_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutRentalInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>;
  };

  export type paymentCreateManyRentalInputEnvelope = {
    data: paymentCreateManyRentalInput | paymentCreateManyRentalInput[];
    skipDuplicates?: boolean;
  };

  export type toolCreateWithoutRentalInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    store: storeCreateNestedOneWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    store_id: string;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolCreateOrConnectWithoutRentalInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
  };

  export type userCreateWithoutRentalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRentalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
  };

  export type paymentUpsertWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>;
    create: XOR<paymentCreateWithoutRentalInput, paymentUncheckedCreateWithoutRentalInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutRentalInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutRentalInput, paymentUncheckedUpdateWithoutRentalInput>;
  };

  export type paymentUpdateManyWithWhereWithoutRentalInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutRentalInput>;
  };

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[];
    OR?: paymentScalarWhereInput[];
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[];
    id?: UuidFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    rental_id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_method?: StringFilter<'payment'> | string;
    status?: StringFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
  };

  export type toolUpsertWithoutRentalInput = {
    update: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
    create: XOR<toolCreateWithoutRentalInput, toolUncheckedCreateWithoutRentalInput>;
    where?: toolWhereInput;
  };

  export type toolUpdateToOneWithWhereWithoutRentalInput = {
    where?: toolWhereInput;
    data: XOR<toolUpdateWithoutRentalInput, toolUncheckedUpdateWithoutRentalInput>;
  };

  export type toolUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    store?: storeUpdateOneRequiredWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    store_id?: StringFieldUpdateOperationsInput | string;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
  };

  export type userUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutStoreInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutStoreInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutStoreInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutStoreInput, companyUncheckedCreateWithoutStoreInput>;
  };

  export type toolCreateWithoutStoreInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalCreateNestedManyWithoutToolInput;
  };

  export type toolUncheckedCreateWithoutStoreInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolCreateOrConnectWithoutStoreInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>;
  };

  export type toolCreateManyStoreInputEnvelope = {
    data: toolCreateManyStoreInput | toolCreateManyStoreInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutStoreInput = {
    update: XOR<companyUpdateWithoutStoreInput, companyUncheckedUpdateWithoutStoreInput>;
    create: XOR<companyCreateWithoutStoreInput, companyUncheckedCreateWithoutStoreInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutStoreInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutStoreInput, companyUncheckedUpdateWithoutStoreInput>;
  };

  export type companyUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type toolUpsertWithWhereUniqueWithoutStoreInput = {
    where: toolWhereUniqueInput;
    update: XOR<toolUpdateWithoutStoreInput, toolUncheckedUpdateWithoutStoreInput>;
    create: XOR<toolCreateWithoutStoreInput, toolUncheckedCreateWithoutStoreInput>;
  };

  export type toolUpdateWithWhereUniqueWithoutStoreInput = {
    where: toolWhereUniqueInput;
    data: XOR<toolUpdateWithoutStoreInput, toolUncheckedUpdateWithoutStoreInput>;
  };

  export type toolUpdateManyWithWhereWithoutStoreInput = {
    where: toolScalarWhereInput;
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyWithoutStoreInput>;
  };

  export type toolScalarWhereInput = {
    AND?: toolScalarWhereInput | toolScalarWhereInput[];
    OR?: toolScalarWhereInput[];
    NOT?: toolScalarWhereInput | toolScalarWhereInput[];
    id?: UuidFilter<'tool'> | string;
    name?: StringFilter<'tool'> | string;
    description?: StringNullableFilter<'tool'> | string | null;
    price_per_day?: IntFilter<'tool'> | number;
    store_id?: UuidFilter<'tool'> | string;
    availability?: BoolFilter<'tool'> | boolean;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
  };

  export type rentalCreateWithoutToolInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutToolInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalCreateOrConnectWithoutToolInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalCreateManyToolInputEnvelope = {
    data: rentalCreateManyToolInput | rentalCreateManyToolInput[];
    skipDuplicates?: boolean;
  };

  export type storeCreateWithoutToolInput = {
    id?: string;
    name: string;
    location: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutStoreInput;
  };

  export type storeUncheckedCreateWithoutToolInput = {
    id?: string;
    name: string;
    location: string;
    company_id: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type storeCreateOrConnectWithoutToolInput = {
    where: storeWhereUniqueInput;
    create: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
  };

  export type rentalUpsertWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
    create: XOR<rentalCreateWithoutToolInput, rentalUncheckedCreateWithoutToolInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutToolInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutToolInput, rentalUncheckedUpdateWithoutToolInput>;
  };

  export type rentalUpdateManyWithWhereWithoutToolInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutToolInput>;
  };

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[];
    OR?: rentalScalarWhereInput[];
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[];
    id?: UuidFilter<'rental'> | string;
    user_id?: UuidFilter<'rental'> | string;
    tool_id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    status?: StringFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
  };

  export type storeUpsertWithoutToolInput = {
    update: XOR<storeUpdateWithoutToolInput, storeUncheckedUpdateWithoutToolInput>;
    create: XOR<storeCreateWithoutToolInput, storeUncheckedCreateWithoutToolInput>;
    where?: storeWhereInput;
  };

  export type storeUpdateToOneWithWhereWithoutToolInput = {
    where?: storeWhereInput;
    data: XOR<storeUpdateWithoutToolInput, storeUncheckedUpdateWithoutToolInput>;
  };

  export type storeUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateWithoutUserInput = {
    id?: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental: rentalCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string;
    rental_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type rentalCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutRentalInput;
    tool: toolCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutUserInput = {
    id?: string;
    tool_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
  };

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
  };

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>;
  };

  export type storeCreateManyCompanyInput = {
    id?: string;
    name: string;
    location: string;
    opening_hours?: string | null;
    closing_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type storeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tool?: toolUncheckedUpdateManyWithoutStoreNestedInput;
  };

  export type storeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyRentalInput = {
    id?: string;
    user_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolCreateManyStoreInput = {
    id?: string;
    name: string;
    description?: string | null;
    price_per_day: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price_per_day?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyToolInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyUserInput = {
    id?: string;
    rental_id: string;
    amount: number;
    payment_method: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateManyUserInput = {
    id?: string;
    tool_id: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutRentalNestedInput;
    tool?: toolUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RentalCountOutputTypeDefaultArgs instead
   */
  export type RentalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RentalCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StoreCountOutputTypeDefaultArgs instead
   */
  export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StoreCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ToolCountOutputTypeDefaultArgs instead
   */
  export type ToolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ToolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use paymentDefaultArgs instead
   */
  export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    paymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use rentalDefaultArgs instead
   */
  export type rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    rentalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use storeDefaultArgs instead
   */
  export type storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = storeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use toolDefaultArgs instead
   */
  export type toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = toolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
