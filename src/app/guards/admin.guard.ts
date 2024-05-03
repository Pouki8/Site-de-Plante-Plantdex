import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isAdmin = false;
  /**
   * Trois niveau d'implémentation du guard
   * De la moins sécurisée à la plus sécurisée
   */

  // 1 - Vérifier si on a un token


  // 2 - récupération du token dans le localstorage
  // 2 - Decoder pour savoir s'il est périmé

  // 3 - Requête vers le back pour savoir si le token est bon

  if (isAdmin) {
    return true;
  } else {
    // redirect vers /login
    alert("Vous n'êtes pas admin");

    return false;
  }



};
