<?php

namespace ProcessMaker\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Access\Gate;
use Illuminate\Contracts\Auth\Factory as Auth;

/**
 * Provides a simple middleware layer to do a permission check against a user
 */
class PermissionCheck
{
    /**
     * The authentication factory instance.
     *
     * @var Auth
     */
    protected $auth;

    /**
     * The gate instance.
     *
     * @var Gate
     */
    protected $gate;

    /**
     * Create a new middleware instance.
     *
     * @param  Auth  $auth
     * @param  Gate  $gate
     * @return void
     */
    public function __construct(Auth $auth, Gate $gate)
    {
        $this->auth = $auth;
        $this->gate = $gate;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Closure  $next
     * @param  string  $ability
     * @param  array|null  $models
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function handle($request, Closure $next)
    {
        $this->auth->authenticate();

        return $next($request);
    }
}
