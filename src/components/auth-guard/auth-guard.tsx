import { Outlet, useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { getToken } from '#root/services/api/token';
import { useAppDispatch, useAppSelector } from '#root/hooks/state';
import { fetchAuthInfo, getAuthStatus, logout } from '#root/store';
import { useEffect } from 'react';
import { Spinner } from '../spinner/spinner';


const AuthGuard = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isIdle, isError, isLoading } = useAppSelector(getAuthStatus)
  const token = getToken();

  useEffect(() => {
    if (isIdle && token) {
      dispatch(fetchAuthInfo())
    }

    if (isError || !token) {
      navigate(AppRoute.Login)
      dispatch(logout())
    }
  }, [dispatch, isIdle, isError, token, navigate])



  if (isLoading) {
    return <Spinner fullscreen size={100} />
  }

  return <Outlet />;
}

export default AuthGuard 